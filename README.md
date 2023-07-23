<!-- 
These docs are auto-generated.
Changes made to this file will be overwritten.
Instead, edit the files in src/ and change the TSDoc comments.
-->

# Preact Aria Widgets

Preact props that implement ARIA-compliant widgets in the style of `preact-prop-helpers` (i.e. hooks that swizzle parameters and returns back and forth). **No CSS is provided** &ndash; this library is intended for wiring up event handlers, HTML/ARIA attributes, labels, and so on, but each hook gives you the information you need to create appropriate e.g. `class` values to style your own components.

This library is split into two parts: hook implementations and component implementations. They are near identical, with the components providing a nicer user interface. When using a component, you must specify a `render` prop that takes all the information the hook version returns and gives back the markup to use. As an example, `Checkbox` components can be rendered as `<label /><input />` or `<label><input /></label>` based on the function you pass to that `render` prop. You can even do just plain `<input>`, though `aria-label` usually needs to be handled manually in all cases.

The intent is to help ensure that individual widgets on a given page are accessible, but it is still up to you to ensure that the page as a whole is too, and that things *actually make sense* in practice. Don't forget to do lots of testing. *

* [`useAccordion`](#useaccordion): Implements an [Accordion](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/) pattern.

* [`useButton`](#usebutton): Implements a [Button](https://www.w3.org/WAI/ARIA/apg/patterns/button/) pattern.

* [`useCheckbox`](#usecheckbox): Implements a [Checkbox](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/) pattern.

* [`useCheckboxGroup`](#usecheckboxgroup): Allows a parent checkbox to control a number of child checkboxes, in accordance with the [Checkbox](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/) pattern.

* [`useDialog`](#usedialog): Implements a [Dialog](https://www.w3.org/WAI/ARIA/apg/patterns/dialog/) pattern.

* [`useDrawer`](#usedrawer): Implements a drawer, which is a specific kind of [Dialog](https://www.w3.org/WAI/ARIA/apg/patterns/dialog/).

* [`useGridlist`](#usegridlist): Implements a gridlist, which is a hybrid of a [Listbox](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/) and a [Grid](https://www.w3.org/WAI/ARIA/apg/patterns/grid/).

* [`useListbox`](#uselistbox): Implements a [Listbox](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/) pattern.

* [`useMenuSurface`](#usemenusurface): A menu surface is what handles user interaction with an interactive but transient surface (like a menu or a popup).

* [`useMenu`](#usemenu): Implements the [Menu](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/) and [Menu Button](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/) patterns.

* [`useMenubar`](#usemenubar): Implements a [Menubar](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/) pattern.

* [`useProgress`](#useprogress): Provides the attributes and roles for a progress bar.

* [`useRadioGroup`](#useradiogroup): Implements a [Radio Group](https://www.w3.org/WAI/ARIA/apg/patterns/radio/) pattern.

* [`useSlider`](#useslider): Implements a [Slider](https://www.w3.org/WAI/ARIA/apg/patterns/slider-multithumb/) pattern.

* [`useTable`](#usetable): Creates a sortable data table in a [Grid](https://www.w3.org/WAI/ARIA/apg/patterns/grid/) pattern.

* [`useTabs`](#usetabs): Implements a [Tabs](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/) pattern.

* [`useToolbar`](#usetoolbar): Implements a [Toolbar](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/) pattern.

* [`useTooltip`](#usetooltip): Implements a [Tooltip](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/) pattern.




### useAccordion

Implements an [Accordion](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/) pattern.



#### UseAccordionParameters

<small>`extends` [UseLinearNavigationParameters](https://github.com/mwszekely/preact-prop-helpers#uselinearnavigationparameters), [UseManagedChildrenParameters](https://github.com/mwszekely/preact-prop-helpers#usemanagedchildrenparameters), [UseTypeaheadNavigationParameters](https://github.com/mwszekely/preact-prop-helpers#usetypeaheadnavigationparameters)</small>

|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.initialIndex?|`number \| null`||-|
|.localStorageKey|`keyof PersistentStates \| null`||-|
|.orientation?|`"vertical" \| "horizontal"`||-|



#### UseAccordionReturnType

<small>`extends` [UseManagedChildrenReturnType](https://github.com/mwszekely/preact-prop-helpers#usemanagedchildrenreturntype)</small>

|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|.changeExpandedIndex|`PassiveStateUpdater<number \| null, Event>`||-|
|context|`UseAccordionContext`|Functions and data that the parent is making available to each child. Put it in your own `Context` from `createContext`|-|
|props|HTML props|Spread these props onto the HTML element that will use this logic.|-|



#### useAccordionSection



##### UseAccordionSectionParameters

<small>`extends` [`UseButtonParameters`](#usebuttonparameters), [UseTypeaheadNavigationChildParameters](https://github.com/mwszekely/preact-prop-helpers#usetypeaheadnavigationchildparameters), [UseRefElementParameters](https://github.com/mwszekely/preact-prop-helpers#userefelementparameters), [UseManagedChildParameters](https://github.com/mwszekely/preact-prop-helpers#usemanagedchildparameters), [UsePressParameters](https://github.com/mwszekely/preact-prop-helpers#usepressparameters)</small>

|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.bodyRole|`h.JSX.AriaRole`|Generally `"region"`|-|
|.open|`boolean \| null \| undefined`|If this prop is `true` or `false` (isn't null), then this section will be open/closed regardless of what the parent's singular open index is.<br />In other words, leave null to only allow one section to be open at a time. To allow multiple sections to be open at once, set the parent's index to null and toggle this `true`/`false` when the button's pressed|-|
|context|`UseAccordionContext`|Functions and data that the parent has made available to each child. Retrieve it with `useContext`|-|



##### UseAccordionSectionReturnType

<small>`extends` [UsePressReturnType](https://github.com/mwszekely/preact-prop-helpers#usepressreturntype), [UseRefElementReturnType](https://github.com/mwszekely/preact-prop-helpers#userefelementreturntype), [UseTextContentReturnType](https://github.com/mwszekely/preact-prop-helpers#usetextcontentreturntype), [UseHasCurrentFocusReturnType](https://github.com/mwszekely/preact-prop-helpers#usehascurrentfocusreturntype)</small>

|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|.expanded|`boolean`||-|
|.focused|`boolean`||-|
|.mostRecentlyTabbed|`boolean`||-|
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
|.disabled|`DisabledType`||-|
|.onPress|`undefined \| null \| ButtonPressEventHandler<E>`||-|
|.pressed|`boolean \| null \| undefined`|Important: A button can also be marked as pressed by changing its label -- e.g. `muted` to `unmuted`. If this is the case, `pressed` **must** be null!|-|
|.role|`h.JSX.AriaRole`||-|
|.tagButton|`ElementToTag<E>`||-|



#### UseButtonReturnType

<small>`extends` [UsePressReturnType](https://github.com/mwszekely/preact-prop-helpers#usepressreturntype), [UseRefElementReturnType](https://github.com/mwszekely/preact-prop-helpers#userefelementreturntype)</small>

|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|props|HTML props|Spread these props onto the HTML element that will use this logic.|-|


<hr />
<hr />



### useCheckbox

Implements a [Checkbox](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/) pattern.



#### UseCheckboxParameters

<small>`extends` [`UseLabelParameters`](#uselabelparameters), [`UseCheckboxLikeParameters`](#usecheckboxlikeparameters), [UsePressParameters](https://github.com/mwszekely/preact-prop-helpers#usepressparameters)</small>

|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.onCheckedChange|`Nullable<CheckboxChangeEventHandler>`||-|



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



#### useCheckboxGroupParent

Implements the logic for the parent checkbox (but not the checkbox itself).



##### UseCheckboxGroupParentParameters

<small>`extends` [UseCompleteListNavigationChildParameters](https://github.com/mwszekely/preact-prop-helpers#usecompletelistnavigationchildparameters)</small>

|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|context|`CheckboxGroupContext`|Functions and data that the parent has made available to each child. Retrieve it with `useContext`|-|
|info|`OmitStrong<UseCompleteListNavigationChildParameters<TCE, CheckboxGroupInfo<TCE>>["info"], never>`|Data the child makes available to the parent. Passed to `useManagedChild`|-|



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

<small>`extends` [UseCompleteListNavigationChildParameters](https://github.com/mwszekely/preact-prop-helpers#usecompletelistnavigationchildparameters)</small>

|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.checked|`CheckboxCheckedType`||-|
|.onChangeFromParent|`(checked?: CheckboxCheckedType, e?: Event) => void \| Promise<void>`||-|
|context|`CheckboxGroupContext`|Functions and data that the parent has made available to each child. Retrieve it with `useContext`|-|
|info|`Omit<UseCompleteListNavigationChildParameters<TCE, M>["info"], "checkboxInfo">`|Data the child makes available to the parent. Passed to `useManagedChild`|-|



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

<small>`extends` [UseModalReturnType](https://github.com/mwszekely/preact-prop-helpers#usemodalreturntype)</small>

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

Implements a gridlist, which is a hybrid of a [Listbox](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/) and a [Grid](https://www.w3.org/WAI/ARIA/apg/patterns/grid/).



#### UseGridlistParameters

<small>`extends` [`UseLabelParameters`](#uselabelparameters), [`UseLabelSyntheticParameters`](#uselabelsyntheticparameters), [`UseListboxParameters`](#uselistboxparameters), [UseCompleteGridNavigationDeclarativeParameters](https://github.com/mwszekely/preact-prop-helpers#usecompletegridnavigationdeclarativeparameters), [UseCompleteGridNavigationParameters](https://github.com/mwszekely/preact-prop-helpers#usecompletegridnavigationparameters), [UseCompleteListNavigationParameters](https://github.com/mwszekely/preact-prop-helpers#usecompletelistnavigationparameters)</small>

Every member of `UseGridlistParameters` is inherited (see the interfaces it `extends` from).



#### UseGridlistReturnType

<small>`extends` [UseCompleteGridNavigationReturnType](https://github.com/mwszekely/preact-prop-helpers#usecompletegridnavigationreturntype)</small>

|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|context|`UseGridlistContext`|Functions and data that the parent is making available to each child. Put it in your own `Context` from `createContext`|-|
|propsGridlist|HTML props|Spread these props onto the HTML element that will use this logic.|-|
|propsGridlistLabel|HTML props|Spread these props onto the HTML element that will use this logic.|-|

A Listbox is a very limited structure, essentially being just a list with no further interactive content allowed.

If you need a list where each list item has a menu or a button or other non-text content, a Gridlist is probably what you want.



#### useGridlistRow



##### UseGridlistRowParameters

<small>`extends` [UseCompleteGridNavigationRowParameters](https://github.com/mwszekely/preact-prop-helpers#usecompletegridnavigationrowparameters)</small>

|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.selected|`boolean \| null`|When the `selectionLimit` is `"single"`, this must be `null`.|-|
|context|`UseGridlistContext`|Functions and data that the parent has made available to each child. Retrieve it with `useContext`|-|



##### UseGridlistRowReturnType

<small>`extends` [UseCompleteGridNavigationRowReturnType](https://github.com/mwszekely/preact-prop-helpers#usecompletegridnavigationrowreturntype)</small>

Every member of `UseGridlistRowReturnType` is inherited (see the interface it `extends` from).



#### useGridlistCell



##### UseGridlistCellParameters

<small>`extends` [UseCompleteGridNavigationCellParameters](https://github.com/mwszekely/preact-prop-helpers#usecompletegridnavigationcellparameters), [UsePressParameters](https://github.com/mwszekely/preact-prop-helpers#usepressparameters)</small>

Every member of `UseGridlistCellParameters` is inherited (see the interfaces it `extends` from).



##### UseGridlistCellReturnType

<small>`extends` [UseCompleteGridNavigationCellReturnType](https://github.com/mwszekely/preact-prop-helpers#usecompletegridnavigationcellreturntype), [UsePressReturnType](https://github.com/mwszekely/preact-prop-helpers#usepressreturntype)</small>

|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|propsCell|HTML props|Spread these props onto the HTML element that will use this logic.|-|
|propsPress|HTML props|Spread these props onto the HTML element that will use this logic.|-|
|propsTabbable|HTML props|Spread these props onto the HTML element that will use this logic.|-|



<hr />
<hr />



### useListbox

Implements a [Listbox](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/) pattern.

**See also** [useGridlist](#usegridlist) for a more capable list widget.



#### UseListboxParameters

<small>`extends` [`UseLabelParameters`](#uselabelparameters), [`UseLabelSyntheticParameters`](#uselabelsyntheticparameters), [UseCompleteListNavigationParameters](https://github.com/mwszekely/preact-prop-helpers#usecompletelistnavigationparameters)</small>

|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.groupingType|`"with-groups" \| "without-groups" \| "group"`|* `"without-groups"`: This is a listbox with no groups * `"with-groups"`: This is a listbox that is grouped into 2 or more labelled sections. In this case, **all navigation and selection is disabled** (meaning you can pass whatever you'd like to them, it's all ignored) and delegated to the child `group`s. * `"group"`: This is a group, contained within a listbox with `type=="with-groups"`<br />There is currently no support for a mix of grouped and ungrouped options.|-|
|.onSelectedIndexChange|`UseSingleSelectionDeclarativeParameters["singleSelectionDeclarativeParameters"]["onSelectedIndexChange"]`||-|
|.orientation|`"horizontal" \| "vertical"`||-|
|.selectedIndex|`number \| null`|Only used when `groupingType` is `"without-groups"` or `"group"`|-|
|.selectionLimit|`"single" \| "multi" \| "none"`|When `"single"`, the selected item is controlled via `selectedIndex`. When `"multi"`, the selected items are controlled by their individual `selected` props.|-|



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

<small>`extends` [UseCompleteListNavigationChildParameters](https://github.com/mwszekely/preact-prop-helpers#usecompletelistnavigationchildparameters), [UsePressParameters](https://github.com/mwszekely/preact-prop-helpers#usepressparameters)</small>

|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.onMultiSelect|`null \| ((e: ListboxMultiSelectEvent<ListItemElement>) => void)`||-|
|.selected|`boolean \| null`|When the `selectionLimit` is `"single"`, this must be `null`.|-|
|context|`UseListboxContext`|Functions and data that the parent has made available to each child. Retrieve it with `useContext`|-|



##### UseListboxItemReturnType

<small>`extends` [UseCompleteListNavigationChildReturnType](https://github.com/mwszekely/preact-prop-helpers#usecompletelistnavigationchildreturntype), [UsePressReturnType](https://github.com/mwszekely/preact-prop-helpers#usepressreturntype)</small>

Every member of `UseListboxItemReturnType` is inherited (see the interfaces it `extends` from).



<hr />
<hr />



### useMenuSurface

A menu surface is what handles user interaction with an interactive but transient surface (like a menu or a popup).



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

Related to menus, which are a menu contained within a menu surface. Not related to menubars -- menus contain menubars, but not all menubars are contained within a menu or its surface.


<hr />
<hr />



### useMenu

Implements the [Menu](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/) and [Menu Button](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/) patterns.



#### UseMenuParameters

<small>`extends` [`UseLabelParameters`](#uselabelparameters), [`UseLabelSyntheticParameters`](#uselabelsyntheticparameters), [`UseToolbarParameters`](#usetoolbarparameters), [`UseMenuSurfaceParameters`](#usemenusurfaceparameters), [MakeSingleSelectionDeclarativeParameters](https://github.com/mwszekely/preact-prop-helpers#makesingleselectiondeclarativeparameters), [UseCompleteListNavigationParameters](https://github.com/mwszekely/preact-prop-helpers#usecompletelistnavigationparameters), [UseModalParameters](https://github.com/mwszekely/preact-prop-helpers#usemodalparameters)</small>

|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|dismissParameters|`UseMenuSurfaceParameters<MenuSurfaceElement, MenuButtonElement>["dismissParameters"] & {<br />        onClose(reason: "escape" \| "backdrop" \| "lost-focus" \| "item-clicked"): void;<br />    };`| |-|
|escapeDismissParameters|`UseMenuSurfaceParameters<MenuSurfaceElement, MenuButtonElement>["escapeDismissParameters"];`| |-|
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
|.tagIndicator|`ElementToTag<IndicatorElement>`||-|
|.value|`number \| "indeterminate" \| "disabled"`||-|
|.valueText|`string \| null`||-|



#### UseProgressReturnType

<small>`extends` [UseRandomDualIdsReturnType](https://github.com/mwszekely/preact-prop-helpers#userandomdualidsreturntype), [UsePressReturnType](https://github.com/mwszekely/preact-prop-helpers#usepressreturntype)</small>

|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|propsIndicator|HTML props|Spread these props onto the HTML element that will use this logic.|-|
|propsLabel|HTML props|Spread these props onto the HTML element that will use this logic.|-|
|propsRegion|HTML props|Spread these props onto the HTML element that will use this logic.|-|


<hr />
<hr />



### useRadioGroup

Implements a [Radio Group](https://www.w3.org/WAI/ARIA/apg/patterns/radio/) pattern.



#### UseRadioGroupParameters

<small>`extends` [`UseLabelParameters`](#uselabelparameters), [`UseLabelSyntheticParameters`](#uselabelsyntheticparameters), [UseCompleteListNavigationParameters](https://github.com/mwszekely/preact-prop-helpers#usecompletelistnavigationparameters)</small>

|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.name|`string`||-|
|.onSelectedValueChange|`undefined \| null \| RadioChangeEventHandler<V>`||-|
|.selectedValue|`V \| null`||-|



#### UseRadioGroupReturnType

<small>`extends` [UseCompleteListNavigationReturnType](https://github.com/mwszekely/preact-prop-helpers#usecompletelistnavigationreturntype)</small>

|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|.selectedIndex|`number \| null`||-|
|context|`RadioContext`|Functions and data that the parent is making available to each child. Put it in your own `Context` from `createContext`|-|
|propsRadioGroup|HTML props|Spread these props onto the HTML element that will use this logic.|-|
|propsRadioGroupLabel|HTML props|Spread these props onto the HTML element that will use this logic.|-|



#### useRadio



##### UseRadioParameters

<small>`extends` [`UseLabelParameters`](#uselabelparameters), [`UseCheckboxLikeParameters`](#usecheckboxlikeparameters), [UseCompleteListNavigationChildParameters](https://github.com/mwszekely/preact-prop-helpers#usecompletelistnavigationchildparameters), [UsePressParameters](https://github.com/mwszekely/preact-prop-helpers#usepressparameters)</small>

|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.value|`V`||-|
|context|`RadioContext`|Functions and data that the parent has made available to each child. Retrieve it with `useContext`|-|



##### UseRadioReturnType

<small>`extends` [`UseCheckboxLikeReturnType`](#usecheckboxlikereturntype), [UseCompleteListNavigationChildReturnType](https://github.com/mwszekely/preact-prop-helpers#usecompletelistnavigationchildreturntype), [UseRandomDualIdsReturnType](https://github.com/mwszekely/preact-prop-helpers#userandomdualidsreturntype), [UsePressReturnType](https://github.com/mwszekely/preact-prop-helpers#usepressreturntype)</small>

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

<small>`extends` [UseManagedChildParameters](https://github.com/mwszekely/preact-prop-helpers#usemanagedchildparameters)</small>

|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.label|`string`|There's no, like, "slider container" for multi-thumb sliders defined, so each individual slider needs its own label. TODO: This is like a tab/tabpanel linking thing where each label is outside of the container. For now, it's easier to just assume a string-based label instead of an element-based one.|-|
|.max?|`number`||-|
|.min?|`number`||-|
|.onValueChange?|`(e: RangeChangeEvent<E>) => void`||-|
|.value|`number`||-|
|.valueText?|`string`||-|
|context|`SliderContext`|Functions and data that the parent has made available to each child. Retrieve it with `useContext`|-|



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

Creates a sortable data table in a [Grid](https://www.w3.org/WAI/ARIA/apg/patterns/grid/) pattern.



#### UseTableParameters

<small>`extends` [`UseLabelParameters`](#uselabelparameters), [`UseLabelSyntheticParameters`](#uselabelsyntheticparameters)</small>

|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.tagTable|`ElementToTag<TableElement>`||-|



#### UseTableReturnType



|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|context|`UseTableContext`|Functions and data that the parent is making available to each child. Put it in your own `Context` from `createContext`|-|
|propsLabel|HTML props|Spread these props onto the HTML element that will use this logic.|-|
|propsTable|HTML props|Spread these props onto the HTML element that will use this logic.|-|



#### useTableSection



##### UseTableSectionParameters

<small>`extends` [UseCompleteGridNavigationParameters](https://github.com/mwszekely/preact-prop-helpers#usecompletegridnavigationparameters)</small>

|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.location|`"head" \| "body" \| "foot"`||-|
|.tagTableSection|`ElementToTag<TableSectionElement>`||-|
|context|`UseTableContext`|Functions and data that the parent has made available to each child. Retrieve it with `useContext`|-|



##### UseTableSectionReturnType

<small>`extends` [UseCompleteGridNavigationReturnType](https://github.com/mwszekely/preact-prop-helpers#usecompletegridnavigationreturntype)</small>

|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|context|`UseTableSectionContext`|Functions and data that the parent is making available to each child. Put it in your own `Context` from `createContext`|-|
|propsTableSection|HTML props|Spread these props onto the HTML element that will use this logic.|-|



#### useTableRow



##### UseTableRowParameters

<small>`extends` [UseCompleteGridNavigationRowParameters](https://github.com/mwszekely/preact-prop-helpers#usecompletegridnavigationrowparameters), [UseGridNavigationRowParameters](https://github.com/mwszekely/preact-prop-helpers#usegridnavigationrowparameters)</small>

|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.selected|`boolean \| null`|When the `selectionLimit` is `"single"`, this must be `null`.|-|
|.tagTableRow|`ElementToTag<TableRowElement>`||-|
|context|`UseTableSectionContext`|Functions and data that the parent has made available to each child. Retrieve it with `useContext`|-|
|info|`Omit<UseCompleteGridNavigationRowParameters<TableRowElement, TableCellElement, RM, CM>["info"], "getSortValue">`|Data the child makes available to the parent. Passed to `useManagedChild`|-|



##### UseTableRowReturnType

<small>`extends` [UseCompleteGridNavigationRowReturnType](https://github.com/mwszekely/preact-prop-helpers#usecompletegridnavigationrowreturntype)</small>

|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|context|`UseTableRowContext`|Functions and data that the parent is making available to each child. Put it in your own `Context` from `createContext`|-|



#### useTableCell



##### UseTableCellParameters

<small>`extends` [UseCompleteGridNavigationCellParameters](https://github.com/mwszekely/preact-prop-helpers#usecompletegridnavigationcellparameters)</small>

|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.tagTableCell|`ElementToTag<TableCellElement>`||-|
|context|`UseTableRowContext`|Functions and data that the parent has made available to each child. Retrieve it with `useContext`|-|
|info|`OmitStrong<UseCompleteGridNavigationCellParameters<TableCellElement, CM>["info"], never>`|Data the child makes available to the parent. Passed to `useManagedChild`|-|



##### UseTableCellReturnType

<small>`extends` [UseCompleteGridNavigationCellReturnType](https://github.com/mwszekely/preact-prop-helpers#usecompletegridnavigationcellreturntype)</small>

|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|.sortByThisColumn|`() => SortInfo`||-|
|propsCell|HTML props|Spread these props onto the HTML element that will use this logic.|-|
|propsFocus|HTML props|Spread these props onto the HTML element that will use this logic.|-|



<hr />
<hr />



### useTabs

Implements a [Tabs](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/) pattern.



#### UseTabsParameters

<small>`extends` [`UseLabelParameters`](#uselabelparameters), [`UseLabelSyntheticParameters`](#uselabelsyntheticparameters), [UseCompleteListNavigationParameters](https://github.com/mwszekely/preact-prop-helpers#usecompletelistnavigationparameters)</small>

|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.localStorageKey|`keyof PersistentStates \| null`||-|
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



#### useTab



##### UseTabParameters

<small>`extends` [UseCompleteListNavigationChildParameters](https://github.com/mwszekely/preact-prop-helpers#usecompletelistnavigationchildparameters), [UsePressParameters](https://github.com/mwszekely/preact-prop-helpers#usepressparameters)</small>

|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|context|`UseTabsContext`|Functions and data that the parent has made available to each child. Retrieve it with `useContext`|-|



##### UseTabReturnType

<small>`extends` [UseCompleteListNavigationChildReturnType](https://github.com/mwszekely/preact-prop-helpers#usecompletelistnavigationchildreturntype), [UsePressReturnType](https://github.com/mwszekely/preact-prop-helpers#usepressreturntype)</small>

|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|props|HTML props|Spread these props onto the HTML element that will use this logic.|-|



#### useTabPanel



##### UseTabPanelParameters

<small>`extends` [UseManagedChildParameters](https://github.com/mwszekely/preact-prop-helpers#usemanagedchildparameters)</small>

|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|context|`UseTabPanelsContext`|Functions and data that the parent has made available to each child. Retrieve it with `useContext`|-|



##### UseTabPanelReturnType



|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|.getVisible|`() => boolean`||-|
|.visible|`boolean \| null`||-|
|.visibleOffset|`number \| null`||-|
|props|HTML props|Spread these props onto the HTML element that will use this logic.|-|



<hr />
<hr />



### useToolbar

Implements a [Toolbar](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/) pattern.



#### UseToolbarParameters

<small>`extends` [`UseLabelParameters`](#uselabelparameters), [`UseLabelSyntheticParameters`](#uselabelsyntheticparameters), [MakeSingleSelectionDeclarativeParameters](https://github.com/mwszekely/preact-prop-helpers#makesingleselectiondeclarativeparameters), [UseCompleteListNavigationParameters](https://github.com/mwszekely/preact-prop-helpers#usecompletelistnavigationparameters)</small>

|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.disabled|`boolean`|When true, none of the children will be selectable or focusable.<br />The component itself will be made focusable instead (partially to ensure there's always something focusable in the case of e.g. a menu).|-|
|.onSelectedIndexChange|`MakeSingleSelectionDeclarativeParameters<UseCompleteListNavigationParameters<ContainerElement, ChildElement, M>>["singleSelectionDeclarativeParameters"]["onSelectedIndexChange"]`|Optional; Only used if you need single selection logic.|-|
|.orientation|`"horizontal" \| "vertical"`||-|
|.role|`h.JSX.AriaRole \| null`|Should be "toolbar" for toolbars, `null` if someone else takes care of the role (TODO: it's still labelled in this case, what does this mean?), and whatever string is applicable otherwise.|-|
|.selectedIndex|`MakeSingleSelectionDeclarativeParameters<UseCompleteListNavigationParameters<ContainerElement, ChildElement, M>>["singleSelectionDeclarativeParameters"]["selectedIndex"]`|Optional; Only used if you need single selection logic.|-|



#### UseToolbarReturnType

<small>`extends` [MakeSingleSelectionDeclarativeReturnType](https://github.com/mwszekely/preact-prop-helpers#makesingleselectiondeclarativereturntype), [UseCompleteListNavigationReturnType](https://github.com/mwszekely/preact-prop-helpers#usecompletelistnavigationreturntype)</small>

|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|randomIdInputReturn|[UseRandomIdReturnType](https://github.com/mwszekely/preact-prop-helpers#userandomidreturntype)| |-|
|randomIdLabelReturn|[UseRandomIdReturnType](https://github.com/mwszekely/preact-prop-helpers#userandomidreturntype)| |-|
|context|`UseToolbarContext`|Functions and data that the parent is making available to each child. Put it in your own `Context` from `createContext`|-|
|propsLabel|HTML props|Spread these props onto the HTML element that will use this logic.|-|
|propsToolbar|HTML props|Spread these props onto the HTML element that will use this logic.|-|

A toolbar is just a collection of widgets in an expected order with a label (visible or hidden) and with the usual keyboard navigation stuff.

The main difference between a toolbar and a menubar is that a menubar contains purely static menuitems, but a toolbar is the more general case, being able to contain anything at all. A menubar is implemented as a special case of a toolbar, and a menu is implemented as a specialized menubar.

Either way, be sure to specify the role and orientation this toolbar has (role=toolbar if you're using this as an actual toolbar).


<hr />
<hr />



### useTooltip

Implements a [Tooltip](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/) pattern.



#### UseTooltipParameters

<small>`extends` [UseEscapeDismissParameters](https://github.com/mwszekely/preact-prop-helpers#useescapedismissparameters)</small>

|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.hoverDelay|`number \| null`|How long should the tooltip wait to show itself if it was shown via hover?<br />Default is 0.|-|
|.onStatus|`(status?: TooltipStatus) => void`|Called when the tooltip's content should be shown or hidden or when the manner in which it's shown should be changed.<br />This can change from `"hover"` to `"mouse"`, but never the other way around.<br />`"null"` means the tooltip should be hidden|-|
|.tooltipSemanticType|`"label" \| "description"`|This is whether `aria-describedby` or `aria-labelledby` is used.<br />Certain situations require one or the other, so you need to specify for each circumstance.|-|



#### UseTooltipReturnType



|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|.getState|`() => TooltipState`||-|
|.stateIsFocus|`() => boolean`||-|
|.stateIsMouse|`() => boolean`||-|
|propsPopup|HTML props|Spread these props onto the HTML element that will use this logic.|-|
|propsTrigger|HTML props|Spread these props onto the HTML element that will use this logic.|-|

Tooltips are remarkably under-specified, so some of this is speculative.


## The following items are missing their documentation (or should not have been linked to):


##### UseLabelParameters
##### UseCheckboxLikeParameters
##### UseCheckboxLikeReturnType
##### UseLabelSyntheticParameters
