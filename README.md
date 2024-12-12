<!-- 
These docs are auto-generated.
Changes made to this file will be overwritten.
Instead, edit the files in src/ and change the TSDoc comments.
-->

# Preact Aria Widgets

Preact props that implement ARIA-compliant widgets in the style of `preact-prop-helpers` (i.e. hooks that swizzle parameters and returns back and forth). **No CSS is provided** &ndash; this library is intended for wiring up event handlers, HTML/ARIA attributes, labels, and so on, but each hook gives you the information you need to create appropriate e.g. `class` values to style your own components.

For example, this is a partial example of using the `Gridlist` component:


```typescript
<Gridlist<HTMLUListElement, HTMLLIElement, HTMLDivElement, HTMLLabelElement>
    // Many of these props are taken **directly** from `preact-prop-helpers`
    singleSelectedIndex={selectedIndex}
    onSingleSelectedIndexChange={e => setSelectedIndex(e[EventDetail].selectedIndex)}
    singleSelectionAriaPropName="aria-selected"
    singleSelectionMode="activation"

    // These are specific to a `Gridlist`
    ariaLabel={null}
    groupingType="without-groups"

    // Every component takes a `render` prop that actually returns the JSX to render
    render={infoGridlist => {
        // infoGridList includes everything that useGridNavigationComplete from `preact-prop-helpers`
        // plus some extra information from useGridlist in this library.
        // Like with preact-prop-helpers, spread the appropriate props onto elements and return them.
        return (
            <>
                <label {...info.propsGridlistLabel}>Gridlist</label>
                <div {...info.propsGridlist}>{children}</div>
            </>
        )

        // There are **a lot** of useful return values that you can use when rendering
        // the component to the DOM. Again, most of them borrow heavily from preact-prop-helpers
        // and return many of the exact same values.
        infoGridlist.rovingTabIndexReturn.getTabbableIndex();
        return
    } />

```


This library is split into two parts: hook implementations and component implementations. They are near identical, with the components providing a nicer user interface. When using a component, you must specify a `render` prop that takes all the information the hook version returns and gives back the markup to use. As an example, `Checkbox` components can be rendered as `<label /><input />` or `<label><input /></label>` based on the function you pass to that `render` prop. You can even do just plain `<input>`, though `aria-label` usually needs to be handled manually in all cases.

The intent is to help ensure that individual widgets on a given page are accessible, but it is still up to you to ensure that the page as a whole is too, and that things *actually make sense* in practice. Don't forget to do lots of testing. *

