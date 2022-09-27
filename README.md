# Preact Aria Widgets

Preact props that implement ARIA-compliant widgets in the style of `preact-prop-helpers` (i.e. hooks that return hooks).  **No CSS is provided*** &ndash; this library is intended for wiring up event handlers, `aria` attributes, labels, and so on, but each hook gives you the information you need to create appropriate e.g. `class` values to style your own components.

This library is split into two parts: hook implementations and component implementations. Both are very low level; the components expect you to pass in a `render` function that takes all the information and props that the hook as prepared for you and returns the actual markup used by that component.  For example, `Checkbox` components can be rendered as `<label /><input />` or  `<label><input /></label>` or `<input aria-label="..." />`, etc. based on how you handle that `render` prop.

Overall goals:
* Widgets should all be equally accessible no matter the input method
* Widgets are compliant with ARIA specifications
* Widgets are performant and queue as few updates as possible while in use
    * Changing a property of a composite widget (e.g. which listbox item is focused) is O(2), only updating the max two relevant children who need to re-render
    * Adding/deleting N children to/from an existing composite widget is O(N*log(N)) for composite widgets that support typeahead, which is most of them.
    * Every attempt is made to avoid iterating over every child at any opportunity, so that extremely long lists of thousands of elements are limited by browser painting more than JavaScript (hopefully).
* Widgets are *extremely* low level, effectively just trying to be glue between the final GUI interface code and ARIA as a whole.
    * No assumptions are made about DOM structure &mdash; almost anything is allowable as long as you apply the props given
    * No styling is provided, even in the case of E.G. hiding a menu. Attributes such as `inert` are used over `hidden`. You must use the `render` prop to set `display: none` or `hidden=true`. 
* Widgets' props are simplistic and based on primitive types (including functions); a multi-select list does not receive a prop containing an array of all the list data, rather, each child has a simple boolean `selected` prop and the parent finds a way to work with that.
    * In this way, the hooks/components are designed to work around the most comfortable way to provide these props in a real environment

Documentation, testing, production-readiness are all TODO.

Current components:

1. Accordion
2. Button
3. Checkbox
4. Checkbox group (w/ tri-state parent)
5. Dialog (modal)
6. Drawer (modal)
7. Listbox (single & multi)
8. Menu (w/ menu button)
9. Radio Group
10. Tabs & tab panels
11. Data table
12. Toasts (a.k.a. Snackbars)
13. Tooltip

Other components (e.g. tree views) are TODO


\* One tiny file containing CSS is provided for the scroll-locking that modals use for convenience (not that it's impossible to remove it altogether, but it's better than directly setting `style` values on the root). Using it is optional, but recommended. You don't need to do anything else other than simply `@import`ing it.

## Methods

Components like list boxes, radio groups, tables, etc. are implemented with parent & child communication where each child, on mount, provides the parent with access to its internals, and the parent then, in turn, uses those to orchestrate communication between everyone.  For example, when the selected index of a listbox changes, the parent (with that prop) notifies the previous child that it's no longer selected, and the next child that it is, but no other children are notified and so they do not re-render themselves (this is in contrast to a `Context` approach, which would notify *all* children).  It can do this because each child has a state variable tracking if it's *the* selected item, and provides the *setter* for that state variable to the parent, which it calls as necessary.

