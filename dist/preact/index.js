/**
 * # Preact Aria Widgets
 *
 * Preact props that implement ARIA-compliant widgets in the style of `preact-prop-helpers` (i.e. hooks that swizzle parameters and returns back and forth).
 * **No CSS is provided** &ndash; this library is intended for wiring up event handlers, HTML/ARIA attributes, labels, and so on, but each hook gives you the information you need to create appropriate e.g. `class` values to style your own components.
 *
 * For example, this is a partial example of using the `Gridlist` component:
 *
 * ```typescript
 * <Gridlist<HTMLUListElement, HTMLLIElement, HTMLDivElement, HTMLLabelElement>
 *     // Many of these props are taken **directly** from `preact-prop-helpers`
 *     singleSelectedIndex={selectedIndex}
 *     onSingleSelectedIndexChange={e => setSelectedIndex(e[EventDetail].selectedIndex)}
 *     singleSelectionAriaPropName="aria-selected"
 *     singleSelectionMode="activation"
 *
 *     // These are specific to a `Gridlist`
 *     ariaLabel={null}
 *     groupingType="without-groups"
 *
 *     // Every component takes a `render` prop that actually returns the JSX to render
 *     render={infoGridlist => {
 *         // infoGridList includes everything that useGridNavigationComplete from `preact-prop-helpers`
 *         // plus some extra information from useGridlist in this library.
 *         // Like with preact-prop-helpers, spread the appropriate props onto elements and return them.
 *         return (
 *             <>
 *                 <label {...info.propsGridlistLabel}>Gridlist</label>
 *                 <div {...info.propsGridlist}>{children}</div>
 *             </>
 *         )
 *
 *         // There are **a lot** of useful return values that you can use when rendering
 *         // the component to the DOM. Again, most of them borrow heavily from preact-prop-helpers
 *         // and return many of the exact same values.
 *         infoGridlist.rovingTabIndexReturn.getTabbableIndex();
 *         return
 *     } />
 * ```
 *
 * This library is split into two parts: hook implementations and component implementations.
 * They are near identical, with the components providing a nicer user interface.
 * When using a component, you must specify a `render` prop that takes all the information the hook version returns and gives back the markup to use.
 * As an example, `Checkbox` components can be rendered as `<label /><input />` or  `<label><input /></label>` based on the function you pass to that `render` prop.
 *  You can even do just plain `<input>`, though `aria-label` usually needs to be handled manually in all cases.
 *
 * The intent is to help ensure that individual widgets on a given page are accessible, but it is still up to you to ensure that the page as a whole is too, and that things *actually make sense* in practice.
 * Don't forget to do lots of testing. *
 *
 * {@tableOfContents start}
 * {@include } {@link useAccordion}
 * {@include } {@link useButton}
 * {@include } {@link useCheckbox}
 * {@include } {@link useCheckboxGroup}
 * {@include } {@link useDialog}
 * {@include } {@link useDrawer}
 * {@include } {@link useGridlist}
 * {@include } {@link useListbox}
 * {@include } {@link useMenuSurface}
 * {@include } {@link useMenu}
 * {@include } {@link useMenubar}
 * {@include } {@link useProgress}
 * {@include } {@link useRadioGroup}
 * {@include } {@link useSlider}
 * {@include } {@link useTable}
 * {@include } {@link useTabs}
 * {@include } {@link useToolbar}
 * {@include } {@link useTooltip}
 * {@tableOfContents end}
 *
 *
 * @packageDocumentation
 */
export { useAccordion, useAccordionSection } from "./use-accordion.js";
export { useButton } from "./use-button.js";
export { useCheckboxGroup, useCheckboxGroupChild, useCheckboxGroupParent } from "./use-checkbox-group.js";
export { useCheckboxLike } from "./use-checkbox-like.js";
export { useCheckbox } from "./use-checkbox.js";
export { useDialog } from "./use-dialog.js";
export { useDrawer } from "./use-drawer.js";
export { useGridlist, useGridlistCell, useGridlistRow, useGridlistRowOuter } from "./use-gridlist.js";
export { useLabel, useLabelSynthetic } from "./use-label.js";
export { useListbox, useListboxItem } from "./use-listbox.js";
export { useFocusSentinel, useMenuSurface } from "./use-menu-surface.js";
export { useMenu, useMenuItem } from "./use-menu.js";
export { useMenubar, useMenubarChild } from "./use-menubar.js";
export { NotificationProviderContext, useNotificationProvider, useNotify } from "./use-notify.js";
export { useProgress, useProgressWithHandler } from "./use-progress.js";
export { useRadio, useRadioGroup } from "./use-radio-group.js";
export { useSlider, useSliderThumb } from "./use-slider.js";
export { useTable, useTableBody, useTableCell, useTableHead, useTableRow, useTableRowOuter } from "./use-table.js";
export { useTab, useTabPanel, useTabs } from "./use-tabs.js";
export { useToast, useToasts } from "./use-toasts.js";
export { useToolbar, useToolbarChild } from "./use-toolbar.js";
export { useTooltip } from "./use-tooltip.js";
export { Accordion, AccordionSection } from "./component/accordion.js";
export { Button } from "./component/button.js";
export { CheckboxGroup, CheckboxGroupChild, CheckboxGroupParent } from "./component/checkbox-group.js";
export { Checkbox, defaultRenderCheckboxLike } from "./component/checkbox.js";
export { Dialog } from "./component/dialog.js";
export { Drawer } from "./component/drawer.js";
export { Gridlist, GridlistCell, GridlistRow } from "./component/gridlist.js";
export { Heading, HeadingReset } from "./component/heading.js";
export { GroupedListbox, Listbox, ListboxChildren, ListboxItem } from "./component/listbox.js";
export { Menu, MenuItem } from "./component/menu.js";
export { Menubar, MenubarItem, MenubarItemContext } from "./component/menubar.js";
export { Progress, ProgressWithHandler } from "./component/progress.js";
export { Radio, RadioGroup } from "./component/radio-group.js";
export { Slider, SliderThumb } from "./component/slider.js";
export { Table, TableBody, TableBodyRow, TableCell, TableHead, TableHeadRow } from "./component/table.js";
export { Tab, TabPanel, Tabs } from "./component/tabs.js";
export { Toast, Toasts } from "./component/toasts.js";
export { Toolbar, ToolbarChild } from "./component/toolbar.js";
export { Tooltip } from "./component/tooltip.js";
export { useDefaultRenderPortal } from "./component/util.js";
export { ParentDepthContext, useDefault } from "./component/util.js";
export { EventDetail } from "./props.js";
//# sourceMappingURL=index.js.map