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

export { UseAccordionContext, UseAccordionContextSelf, UseAccordionParameters, UseAccordionParametersSelf, UseAccordionReturnType, UseAccordionReturnTypeSelf, UseAccordionSectionInfo, UseAccordionSectionParameters, UseAccordionSectionParametersSelf, UseAccordionSectionReturnType, UseAccordionSectionReturnTypeSelf, useAccordion, useAccordionSection } from "./use-accordion.js";
export { ButtonPressEventDetail, ButtonPressEventHandler, TargetedButtonPressEvent, UseButtonParameters, UseButtonParametersSelf, UseButtonReturnType, useButton } from "./use-button.js";
export { CheckboxGroupChangeEventDetail, CheckboxGroupChangeEventHandler, CheckboxGroupContext, CheckboxGroupInfo, TargetedCheckboxGroupChangeEvent, UseCheckboxGroupChildParameters, UseCheckboxGroupChildParametersSelf, UseCheckboxGroupChildReturnType, UseCheckboxGroupChildReturnTypeSelf, UseCheckboxGroupParameters, UseCheckboxGroupParametersSelf, UseCheckboxGroupParentParameters, UseCheckboxGroupParentReturnType, UseCheckboxGroupParentReturnTypeSelf, UseCheckboxGroupReturnType, useCheckboxGroup, useCheckboxGroupChild, useCheckboxGroupParent } from "./use-checkbox-group.js";
export { CheckboxCheckedType, UseCheckboxLikeParameters, UseCheckboxLikeParametersSelf, UseCheckboxLikeReturnType, UseCheckboxLikeReturnTypeSelf, useCheckboxLike } from "./use-checkbox-like.js";
export { CheckboxChangeEventDetail, CheckboxChangeEventHandler, TargetedCheckboxChangeEvent, UseCheckboxParameters, UseCheckboxParametersSelf, UseCheckboxReturnType, UseCheckboxReturnTypeSelf, useCheckbox } from "./use-checkbox.js";
export { UseDialogParameters, UseDialogReturnType, useDialog } from "./use-dialog.js";
export { UseDrawerParameters, UseDrawerReturnType, useDrawer } from "./use-drawer.js";
export { GridlistCellInfo, GridlistRowInfo, UseGridlistCellParameters, UseGridlistCellReturnType, UseGridlistContext, UseGridlistParameters, UseGridlistParametersSelf, UseGridlistReturnType, UseGridlistRowContext, UseGridlistRowParameters, UseGridlistRowParametersSelf, UseGridlistRowReturnType, useGridlist, useGridlistCell, useGridlistRow } from "./use-gridlist.js";
export { FocusableLabelElement, LabelPosition, UseLabelParameters, UseLabelParametersSelf, UseLabelReturnType, UseLabelSyntheticParameters, useLabel, useLabelSynthetic } from "./use-label.js";
export { ListboxInfo, ListboxMultiSelectEvent, ListboxSingleSelectEvent, UseListboxContext, UseListboxItemParameters, UseListboxItemParametersSelf, UseListboxItemReturnType, UseListboxParameters, UseListboxParametersSelf, UseListboxReturnType, useListbox, useListboxItem } from "./use-listbox.js";
export { UseFocusSentinelParameters, UseMenuSurfaceParameters, UseMenuSurfaceParametersSelf, UseMenuSurfaceReturnType, useFocusSentinel, useMenuSurface } from "./use-menu-surface.js";
export { MenuItemReturnTypeSelf, UseMenuContext, UseMenuItemParameters, UseMenuItemReturnType, UseMenuParameters, UseMenuParametersSelf, UseMenuReturnType, useMenu, useMenuItem } from "./use-menu.js";
export { UseMenubarContext, UseMenubarItemParameters, UseMenubarItemParametersSelf, UseMenubarItemReturnType, UseMenubarParameters, UseMenubarReturnType, UseMenubarSubInfo, useMenubar, useMenubarChild } from "./use-menubar.js";
export { NotificationProviderContext, NotificationProviderProps, NotificationProviderReturnType, useNotificationProvider, useNotify } from "./use-notify.js";
export { UseProgressParameters, UseProgressParametersSelf, UseProgressReturnType, UseProgressWithHandlerParameters, UseProgressWithHandlerParametersSelf, UseProgressWithHandlerReturnType, useProgress, useProgressWithHandler } from "./use-progress.js";
export { RadioChangeEventDetail, RadioChangeEventHandler, RadioContext, RadioContextSelf, RadioSubInfo, TargetedRadioChangeEvent, UseRadioGroupParameters, UseRadioGroupParametersSelf, UseRadioGroupReturnType, UseRadioGroupReturnTypeSelf, UseRadioParameters, UseRadioParametersSelf, UseRadioReturnType, useRadio, useRadioGroup } from "./use-radio-group.js";
export { RangeChangeEvent, SliderContext, SliderContextSelf, SliderThumbInfo, UseSliderParameters, UseSliderParametersSelf, UseSliderReturnType, UseSliderThumbParameters, UseSliderThumbParametersSelf, UseSliderThumbReturnType, UseSliderThumbReturnTypeSelf, useSlider, useSliderThumb } from "./use-slider.js";
export { SortDirection, TableCellInfo, TableRowInfo, UseTableCellParameters, UseTableCellParametersSelf, UseTableCellReturnType, UseTableCellReturnTypeSelf, UseTableContext, UseTableContextSelf, UseTableParameters, UseTableParametersSelf, UseTableReturnType, UseTableRowContext, UseTableRowParameters, UseTableRowParametersSelf, UseTableRowReturnType, UseTableSectionContext, UseTableSectionParameters, UseTableSectionParametersSelf, UseTableSectionReturnType, useTable, useTableCell, useTableRow, useTableSection } from "./use-table.js";
export { TabInfo, TabPanelInfo, TabsChangeEvent, UseTab, UseTabLabelParameters, UseTabLabelReturnTypeWithHooks, UseTabList, UseTabListLabel, UseTabListLabelReturnTypeInfo, UseTabListParameters, UseTabListReturnType, UseTabPanel, UseTabPanelParameters, UseTabPanelReturnType, UseTabPanelReturnTypeSelf, UseTabPanelsContext, UseTabParameters, UseTabReturnType, UseTabsContext, UseTabsParameters, UseTabsParametersSelf, UseTabsReturnType, useTab, useTabPanel, useTabs } from "./use-tabs.js";
export { ToastInfo, ToastsContext, ToastsContextSelf, UseToastParameters, UseToastParametersSelf, UseToastReturnType, UseToastReturnTypeSelf, UseToastsParameters, UseToastsParametersSelf, UseToastsReturnType, useToast, useToasts } from "./use-toasts.js";
export { UseToolbarChildParameters, UseToolbarChildParametersSelf, UseToolbarChildReturnType, UseToolbarContext, UseToolbarContextSelf, UseToolbarParameters, UseToolbarParametersSelf, UseToolbarReturnType, UseToolbarSubInfo, useToolbar, useToolbarChild } from "./use-toolbar.js";
export { TooltipState, TooltipStatus, UseTooltipParameters, UseTooltipParametersSelf, UseTooltipReturnType, UseTooltipReturnTypeSelf, useTooltip } from "./use-tooltip.js";

