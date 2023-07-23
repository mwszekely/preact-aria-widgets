# Preact Aria Widgets

Preact props that implement ARIA-compliant widgets in the style of `preact-prop-helpers` (i.e. hooks that swizzle parameters and returns back and forth).  **No CSS is provided*** &ndash; this library is intended for wiring up event handlers, HTML/ARIA attributes, labels, and so on, but each hook gives you the information you need to create appropriate e.g. `class` values to style your own components.

This library is split into two parts: hook implementations and component implementations. They are near identical, with the components providing a nicer user interface. When using a component, you must specify a `render` prop that takes all the information the hook version returns and gives back the markup to use.  As an example, `Checkbox` components can be rendered as `<label /><input />` or  `<label><input /></label>` based on the function you pass to that `render` prop. You can even do just plain `<input>`, though `aria-label` usually needs to be handled manually in all cases.

The intent is to help ensure that individual widgets on a given page are accessible, but it is still up to you to ensure that the page as a whole is too, and that things *actually make sense* in practice. Don't forget to do lots of testing.

Overall goals:
* Widgets are, in terms of event handlers and DOM attributes, compliant with ARIA specifications and meet all appropriate WCAGuidelines. The particular focus of this library includes things like
    * [2.1.1](https://wcag.com/developers/2-1-1-keyboard/), [2.1.2](https://wcag.com/developers/2-1-2-no-keyboard-trap/): All widgets are keyboard-operable, even when nested within each other, or when rendered within a portal to an unrelated part of the DOM.
    * [2.5.2](https://wcag.com/developers/2-5-2-pointer-cancellation/): All pressable widgets (from buttons to checkboxes) are cancellable if mouseup happens outside the element.
    * [3.3.2](https://wcag.com/developers/3-3-2-labels-instructions/): All widgets are labelled appropriately either with visible DOM elements or the `aria-label` prop.
    * [4.1.2](https://wcag.com/developers/4-1-2-name-role-value/): Roles, states, values, and names are all applied appropriately
    * [4.1.3](https://wcag.com/developers/4-1-3-status-messages/): Status messages are relayed to screen readers via Toasts, if used.
    * TODO:
        * [3.3.1](https://wcag.com/developers/3-3-1-error-identification/): Error identification, e.g. when a widget's change handler throws an error, is currently out of scope but should be handled regardless so it's not duplicated downstream. However, it can be simulated with status messages (Toasts).
* Widgets are performant and queue as few updates as possible while in use
    * Changing a property of a composite widget (e.g. which listbox item is focused) is O(2), only updating the max two relevant children who need to re-render
    * Adding/deleting N children to/from an existing composite widget is O(N*log(N)) for composite widgets that support typeahead, which is most of them.
    * Every attempt is made to avoid iterating over every child at any opportunity, so that extremely long lists of thousands of elements are (hopefully) limited by browser painting more than JavaScript.
* Widgets' props are simplistic and based on primitive types (including functions); a multi-select list does not receive a prop containing an array of all the list data, rather, each child has a simple boolean `selected` prop and the parent finds a way to work with that efficiently.
    * In this way, the hooks/components are designed to be as similar to native HTML elements as often as possible
    * The tradeoff is that each child of any list-ish thing needs a 0-based numeric index *in addition* to the usual `key` prop that represents where in the list that child is when unsorted, but if you're iterating through an array you already have that.
* Widgets are *extremely* low level, effectively just trying to be glue between the final GUI interface code and the rendered HTML as a whole, but should therefore be adaptable to any scenario.
    * No assumptions are made about DOM structure &mdash; almost anything is allowable as long as you apply the props given.
        * Checkboxes, for example, can be either `<input /><label />` or `<label><input /></label>`, and the correct event handlers and HTML/ARIA attributes will be applied no matter which way you need to structure things.
    * Each component takes a `render` prop that takes the information returned by a hook and spits out a `<div>` or something. These `render` functions always take *one* argument, within which are properties called things like `propsButton` or `propsMenu`. It's up to you to spread these props to their relevant JSX that you return, and you can make use of any other information as well to add CSS class names in whatever way works for you.  E.G. a button could be `render={info => <button {...info.propsButon} class={info.pressReturn.pseudoActive ? "active" : ""}>Pressable</button>}`
    * Beyond each component's `render` prop passing in all the information returned by its corresponding hook, each component's `ref` prop can also be used to retrieve this information with (e.g. for checkboxes) `const ref = useRef<UseCheckboxReturnTypeInfo>(null)`, then `<Checkbox ref={ref} />` lets you do things like `ref.current.checkboxLike.focusSelf()`, which (as an example) sends focus to whichever element is responsible (based on label position and element types, etc.). What's available is grouped by the hooks used so expect a lot of `listNavigationReturn` and related repeats throughout.
    * No styling is provided, even in the case of E.G. hiding a menu. Attributes such as `inert` are used over `hidden`. You must use the `render` prop to set `display: none` or `hidden=true`. 
    * It's assumed you'll create wrapper components around these with nicer interfaces, but regardless as many props as possible are optional in the component versions.

Other design decisions:
* A lot of these hooks are composed of other hooks in deeply nested ways. To avoid confusion about who takes what parameter/who returns what info, hooks will generally just take one single object parameter where each entry contains the arguments passed to the hook used. Simiarly when returning information, each entry in the object will refer to the information returned specifically by that hook.
    * Words, words, words. For example, `useListbox` makes use of roving tabindex as well as a singular selection mechanic, so its call with its one argument looks like `useListbox({ rovingTabIndexParameters: { ... }, singleSelectionParameters: { ... }, listboxSingleParameters: { ... } })`.
    * Then, when rendering, `useListbox` returns an object with things like `singleSelectionReturn.setSelectedIndex` and, **importantly**, a `props` property (or something similar like `propsLabel`, `propsPopup`, etc.) that must be spread to the corresponding DOM element.
* Lots of widgets are labelled. In all of these cases you *must* specify either an actual DOM-visible label, or the `aria-label` prop's value.

Documentation, testing, production-readiness are all TODO. See the demos for how to use.

````tsx
function YourCheckboxWithANicerInterface({ checked, onChange }: { checked: boolean, onChange: (next: boolean) => void }) {

    // The components provided are intentionally extremely verbose,
    // but in a way that can be used to create easy-to-use interfaces.
    return (
        <Checkbox<HTMLInputElement, HTMLLabelElement>
                ariaLabel={null}
                disabled={disabled}
                checked={checked}
                onCheckedChange={(e) => setChecked(e[EventDetail].checked)}
                labelPosition={"separate"}
                tagInput="input"
                tagLabel="label"
                render={defaultRenderCheckboxLike({
                    labelPosition: "separate",
                    tagInput: "input",
                    tagLabel: "label",
                    makePropsInput: (info) => useMergedProps<HTMLInputElement>(info.propsInput, { className: "checkbox-input" }),
                    makePropsLabel: (info) => useMergedProps<HTMLLabelElement>(info.propsLabel, { className: "checkbox-label", children: `Demo checkbox` })
                })}
            />
    );
}
````

Current components:

1. Accordion
1. Button
1. Checkbox
1. Checkbox group (w/ memory-based tri-state parent)
1. Dialog/Drawer
1. Listbox (single & multi)
1. "Gridlist"s (listbox-ish but allows interactive content)
1. Menu/Menubar
1. Radio Group
1. Slider
1. Tabs & tab panels
1. Data table
1. Toasts (a.k.a. Snackbars)
1. Toolbar (e.g. a button group)
1. Tooltip
1. Progress & loading content

Other components (e.g. tree views) are TODO


\* One tiny file containing CSS is provided for the scroll-locking that modals use for convenience (not that it's impossible to remove it altogether, but it's better than directly setting `style` values on the root). Using it is optional, but recommended. You don't need to do anything else other than simply `@import`ing it.