* [`useAccordion`](#useaccordion): Implements an [Accordion](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/) pattern.

* [`useButton`](#usebutton): Implements a [Button](https://www.w3.org/WAI/ARIA/apg/patterns/button/) pattern.

* [`useCheckbox`](#usecheckbox): Implements a [Checkbox](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/) pattern.

* [`useCheckboxGroup`](#usecheckboxgroup): Allows a parent checkbox to control a number of child checkboxes, in accordance with the [Checkbox](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/) pattern.

* [`useDialog`](#usedialog): Implements a [Dialog](https://www.w3.org/WAI/ARIA/apg/patterns/dialog/) pattern.

* [`useDrawer`](#usedrawer): Implements a drawer, which is a specific kind of [Dialog](https://www.w3.org/WAI/ARIA/apg/patterns/dialog/).

* [`useGridlist`](#usegridlist): 

* [`useListbox`](#uselistbox): Implements a [Listbox](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/) pattern.

* [`useMenuSurface`](#usemenusurface): A menu surface is what handles user interaction with an interactive but transient surface (like a menu or a popup, but not something potentially modal like a dialog).

* [`useMenu`](#usemenu): Implements the [Menu](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/) and [Menu Button](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/) patterns.

* [`useMenubar`](#usemenubar): Implements a [Menubar](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/) pattern.

* [`useProgress`](#useprogress): Provides the attributes and roles for a progress bar.

* [`useRadioGroup`](#useradiogroup): Implements a [Radio Group](https://www.w3.org/WAI/ARIA/apg/patterns/radio/) pattern.

* [`useSlider`](#useslider): Implements a [Slider](https://www.w3.org/WAI/ARIA/apg/patterns/slider-multithumb/) pattern.

* [`useTable`](#usetable): 

* [`useTabs`](#usetabs): Implements a [Tabs](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/) pattern.

* [`useToolbar`](#usetoolbar): Implements a [Toolbar](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/) pattern, which is a collection of widgets in an expected order with a label (visible or hidden) and with the usual keyboard navigation stuff.

* [`useTooltip`](#usetooltip): Implements a [Tooltip](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/) pattern.




### useAccordion

Implements an [Accordion](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/) pattern.



#### UseAccordionParameters

<small>`extends` [UseLinearNavigationParameters](https://github.com/mwszekely/preact-prop-helpers#uselinearnavigationparameters), [UseTypeaheadNavigationParameters](https://github.com/mwszekely/preact-prop-helpers#usetypeaheadnavigationparameters), [UseManagedChildrenParameters](https://github.com/mwszekely/preact-prop-helpers#usemanagedchildrenparameters)</small>

|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.initialIndex?|`number`|For a one-at-a-time accordion, which index is initially opened?|-|
|.localStorageKey?|`keyof PersistentStates`|For a one-at-a-time accordion, this is the key <missing reference> will use to remember which one is open.|-|
|.orientation?|`"vertical" \| "horizontal"`|Almost all Accordions are `"vertical"`, but you certainly can have a `"horizontal"` Accordion if you want.<br />This subsumes (and replaces) `linearNavigationParameters.arrowKeyDirection`.|-|



#### UseAccordionReturnType

<small>`extends` [UseManagedChildrenReturnType](https://github.com/mwszekely/preact-prop-helpers#usemanagedchildrenreturntype), [UseTypeaheadNavigationReturnType](https://github.com/mwszekely/preact-prop-helpers#usetypeaheadnavigationreturntype)</small>

|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|.changeExpandedIndex|`PassiveStateUpdater<number \| null, Event>`|For a one-at-a-time, changes which one is currently open|-|
|context|`UseAccordionContext`|Functions and data that the parent is making available to each child. Put it in your own `Context` from `createContext`|-|

Accordions can be single-select or multi-select. For multi-select accordions, give each child its own `open` prop. For single-select accordions, just have their `open` prop be `null`.

For some reason, accordions don't require a parent element, and don't have a roving tab index, but do implement keyboard navigation.

This makes their implementation a little bit messy. Each child individually handles keyboard navigation even though the parent component (but not element) orchestrates it.



#### useAccordionSection



##### UseAccordionSectionParameters

<small>`extends` [`UseButtonParameters`](#usebuttonparameters), [UseGenericChildParameters](https://github.com/mwszekely/preact-prop-helpers#usegenericchildparameters), [UseTypeaheadNavigationChildParameters](https://github.com/mwszekely/preact-prop-helpers#usetypeaheadnavigationchildparameters), [UseManagedChildParameters](https://github.com/mwszekely/preact-prop-helpers#usemanagedchildparameters), [UsePressParameters](https://github.com/mwszekely/preact-prop-helpers#usepressparameters), [UseTextContentParameters](https://github.com/mwszekely/preact-prop-helpers#usetextcontentparameters), [UseRefElementParameters](https://github.com/mwszekely/preact-prop-helpers#userefelementparameters)</small>

|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.bodyRole|`JSX.AriaRole`|Generally `"region"`.|-|
|.open|`boolean \| null \| undefined`|If this prop is `true` or `false` (isn't null), then this section will be open/closed regardless of what the parent's singular open index is.<br />In other words, leave null to only allow one section to be open at a time. To allow multiple sections to be open at once, set the parent's index to null and toggle this `true`/`false` when the button's pressed|-|
|refElementBodyParameters|`UseRefElementParameters<BodyElement>["refElementParameters"];`| |-|
|refElementHeaderButtonParameters|`UseRefElementParameters<HeaderButtonElement>["refElementParameters"];`| |-|
|context|`UseAccordionContext`|Functions and data that the parent has made available to each child. Retrieve it with `useContext`|-|



##### UseAccordionSectionReturnType

<small>`extends` [`UseButtonReturnType`](#usebuttonreturntype), [UsePressReturnType](https://github.com/mwszekely/preact-prop-helpers#usepressreturntype), [UseRefElementReturnType](https://github.com/mwszekely/preact-prop-helpers#userefelementreturntype), [UseTypeaheadNavigationChildReturnType](https://github.com/mwszekely/preact-prop-helpers#usetypeaheadnavigationchildreturntype), [UseLinearNavigationReturnType](https://github.com/mwszekely/preact-prop-helpers#uselinearnavigationreturntype), [UseTextContentReturnType](https://github.com/mwszekely/preact-prop-helpers#usetextcontentreturntype), [UseHasCurrentFocusReturnType](https://github.com/mwszekely/preact-prop-helpers#usehascurrentfocusreturntype)</small>

|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|.expanded|`boolean`||-|
|.focused|`boolean`||-|
|.mostRecentlyTabbed|`boolean`||-|
|refElementBodyReturn|[UseRefElementReturnTypeSelf](https://github.com/mwszekely/preact-prop-helpers#userefelementreturntypeself)| |-|
|refElementHeaderButtonReturn|[UseRefElementReturnTypeSelf](https://github.com/mwszekely/preact-prop-helpers#userefelementreturntypeself)| |-|
|propsBody|HTML props|Spread these props onto the HTML element that will use this logic.|-|
|propsHeader|HTML props|Spread these props onto the HTML element that will use this logic.|-|
|propsHeaderButton|HTML props|Spread these props onto the HTML element that will use this logic.|-|



<hr />
<hr />



### useButton

Implements a [Button](https://www.w3.org/WAI/ARIA/apg/patterns/button/) pattern.



#### UseButtonParameters

<small>`extends` [UseRefElementParameters](https://github.com/mwszekely/preact-prop-helpers#userefelementparameters), [UsePressParameters](https://github.com/mwszekely/preact-prop-helpers#usepressparameters)</small>

|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.disabled?|`DisabledType`|Whether the button is disabled.<br />This both affects its attributes as well as whether or not the press handler is called.|-|
|.onPressSync?|`(event: TargetedEnhancedEvent<PressEventReason<E>, ButtonPressEventDetail>) => void`|Called when the button is clicked/pressed/tapped/etc<br />`pressed` only be non-null when you passed a non-null value for `pressed` as a prop.<br />If you need this to be async, see `useProgressWithHandler`, and use its `syncHandler` here.|-|
|.pressed|`boolean \| null \| undefined`|Indicates that the button is pressed/toggled.<br />**Important**: This *should not* be used if this is a toggle button that indicates its state through its label/children, like a mute/unmute or play/pause button. In those cases, `pressed` **must** remain `null`, and you should just change the label/children. It's not specified anywhere, but is more or less standard practice.|-|
|.role?|`JSX.AriaRole`|Generally just "button". Avoid using `null` unless the role is handled by something else.|-|
|.tagButton|`ElementToTag<E>`|Is `HTMLElement` this a `div`, a `button`, etc.|-|



#### UseButtonReturnType

<small>`extends` [UsePressReturnType](https://github.com/mwszekely/preact-prop-helpers#usepressreturntype), [UseRefElementReturnType](https://github.com/mwszekely/preact-prop-helpers#userefelementreturntype)</small>

|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|props|HTML props|Spread these props onto the HTML element that will use this logic.|-|

The press handler is sync by default. See `useProgressWithHandler` to turn an async function into a sync function with a progress bar.


<hr />
<hr />



### useCheckbox

Implements a [Checkbox](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/) pattern.



#### UseCheckboxParameters

<small>`extends` [`UseLabelParameters`](#uselabelparameters), [`UseCheckboxLikeParameters`](#usecheckboxlikeparameters), [UsePressParameters](https://github.com/mwszekely/preact-prop-helpers#usepressparameters)</small>

|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.onCheckedChange?|`CheckboxChangeEventHandler`|Called when the user changes the value of the checkbox.<br />If you need this to be async, see [useProgressWithHandler](#useprogresswithhandler)|-|



#### UseCheckboxReturnType

<small>`extends` [`UseCheckboxLikeReturnType`](#usecheckboxlikereturntype), [UseRandomDualIdsReturnType](https://github.com/mwszekely/preact-prop-helpers#userandomdualidsreturntype), [UsePressReturnType](https://github.com/mwszekely/preact-prop-helpers#usepressreturntype)</small>

|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|.propsUnstable|`ElementProps<InputType>`||-|


<hr />
<hr />



### useCheckboxGroup

Allows a parent checkbox to control a number of child checkboxes, in accordance with the [Checkbox](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/) pattern.



#### UseCheckboxGroupParameters

<small>`extends` [UseCompleteListNavigationParameters](https://github.com/mwszekely/preact-prop-helpers#usecompletelistnavigationparameters)</small>

|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.orientation|`"vertical" \| "horizontal"`||-|



#### UseCheckboxGroupReturnType

<small>`extends` [UseCompleteListNavigationReturnType](https://github.com/mwszekely/preact-prop-helpers#usecompletelistnavigationreturntype)</small>

|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|context|`CheckboxGroupContext`|Functions and data that the parent is making available to each child. Put it in your own `Context` from `createContext`|-|

`useCheckboxGroup` and its child hooks **do not** call `useCheckbox`. These hooks are for creating CheckboxGroup-like functionality&mdash;in theory, this could be implemented in a listbox.

A checkbox group is made up of the "Parent" checkbox and the "Child" checkboxes. Of course, all of them are children of the group as a whole, but the "Parent" checkbox is the one that, when clicked, toggles the checked state of all the "Child" checkboxes.

A checkbox group's parent, when clicked, toggles between three states:

* Unchecked (all children become unchecked)
* Mixed (all children become the last user-input value)
* Checked (all children become checked)


This functions even if it takes an `async` amount of time to complete the "cause the child checkbox to change its state" action.



#### useCheckboxGroupParent

Implements the logic for the parent checkbox (but not the checkbox itself).



##### UseCheckboxGroupParentParameters

<small>`extends` [UseGenericChildParameters](https://github.com/mwszekely/preact-prop-helpers#usegenericchildparameters), [UseCompleteListNavigationChildParameters](https://github.com/mwszekely/preact-prop-helpers#usecompletelistnavigationchildparameters)</small>

Every member of `UseCheckboxGroupParentParameters` is inherited (see the interfaces it `extends` from).



##### UseCheckboxGroupParentReturnType

<small>`extends` [UseCompleteListNavigationChildReturnType](https://github.com/mwszekely/preact-prop-helpers#usecompletelistnavigationchildreturntype)</small>

|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|.checked|`CheckboxCheckedType`||-|
|.getPercent|`() => number`||-|
|.onParentCheckedChange|`(e: Event) => Promise<void>`||-|



#### useCheckboxGroupChild

Implements the "child" part of a checkbox group.



##### UseCheckboxGroupChildParameters

<small>`extends` [UseGenericChildParameters](https://github.com/mwszekely/preact-prop-helpers#usegenericchildparameters), [UseCompleteListNavigationChildParameters](https://github.com/mwszekely/preact-prop-helpers#usecompletelistnavigationchildparameters)</small>

|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.checked|`CheckboxCheckedType`||-|
|.onChangeFromParent|`(checked?: CheckboxCheckedType, e?: Event) => void \| Promise<void>`||-|



##### UseCheckboxGroupChildReturnType

<small>`extends` [UseCompleteListNavigationChildReturnType](https://github.com/mwszekely/preact-prop-helpers#usecompletelistnavigationchildreturntype)</small>

|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|.onChildCheckedChange|`(checked: CheckboxCheckedType) => void`||-|
|.onControlIdChanged|`(next: string \| undefined, prev: string \| undefined) => void`||-|

Does not implement any actual "checkbox" functionality, but it does tell you what to do *with* a checkbox.

(That is to say, use `onChildCheckedChange` whenever your checkbox or checkbox-like thing changes, and properly implement `onChangeFromParent` to work properly when the parent changes)



<hr />
<hr />



### useDialog

Implements a [Dialog](https://www.w3.org/WAI/ARIA/apg/patterns/dialog/) pattern.



#### UseDialogParameters

<small>`extends` [`UseLabelParameters`](#uselabelparameters), [`UseLabelSyntheticParameters`](#uselabelsyntheticparameters), [UseModalParameters](https://github.com/mwszekely/preact-prop-helpers#usemodalparameters)</small>

Every member of `UseDialogParameters` is inherited (see the interfaces it `extends` from).



#### UseDialogReturnType

<small>`extends` [UseModalReturnType](https://github.com/mwszekely/preact-prop-helpers#usemodalreturntype), [UsePressReturnType](https://github.com/mwszekely/preact-prop-helpers#usepressreturntype)</small>

|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|propsDialog|HTML props|Spread these props onto the HTML element that will use this logic.|-|
|propsSource|HTML props|Spread these props onto the HTML element that will use this logic.|-|
|propsTitle|HTML props|Spread these props onto the HTML element that will use this logic.|-|


<hr />
<hr />



### useDrawer

Implements a drawer, which is a specific kind of [Dialog](https://www.w3.org/WAI/ARIA/apg/patterns/dialog/).



#### UseDrawerParameters

<small>`extends` [`UseLabelParameters`](#uselabelparameters), [`UseLabelSyntheticParameters`](#uselabelsyntheticparameters), [UseModalParameters](https://github.com/mwszekely/preact-prop-helpers#usemodalparameters)</small>

Every member of `UseDrawerParameters` is inherited (see the interfaces it `extends` from).



#### UseDrawerReturnType

<small>`extends` [UseModalReturnType](https://github.com/mwszekely/preact-prop-helpers#usemodalreturntype)</small>

|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|propsDrawer|HTML props|Spread these props onto the HTML element that will use this logic.|-|
|propsSource|HTML props|Spread these props onto the HTML element that will use this logic.|-|
|propsTitle|HTML props|Spread these props onto the HTML element that will use this logic.|-|


<hr />
<hr />



### useGridlist



#### UseGridlistParameters

<small>`extends` [`UseLabelParameters`](#uselabelparameters), [`UseLabelSyntheticParameters`](#uselabelsyntheticparameters), [UseCompleteGridNavigationDeclarativeParameters](https://github.com/mwszekely/preact-prop-helpers#usecompletegridnavigationdeclarativeparameters), [UseCompleteGridNavigationRowsParameters](https://github.com/mwszekely/preact-prop-helpers#usecompletegridnavigationrowsparameters)</small>

Every member of `UseGridlistParameters` is inherited (see the interfaces it `extends` from).



#### UseGridlistReturnType

<small>`extends` [UseCompleteGridNavigationDeclarativeReturnType](https://github.com/mwszekely/preact-prop-helpers#usecompletegridnavigationdeclarativereturntype), [UseCompleteGridNavigationRowsReturnType](https://github.com/mwszekely/preact-prop-helpers#usecompletegridnavigationrowsreturntype), [UseRandomDualIdsReturnType](https://github.com/mwszekely/preact-prop-helpers#userandomdualidsreturntype), [UsePressReturnType](https://github.com/mwszekely/preact-prop-helpers#usepressreturntype)</small>

|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|contextChildren|`UseGridlistRowContext`|Functions and data that the parent is making available to each child. Put it in your own `Context` from `createContext`|-|
|contextProcessing|`UseGridlistRowsContext`|Functions and data that the parent is making available to each child. Put it in your own `Context` from `createContext`|-|


<hr />
<hr />



### useListbox

Implements a [Listbox](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/) pattern.

**See also** [useGridlist](#usegridlist) for a more capable list widget.



#### UseListboxParameters

<small>`extends` [`UseLabelParameters`](#uselabelparameters), [`UseLabelSyntheticParameters`](#uselabelsyntheticparameters), [UseCompleteListNavigationDeclarativeParameters](https://github.com/mwszekely/preact-prop-helpers#usecompletelistnavigationdeclarativeparameters), [UseCompleteListNavigationParameters](https://github.com/mwszekely/preact-prop-helpers#usecompletelistnavigationparameters)</small>

|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.groupingType|`"with-groups" \| "without-groups" \| "group"`|* `"without-groups"`: This is a listbox with no groups * `"with-groups"`: This is a listbox that is grouped into 2 or more labelled sections. In this case, **all navigation and selection is disabled** (meaning you can pass whatever you'd like to them, it's all ignored) and delegated to the child `group`s. * `"group"`: This is a group, contained within a listbox with `type=="with-groups"`<br />There is currently no support for a mix of grouped and ungrouped options.|-|
|.orientation|`"horizontal" \| "vertical"`||-|



#### UseListboxReturnType

<small>`extends` [UseCompleteListNavigationReturnType](https://github.com/mwszekely/preact-prop-helpers#usecompletelistnavigationreturntype)</small>

|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|context|`UseListboxContext`|Functions and data that the parent is making available to each child. Put it in your own `Context` from `createContext`|-|
|propsListbox|HTML props|Spread these props onto the HTML element that will use this logic.|-|
|propsListboxLabel|HTML props|Spread these props onto the HTML element that will use this logic.|-|

A listbox is a very limited widget and its items cannot contain interactive or non-text content.



#### useListboxItem



##### UseListboxItemParameters

<small>`extends` [UseGenericChildParameters](https://github.com/mwszekely/preact-prop-helpers#usegenericchildparameters), [UseCompleteListNavigationChildInfoKeysParameters](https://github.com/mwszekely/preact-prop-helpers#usecompletelistnavigationchildinfokeysparameters), [UseCompleteListNavigationChildDeclarativeParameters](https://github.com/mwszekely/preact-prop-helpers#usecompletelistnavigationchilddeclarativeparameters), [UsePressParameters](https://github.com/mwszekely/preact-prop-helpers#usepressparameters)</small>

Every member of `UseListboxItemParameters` is inherited (see the interfaces it `extends` from).



##### UseListboxItemReturnType

<small>`extends` [UseCompleteListNavigationChildDeclarativeReturnType](https://github.com/mwszekely/preact-prop-helpers#usecompletelistnavigationchilddeclarativereturntype), [UsePressReturnType](https://github.com/mwszekely/preact-prop-helpers#usepressreturntype)</small>

Every member of `UseListboxItemReturnType` is inherited (see the interfaces it `extends` from).



<hr />
<hr />



### useMenuSurface

A menu surface is what handles user interaction with an interactive but transient surface (like a menu or a popup, but not something potentially modal like a dialog).



#### UseMenuSurfaceParameters

<small>`extends` [UseModalParameters](https://github.com/mwszekely/preact-prop-helpers#usemodalparameters)</small>

|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.role|`"dialog" \| "menu" \| "tree" \| "grid" \| "listbox"`|What role the surface fulfills.<br />General menus should use "menu". "dialog" can be used for generic pop-up things.|-|
|.surfaceId|`string`||-|



#### UseMenuSurfaceReturnType



|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|refElementPopupReturn|[UseModalReturnType](https://github.com/mwszekely/preact-prop-helpers#usemodalreturntype)| |-|
|refElementSourceReturn|[UseModalReturnType](https://github.com/mwszekely/preact-prop-helpers#usemodalreturntype)| |-|
|propsSentinel|HTML props|Spread these props onto the HTML element that will use this logic.|-|
|propsSurface|HTML props|Spread these props onto the HTML element that will use this logic.|-|
|propsTarget|HTML props|Spread these props onto the HTML element that will use this logic.|-|
|propsTrigger|HTML props|Spread these props onto the HTML element that will use this logic.|-|

The keyboard (etc.) interactions are shared among a lot of widgets, and the opening button has some ARIA properties that need setting.

Related to **menus**, which are a **menubar** contained within a **menu surface**.


<hr />
<hr />



### useMenu

Implements the [Menu](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/) and [Menu Button](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/) patterns.



#### UseMenuParameters

<small>`extends` [`UseLabelParameters`](#uselabelparameters), [`UseLabelSyntheticParameters`](#uselabelsyntheticparameters), [`UseToolbarParameters`](#usetoolbarparameters), [`UseMenuSurfaceParameters`](#usemenusurfaceparameters), [MakeSingleSelectionDeclarativeParameters](https://github.com/mwszekely/preact-prop-helpers#makesingleselectiondeclarativeparameters), [UseCompleteListNavigationParameters](https://github.com/mwszekely/preact-prop-helpers#usecompletelistnavigationparameters), [UseModalParameters](https://github.com/mwszekely/preact-prop-helpers#usemodalparameters)</small>

|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.onOpen|`() => void`|This is called whenever the corresponding arrow key is pressed on the triggering button.|-|
|.openDirection|`"down" \| "up" \| "left" \| "right" \| null`|This is the **physical** direction that is pressed using the **arrow keys** on your keyboard.<br />It has no effect on display, list navigation direction, etc. It solely controls the arrow key that's listened for.|-|



#### UseMenuReturnType

<small>`extends` [`UseMenuSurfaceReturnType`](#usemenusurfacereturntype), [`UseToolbarReturnType`](#usetoolbarreturntype), [`UseMenubarReturnType`](#usemenubarreturntype), [MakeSingleSelectionDeclarativeReturnType](https://github.com/mwszekely/preact-prop-helpers#makesingleselectiondeclarativereturntype), [UseCompleteListNavigationReturnType](https://github.com/mwszekely/preact-prop-helpers#usecompletelistnavigationreturntype)</small>

|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|context|`UseMenuContext`|Functions and data that the parent is making available to each child. Put it in your own `Context` from `createContext`|-|

A menu is a specialization of a menubar (something that handles navigation among a set of menuitems) and a menu surface (something that handles moving focus to/from an unrelated area of the page).

Additionally, pressing the arrow key that corresponds to the direction that the menu opens in will open it.


<hr />
<hr />



### useMenubar

Implements a [Menubar](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/) pattern.



#### UseMenubarParameters

<small>`extends` [`UseLabelParameters`](#uselabelparameters), [`UseLabelSyntheticParameters`](#uselabelsyntheticparameters), [`UseToolbarParameters`](#usetoolbarparameters), [MakeSingleSelectionDeclarativeParameters](https://github.com/mwszekely/preact-prop-helpers#makesingleselectiondeclarativeparameters), [UseCompleteListNavigationParameters](https://github.com/mwszekely/preact-prop-helpers#usecompletelistnavigationparameters)</small>

Every member of `UseMenubarParameters` is inherited (see the interfaces it `extends` from).



#### UseMenubarReturnType

<small>`extends` [`UseToolbarReturnType`](#usetoolbarreturntype), [MakeSingleSelectionDeclarativeReturnType](https://github.com/mwszekely/preact-prop-helpers#makesingleselectiondeclarativereturntype), [UseCompleteListNavigationReturnType](https://github.com/mwszekely/preact-prop-helpers#usecompletelistnavigationreturntype)</small>

|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|context|`UseMenubarContext`|Functions and data that the parent is making available to each child. Put it in your own `Context` from `createContext`|-|
|propsMenubar|HTML props|Spread these props onto the HTML element that will use this logic.|-|

A menubar is identical to a toolbar, except that every item in a menubar is a menuitem (or similar) and has some sort of role and action when pressed besides just single selection (if applicable).

(A toolbar child won't have a defined role, but every menubar child will)


<hr />
<hr />



### useProgress

Provides the attributes and roles for a progress bar.



#### UseProgressParameters

<small>`extends` [`UseLabelParameters`](#uselabelparameters), [`UseLabelSyntheticParameters`](#uselabelsyntheticparameters)</small>

|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.max|`number`||-|
|.tagProgressIndicator|`ElementToTag<IndicatorElement>`||-|
|.value|`number \| "indeterminate" \| "disabled"`||-|
|.valueText?|`string`||-|



#### UseProgressReturnType

<small>`extends` [UseRandomDualIdsReturnType](https://github.com/mwszekely/preact-prop-helpers#userandomdualidsreturntype), [UsePressReturnType](https://github.com/mwszekely/preact-prop-helpers#usepressreturntype)</small>

|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|propsProgressIndicator|HTML props|Spread these props onto the HTML element that will use this logic.|-|
|propsProgressLabel|HTML props|Spread these props onto the HTML element that will use this logic.|-|
|propsProgressRegion|HTML props|Spread these props onto the HTML element that will use this logic.|-|


<hr />
<hr />



### useRadioGroup

Implements a [Radio Group](https://www.w3.org/WAI/ARIA/apg/patterns/radio/) pattern.



#### UseRadioGroupParameters

<small>`extends` [`UseLabelParameters`](#uselabelparameters), [`UseLabelSyntheticParameters`](#uselabelsyntheticparameters), [UseCompleteListNavigationParameters](https://github.com/mwszekely/preact-prop-helpers#usecompletelistnavigationparameters)</small>

|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.name|`string`||-|
|.onSelectedValueChange?|`RadioChangeEventHandler<V>`||-|
|.selectedValue?|`V`||-|



#### UseRadioGroupReturnType

<small>`extends` [UseCompleteListNavigationDeclarativeReturnType](https://github.com/mwszekely/preact-prop-helpers#usecompletelistnavigationdeclarativereturntype)</small>

|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|.selectedIndex|`number \| null`||-|
|context|`RadioContext`|Functions and data that the parent is making available to each child. Put it in your own `Context` from `createContext`|-|
|propsRadioGroup|HTML props|Spread these props onto the HTML element that will use this logic.|-|
|propsRadioGroupLabel|HTML props|Spread these props onto the HTML element that will use this logic.|-|

Which radio is the selected one is controlled by the `selectedValue` parameter on the parent.



#### useRadio

Implements a single radio button, as part of a radio group.



##### UseRadioParameters

<small>`extends` [`UseLabelParameters`](#uselabelparameters), [`UseCheckboxLikeParameters`](#usecheckboxlikeparameters), [UseGenericChildParameters](https://github.com/mwszekely/preact-prop-helpers#usegenericchildparameters), [UseCompleteListNavigationChildInfoKeysParameters](https://github.com/mwszekely/preact-prop-helpers#usecompletelistnavigationchildinfokeysparameters), [UseCompleteListNavigationChildParameters](https://github.com/mwszekely/preact-prop-helpers#usecompletelistnavigationchildparameters), [UsePressParameters](https://github.com/mwszekely/preact-prop-helpers#usepressparameters)</small>

|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.value|`V`||-|



##### UseRadioReturnType

<small>`extends` [`UseCheckboxLikeReturnType`](#usecheckboxlikereturntype), [UseCompleteListNavigationChildDeclarativeReturnType](https://github.com/mwszekely/preact-prop-helpers#usecompletelistnavigationchilddeclarativereturntype), [UseRandomDualIdsReturnType](https://github.com/mwszekely/preact-prop-helpers#userandomdualidsreturntype), [UsePressReturnType](https://github.com/mwszekely/preact-prop-helpers#usepressreturntype)</small>

|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|propsInput|HTML props|Spread these props onto the HTML element that will use this logic.|-|
|propsLabel|HTML props|Spread these props onto the HTML element that will use this logic.|-|



<hr />
<hr />



### useSlider

Implements a [Slider](https://www.w3.org/WAI/ARIA/apg/patterns/slider-multithumb/) pattern.



#### UseSliderParameters

<small>`extends` [UseManagedChildrenParameters](https://github.com/mwszekely/preact-prop-helpers#usemanagedchildrenparameters)</small>

|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.max|`number`||-|
|.min|`number`||-|



#### UseSliderReturnType

<small>`extends` [UseManagedChildrenReturnType](https://github.com/mwszekely/preact-prop-helpers#usemanagedchildrenreturntype)</small>

|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|context|`SliderContext`|Functions and data that the parent is making available to each child. Put it in your own `Context` from `createContext`|-|



#### useSliderThumb



##### UseSliderThumbParameters

<small>`extends` [UseGenericChildParameters](https://github.com/mwszekely/preact-prop-helpers#usegenericchildparameters)</small>

|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.label|`string`|There's no, like, "slider container" for multi-thumb sliders defined, so each individual slider needs its own label. TODO: This is like a tab/tabpanel linking thing where each label is outside of the container. For now, it's easier to just assume a string-based label instead of an element-based one.|-|
|.max?|`number`||-|
|.min?|`number`||-|
|.onValueChange?|`(e: RangeChangeEvent<E>) => void`||-|
|.value|`number`||-|
|.valueText?|`string`||-|



##### UseSliderThumbReturnType

<small>`extends` [UseManagedChildReturnType](https://github.com/mwszekely/preact-prop-helpers#usemanagedchildreturntype)</small>

|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|.max|`number`||-|
|.min|`number`||-|
|propsSliderThumb|HTML props|Spread these props onto the HTML element that will use this logic.|-|



<hr />
<hr />



### useTable



#### UseTableParameters

<small>`extends` [`UseLabelParameters`](#uselabelparameters), [`UseLabelSyntheticParameters`](#uselabelsyntheticparameters), [UseCompleteGridNavigationParameters](https://github.com/mwszekely/preact-prop-helpers#usecompletegridnavigationparameters)</small>

|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.initiallySortedColumn?|`number`||-|
|.tagTable|`ElementToTag<TableElement>`||-|



#### UseTableReturnType

<small>`extends` [UseCompleteGridNavigationReturnType](https://github.com/mwszekely/preact-prop-helpers#usecompletegridnavigationreturntype), [UseRandomDualIdsReturnType](https://github.com/mwszekely/preact-prop-helpers#userandomdualidsreturntype), [UsePressReturnType](https://github.com/mwszekely/preact-prop-helpers#usepressreturntype)</small>

|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|.sortByColumn|`(column: number) => SortInfo`||-|
|context|`UseTableRowContext`|Functions and data that the parent is making available to each child. Put it in your own `Context` from `createContext`|-|
|propsTable|HTML props|Spread these props onto the HTML element that will use this logic.|-|


<hr />
<hr />



### useTabs

Implements a [Tabs](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/) pattern.



#### UseTabsParameters

<small>`extends` [`UseLabelParameters`](#uselabelparameters), [`UseLabelSyntheticParameters`](#uselabelsyntheticparameters), [UseCompleteListNavigationParameters](https://github.com/mwszekely/preact-prop-helpers#usecompletelistnavigationparameters)</small>

|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.localStorageKey?|`keyof PersistentStates`||-|
|.orientation|`"horizontal" \| "vertical"`||-|
|.role?|`"tablist" \| string`||-|



#### UseTabsReturnType

<small>`extends` [UseCompleteListNavigationReturnType](https://github.com/mwszekely/preact-prop-helpers#usecompletelistnavigationreturntype)</small>

|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|contextPanels|`UseTabPanelsContext`|Functions and data that the parent is making available to each child. Put it in your own `Context` from `createContext`|-|
|contextTabs|`UseTabsContext`|Functions and data that the parent is making available to each child. Put it in your own `Context` from `createContext`|-|
|propsContainer|HTML props|Spread these props onto the HTML element that will use this logic.|-|
|propsLabel|HTML props|Spread these props onto the HTML element that will use this logic.|-|

Tabs consist of both a list of tabs and a list of tab panels. A Tab and a TabPanel that share the same index are linked together; when that tab is selected that panel is shown.



#### useTab

Implements a single tab of a Tabs component.

The index that this child uses controls which TabPanel it shows when selected.



##### UseTabParameters

<small>`extends` [UseGenericChildParameters](https://github.com/mwszekely/preact-prop-helpers#usegenericchildparameters), [UseCompleteListNavigationChildParameters](https://github.com/mwszekely/preact-prop-helpers#usecompletelistnavigationchildparameters), [UsePressParameters](https://github.com/mwszekely/preact-prop-helpers#usepressparameters)</small>

Every member of `UseTabParameters` is inherited (see the interfaces it `extends` from).



##### UseTabReturnType

<small>`extends` [UseCompleteListNavigationChildReturnType](https://github.com/mwszekely/preact-prop-helpers#usecompletelistnavigationchildreturntype), [UsePressReturnType](https://github.com/mwszekely/preact-prop-helpers#usepressreturntype)</small>

|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|props|HTML props|Spread these props onto the HTML element that will use this logic.|-|



#### useTabPanel

Implements the TabPanel a Tab controls.



##### UseTabPanelParameters

<small>`extends` [UseGenericChildParameters](https://github.com/mwszekely/preact-prop-helpers#usegenericchildparameters), [UseManagedChildParameters](https://github.com/mwszekely/preact-prop-helpers#usemanagedchildparameters)</small>

Every member of `UseTabPanelParameters` is inherited (see the interfaces it `extends` from).



##### UseTabPanelReturnType



|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|.getVisible|`() => boolean`||-|
|.visible|`boolean \| null`||-|
|.visibleOffset|`number \| null`||-|
|props|HTML props|Spread these props onto the HTML element that will use this logic.|-|

A hidden tab panel is made `inert` so that it cannot be interacted with, so you can just set `opacity: 0` on your hidden panels if that's how you want to style them. They'll still be properly removed from the tab order (i.e. you don't **also** need `display: none`).



<hr />
<hr />



### useToolbar

Implements a [Toolbar](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/) pattern, which is a collection of widgets in an expected order with a label (visible or hidden) and with the usual keyboard navigation stuff.



#### UseToolbarParameters

<small>`extends` [`UseLabelParameters`](#uselabelparameters), [`UseLabelSyntheticParameters`](#uselabelsyntheticparameters), [MakeSingleSelectionDeclarativeParameters](https://github.com/mwszekely/preact-prop-helpers#makesingleselectiondeclarativeparameters), [UseCompleteListNavigationParameters](https://github.com/mwszekely/preact-prop-helpers#usecompletelistnavigationparameters)</small>

|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.disabled|`boolean`|When true, none of the children will be selectable or focusable.<br />The component itself will be made focusable instead (partially to ensure there's always something focusable in the case of e.g. a menu).|-|
|.orientation|`"horizontal" \| "vertical"`|Primarily controls arrow key direction for navigation|-|
|.role|`JSX.AriaRole \| null`|Should be "toolbar" for toolbars, `null` if someone else takes care of the role (TODO: it's still labelled in this case, what does this mean?), and whatever string is applicable otherwise.|-|



#### UseToolbarReturnType

<small>`extends` [MakeSingleSelectionDeclarativeReturnType](https://github.com/mwszekely/preact-prop-helpers#makesingleselectiondeclarativereturntype), [UseCompleteListNavigationReturnType](https://github.com/mwszekely/preact-prop-helpers#usecompletelistnavigationreturntype)</small>

|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|randomIdInputReturn|[UseRandomIdReturnType](https://github.com/mwszekely/preact-prop-helpers#userandomidreturntype)| |-|
|randomIdLabelReturn|[UseRandomIdReturnType](https://github.com/mwszekely/preact-prop-helpers#userandomidreturntype)| |-|
|context|`UseToolbarContext`|Functions and data that the parent is making available to each child. Put it in your own `Context` from `createContext`|-|
|propsLabel|HTML props|Spread these props onto the HTML element that will use this logic.|-|
|propsToolbar|HTML props|Spread these props onto the HTML element that will use this logic.|-|

The main difference between a toolbar and a menubar is that a menubar contains purely static menuitems, but a toolbar is the more general case, being able to contain anything at all. A menubar is implemented as a special case of a toolbar, and a menu is implemented as a specialized menubar.

Either way, be sure to specify the role and orientation this toolbar has (role=toolbar if you're using this as an actual toolbar).


<hr />
<hr />



### useTooltip

Implements a [Tooltip](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/) pattern.



#### UseTooltipParameters

<small>`extends` [UseEscapeDismissParameters](https://github.com/mwszekely/preact-prop-helpers#useescapedismissparameters), [UsePressReturnType](https://github.com/mwszekely/preact-prop-helpers#usepressreturntype), [UseDismissParameters](https://github.com/mwszekely/preact-prop-helpers#usedismissparameters)</small>

|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.hoverDelay|`number \| null`|How long should the tooltip wait to show itself if it was shown via hover?<br />Default is 0.|-|
|.onStatus|`(status?: TooltipStatus) => void`|Called when the tooltip's content should be shown or hidden or when the manner in which it's shown should be changed.<br />This can change from `"hover"` to `"mouse"`, but never the other way around.<br />`"null"` means the tooltip should be hidden|-|
|.tooltipSemanticType|`"label" \| "description"`|This is whether `aria-describedby` or `aria-labelledby` is used.<br />Certain situations require one or the other, so you need to specify for each circumstance.|-|
|.usesLongPress|`boolean`||-|



#### UseTooltipReturnType



|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|refElementPopupReturn|[UseRefElementReturnTypeSelf](https://github.com/mwszekely/preact-prop-helpers#userefelementreturntypeself)| |-|
|refElementSourceReturn|[UseRefElementReturnTypeSelf](https://github.com/mwszekely/preact-prop-helpers#userefelementreturntypeself)| |-|
|.getState|`() => TooltipState`||-|
|propsPopup|HTML props|Spread these props onto the HTML element that will use this logic.|-|
|propsTrigger|HTML props|Spread these props onto the HTML element that will use this logic.|-|

Tooltips are remarkably under-specified, so some of this is speculative.


## The following items are missing their documentation (or should not have been linked to):


##### UseLabelParameters
##### UseCheckboxLikeParameters
##### useProgressWithHandler
##### UseCheckboxLikeReturnType
##### UseLabelSyntheticParameters
