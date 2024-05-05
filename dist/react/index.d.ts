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
export { useAccordion, useAccordionSection, type UseAccordionContext, type UseAccordionContextSelf, type UseAccordionParameters, type UseAccordionParametersSelf, type UseAccordionReturnType, type UseAccordionReturnTypeSelf, type UseAccordionSectionInfo, type UseAccordionSectionParameters, type UseAccordionSectionParametersSelf, type UseAccordionSectionReturnType, type UseAccordionSectionReturnTypeSelf } from "./use-accordion.js";
export { useButton, type ButtonPressEventDetail, type ButtonPressEventHandler, type TargetedButtonPressEvent, type UseButtonParameters, type UseButtonParametersSelf, type UseButtonReturnType } from "./use-button.js";
export { useCheckboxGroup, useCheckboxGroupChild, useCheckboxGroupParent, type CheckboxGroupChangeEventDetail, type CheckboxGroupChangeEventHandler, type CheckboxGroupContext, type CheckboxGroupInfo, type TargetedCheckboxGroupChangeEvent, type UseCheckboxGroupChildParameters, type UseCheckboxGroupChildParametersSelf, type UseCheckboxGroupChildReturnType, type UseCheckboxGroupChildReturnTypeSelf, type UseCheckboxGroupParameters, type UseCheckboxGroupParametersSelf, type UseCheckboxGroupParentParameters, type UseCheckboxGroupParentReturnType, type UseCheckboxGroupParentReturnTypeSelf, type UseCheckboxGroupReturnType } from "./use-checkbox-group.js";
export { useCheckboxLike, type CheckboxCheckedType, type UseCheckboxLikeParameters, type UseCheckboxLikeParametersSelf, type UseCheckboxLikeReturnType, type UseCheckboxLikeReturnTypeSelf } from "./use-checkbox-like.js";
export { useCheckbox, type CheckboxChangeEventDetail, type CheckboxChangeEventHandler, type TargetedCheckboxChangeEvent, type UseCheckboxParameters, type UseCheckboxParametersSelf, type UseCheckboxReturnType, type UseCheckboxReturnTypeSelf } from "./use-checkbox.js";
export { useDialog, type UseDialogParameters, type UseDialogReturnType } from "./use-dialog.js";
export { useDrawer, type UseDrawerParameters, type UseDrawerReturnType } from "./use-drawer.js";
export { useGridlist, useGridlistCell, useGridlistRow, type GridlistCellInfo, type GridlistRowInfo, type UseGridlistCellParameters, type UseGridlistCellReturnType, type UseGridlistContext, type UseGridlistParameters, type UseGridlistParametersSelf, type UseGridlistReturnType, type UseGridlistRowContext, type UseGridlistRowParameters, type UseGridlistRowParametersSelf, type UseGridlistRowReturnType } from "./use-gridlist.js";
export { useLabel, useLabelSynthetic, type FocusableLabelElement, type LabelPosition, type UseLabelParameters, type UseLabelParametersSelf, type UseLabelReturnType, type UseLabelSyntheticParameters } from "./use-label.js";
export { useListbox, useListboxItem, type ListboxInfo, type ListboxMultiSelectEvent, type ListboxSingleSelectEvent, type UseListboxContext, type UseListboxItemParameters, type UseListboxItemParametersSelf, type UseListboxItemReturnType, type UseListboxParameters, type UseListboxParametersSelf, type UseListboxReturnType } from "./use-listbox.js";
export { useFocusSentinel, useMenuSurface, type UseFocusSentinelParameters, type UseMenuSurfaceParameters, type UseMenuSurfaceParametersSelf, type UseMenuSurfaceReturnType } from "./use-menu-surface.js";
export { useMenu, useMenuItem, type MenuItemReturnTypeSelf, type UseMenuContext, type UseMenuItemParameters, type UseMenuItemReturnType, type UseMenuParameters, type UseMenuParametersSelf, type UseMenuReturnType } from "./use-menu.js";
export { useMenubar, useMenubarChild, type UseMenubarContext, type UseMenubarItemParameters, type UseMenubarItemParametersSelf, type UseMenubarItemReturnType, type UseMenubarParameters, type UseMenubarReturnType, type UseMenubarSubInfo } from "./use-menubar.js";
export { NotificationProviderContext, useNotificationProvider, useNotify, type NotificationProviderProps, type NotificationProviderReturnType } from "./use-notify.js";
export { useProgress, useProgressWithHandler, type UseProgressParameters, type UseProgressParametersSelf, type UseProgressReturnType, type UseProgressWithHandlerParameters, type UseProgressWithHandlerParametersSelf, type UseProgressWithHandlerReturnType } from "./use-progress.js";
export { useRadio, useRadioGroup, type RadioChangeEventDetail, type RadioChangeEventHandler, type RadioContext, type RadioContextSelf, type RadioSubInfo, type TargetedRadioChangeEvent, type UseRadioGroupParameters, type UseRadioGroupParametersSelf, type UseRadioGroupReturnType, type UseRadioGroupReturnTypeSelf, type UseRadioParameters, type UseRadioParametersSelf, type UseRadioReturnType } from "./use-radio-group.js";
export { useSlider, useSliderThumb, type RangeChangeEvent, type SliderContext, type SliderContextSelf, type SliderThumbInfo, type UseSliderParameters, type UseSliderParametersSelf, type UseSliderReturnType, type UseSliderThumbParameters, type UseSliderThumbParametersSelf, type UseSliderThumbReturnType, type UseSliderThumbReturnTypeSelf } from "./use-slider.js";
export { useTable, useTableCell, useTableRow, useTableSection, type SortDirection, type TableCellInfo, type TableRowInfo, type UseTableCellParameters, type UseTableCellParametersSelf, type UseTableCellReturnType, type UseTableCellReturnTypeSelf, type UseTableContext, type UseTableContextSelf, type UseTableParameters, type UseTableParametersSelf, type UseTableReturnType, type UseTableRowContext, type UseTableRowParameters, type UseTableRowParametersSelf, type UseTableRowReturnType, type UseTableSectionContext, type UseTableSectionParameters, type UseTableSectionParametersSelf, type UseTableSectionReturnType } from "./use-table.js";
export { useTab, useTabPanel, useTabs, type TabInfo, type TabPanelInfo, type TabsChangeEvent, type UseTab, type UseTabLabelParameters, type UseTabLabelReturnTypeWithHooks, type UseTabList, type UseTabListLabel, type UseTabListLabelReturnTypeInfo, type UseTabListParameters, type UseTabListReturnType, type UseTabPanel, type UseTabPanelParameters, type UseTabPanelReturnType, type UseTabPanelReturnTypeSelf, type UseTabPanelsContext, type UseTabParameters, type UseTabReturnType, type UseTabsContext, type UseTabsParameters, type UseTabsParametersSelf, type UseTabsReturnType } from "./use-tabs.js";
export { useToast, useToasts, type ToastInfo, type ToastsContext, type ToastsContextSelf, type UseToastParameters, type UseToastParametersSelf, type UseToastReturnType, type UseToastReturnTypeSelf, type UseToastsParameters, type UseToastsParametersSelf, type UseToastsReturnType } from "./use-toasts.js";
export { useToolbar, useToolbarChild, type UseToolbarChildParameters, type UseToolbarChildParametersSelf, type UseToolbarChildReturnType, type UseToolbarContext, type UseToolbarContextSelf, type UseToolbarParameters, type UseToolbarParametersSelf, type UseToolbarReturnType, type UseToolbarSubInfo } from "./use-toolbar.js";
export { useTooltip, type TooltipState, type TooltipStatus, type UseTooltipParameters, type UseTooltipParametersSelf, type UseTooltipReturnType, type UseTooltipReturnTypeSelf } from "./use-tooltip.js";
export { Accordion, AccordionSection, type AccordionProps, type AccordionSectionProps } from "./component/accordion.js";
export { Button, type ButtonProps } from "./component/button.js";
export { CheckboxGroup, CheckboxGroupChild, CheckboxGroupParent, type CheckboxGroupChildProps, type CheckboxGroupParentProps, type CheckboxGroupProps } from "./component/checkbox-group.js";
export { Checkbox, defaultRenderCheckboxLike, type CheckboxProps } from "./component/checkbox.js";
export { Dialog, type DialogProps } from "./component/dialog.js";
export { Drawer, type DrawerProps } from "./component/drawer.js";
export { Gridlist, GridlistChild, GridlistRow, GridlistRows, type GridlistChildProps, type GridlistProps, type GridlistRowProps, type GridlistRowsProps } from "./component/gridlist.js";
export { Heading, HeadingReset, type HeadingProps } from "./component/heading.js";
export { GroupedListbox, Listbox, ListboxChildren, ListboxItem, type ListboxChildrenProps, type ListboxItemProps, type ListboxProps } from "./component/listbox.js";
export { Menu, MenuItem, type MenuItemProps, type MenuProps } from "./component/menu.js";
export { Menubar, MenubarItem, MenubarItemContext, type MenubarItemProps, type MenubarProps } from "./component/menubar.js";
export { Progress, ProgressWithHandler, type ProgressProps, type ProgressWithHandlerProps } from "./component/progress.js";
export { Radio, RadioGroup, type RadioGroupProps, type RadioProps } from "./component/radio-group.js";
export { Slider, SliderThumb, type SliderProps, type SliderThumbProps } from "./component/slider.js";
export { Table, TableCell, TableRow, TableRows, TableSection, type TableCellProps, type TableProps, type TableRowProps, type TableRowsProps, type TableSectionProps } from "./component/table.js";
export { Tab, TabPanel, Tabs, type TabPanelProps, type TabProps, type TabsProps } from "./component/tabs.js";
export { Toast, Toasts, type ToastProps, type ToastsProps } from "./component/toasts.js";
export { Toolbar, ToolbarChild, type ToolbarChildProps, type ToolbarProps } from "./component/toolbar.js";
export { Tooltip, type TooltipProps } from "./component/tooltip.js";
export { useDefaultRenderPortal } from "./component/util.js";
export { ParentDepthContext, useDefault } from "./component/util.js";
export { EventDetail } from "./props.js";
export type { DisabledType, ElementFromTag, ElementToTag, PickByType, TagSensitiveProps } from "./props.js";
declare module 'preact' {
    namespace h {
        namespace JSX {
            interface HTMLAttributes<RefType extends EventTarget = EventTarget> {
                inert?: boolean | SignalLike<boolean | undefined> | undefined;
            }
        }
    }
}
//# sourceMappingURL=index.d.ts.map