export { Accordion, AccordionProps, AccordionSection, AccordionSectionProps } from "./component/accordion.js";
export { Button, ButtonProps } from "./component/button.js";
export { CheckboxGroup, CheckboxGroupChild, CheckboxGroupChildProps, CheckboxGroupParent, CheckboxGroupParentProps, CheckboxGroupProps } from "./component/checkbox-group.js";
export { Checkbox, CheckboxProps, defaultRenderCheckboxLike } from "./component/checkbox.js";
export { Dialog, DialogProps } from "./component/dialog.js";
export { Drawer, DrawerProps } from "./component/drawer.js";
export { Gridlist, GridlistChild, GridlistChildProps, GridlistProps, GridlistRow, GridlistRowProps, GridlistRows, GridlistRowsProps, defaultRenderGridlistChild } from "./component/gridlist.js";
export { Heading, HeadingProps, HeadingReset } from "./component/heading.js";
export { GroupedListbox, Listbox, ListboxChildren, ListboxChildrenProps, ListboxItem, ListboxItemProps, ListboxProps } from "./component/listbox.js";
export { Menu, MenuItem, MenuItemProps, MenuProps } from "./component/menu.js";
export { Menubar, MenubarItem, MenubarItemContext, MenubarItemProps, MenubarProps } from "./component/menubar.js";
export { Progress, ProgressProps, ProgressWithHandler, ProgressWithHandlerProps } from "./component/progress.js";
export { Radio, RadioGroup, RadioGroupProps, RadioProps } from "./component/radio-group.js";
export { Slider, SliderProps, SliderThumb, SliderThumbProps } from "./component/slider.js";
export { Table, TableCell, TableCellProps, TableProps, TableRow, TableRowProps, TableSection, TableSectionProps } from "./component/table.js";
export { Tab, TabPanel, TabPanelProps, TabProps, Tabs, TabsProps } from "./component/tabs.js";
export { Toast, ToastProps, Toasts, ToastsProps } from "./component/toasts.js";
export { Toolbar, ToolbarChild, ToolbarChildProps, ToolbarProps } from "./component/toolbar.js";
export { Tooltip, TooltipProps } from "./component/tooltip.js";
export { useDefaultRenderPortal } from "./component/util.js";

export { ParentDepthContext, useDefault } from "./component/util.js";
export { EventDetail, setDebugLogging } from "./props.js";
export type { DisabledType, ElementFromTag, ElementToTag, PickByType, TagSensitiveProps } from "./props.js";

declare module 'preact' {
    /* eslint-disable @typescript-eslint/no-namespace */
    namespace h {
        /* eslint-disable @typescript-eslint/no-namespace */
        namespace JSX {
            /* eslint-disable @typescript-eslint/no-unused-vars */
            interface HTMLAttributes<RefType extends EventTarget = EventTarget> {
                inert?: boolean | SignalLike<boolean | undefined> | undefined;
            }
        }
    }
}
