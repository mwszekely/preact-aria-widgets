
import { createContext, render } from "preact/compat";
import { h } from "preact";
import { useHasFocus, useState } from "preact-prop-helpers";
import { memo } from "preact/compat";
import { useContext } from "preact/compat";
import { EventDetail } from "../props";
import { useAriaAccordion, UseAriaAccordionSection } from "../use-accordion";
import { useAriaCheckbox } from "../use-checkbox";
import { useCheckboxGroup, UseCheckboxGroupChild, UseCheckboxGroupChildInfoBase } from "../use-checkbox-group";
import { useAriaDialog } from "../use-dialog";
import { useAriaListboxMulti, UseListboxMultiItem } from "../use-listbox-multi";
import { useAriaListboxSingle, UseListboxSingleItem, UseListboxSingleItemInfo } from "../use-listbox-single";
import { useAriaMenu, UseMenuChildInfo, UseMenuItem } from "../use-menu";
import { useAriaRadioGroup, UseAriaRadioInfoBase, UseRadio } from "../use-radio-group";
import { useAriaTabs, UseTab, UseTabInfo, UseTabPanel } from "../use-tabs";
import { useAriaTooltip } from "../use-tooltip";

const RandomWords = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".split(" ");

type E = (EventTarget & HTMLInputElement);
type E2 = E["className"]


const UseAccordionSectionContext = createContext<UseAriaAccordionSection<HTMLButtonElement, HTMLDivElement>>(null!);
const DemoUseAccordion = memo(() => {

    const { useAriaAccordionSection } = useAriaAccordion<HTMLButtonElement, HTMLDivElement>({ initialIndex: 0 })

    return (
        <UseAccordionSectionContext.Provider value={useAriaAccordionSection}>
            <div className="demo">
                <div>
                    <DemoAccordionSection index={0} />
                    <DemoAccordionSection index={1} />
                    <DemoAccordionSection index={2} />
                </div>
            </div>
        </UseAccordionSectionContext.Provider>
    )
});

const DemoAccordionSection = memo(({ index }: { index: number }) => {

    const useAccordionSection = useContext(UseAccordionSectionContext);
    const { expanded, useAriaAccordionSectionBodyProps, useAriaAccordionSectionHeaderProps } = useAccordionSection({ info: { index } });

    const p = useAriaAccordionSectionBodyProps({ className: "accordion-section-body", hidden: !expanded });
    p.id;
    return (
        <div className="accordion-section">
            <button {...useAriaAccordionSectionHeaderProps({ className: "accordion-section-header" })}>Header #{index + 1}</button>
            <div {...p}><p>Body content #{index + 1}</p><p>{RandomWords.join(" ")}</p></div>
        </div>
    )
})

const DemoUseCheckbox = memo(() => {

    return (
        <>
            <div className="demo">
                <Checkbox1 />
                <Checkbox2 />
            </div>
            <DemoUseCheckboxGroup />
        </>
    )
});




const Checkbox1 = memo(() => {

    const [checked, setChecked] = useState(false);

    const { useCheckboxInputElement, useCheckboxLabelElement } = useAriaCheckbox<HTMLInputElement, HTMLLabelElement>({ disabled: false, checked, labelPosition: "separate", onInput: e => setChecked(e[EventDetail].checked), tagInput: "input", tagLabel: "label" });
    const { useCheckboxInputElementProps } = useCheckboxInputElement();
    const { useCheckboxLabelElementProps } = useCheckboxLabelElement();

    return (
        <div>
            <input {...useCheckboxInputElementProps({ type: "checkbox", })} />
            <label {...useCheckboxLabelElementProps({})}>Label</label>
        </div>
    )
});

const Checkbox2 = memo(() => {

    const [checked, setChecked] = useState(false);

    const { useCheckboxLabelElement, useCheckboxInputElement } = useAriaCheckbox<HTMLInputElement, HTMLLabelElement>({ disabled: false, labelPosition: "wrapping", onInput: e => setChecked(e[EventDetail].checked), checked, tagInput: "input", tagLabel: "label" });
    const { useCheckboxInputElementProps } = useCheckboxInputElement();
    const { useCheckboxLabelElementProps } = useCheckboxLabelElement();

    return (
        <div>
            <label {...useCheckboxLabelElementProps({})}><input {...useCheckboxInputElementProps({ type: "checkbox" })} /> Label</label>
        </div>
    )
});


const CheckboxGroupContext = createContext<UseCheckboxGroupChild<HTMLInputElement, HTMLLabelElement, string, UseCheckboxGroupChildInfoBase<string>>>(null!);

const DemoUseCheckboxGroup = memo(() => {


    const { useHasFocusProps } = useHasFocus<HTMLDivElement>({})
    const { useCheckboxGroupChild, parentIsChecked: _selfIsChecked, parentPercentChecked: _percentChecked, useCheckboxGroupParentInput } = useCheckboxGroup<HTMLInputElement, HTMLLabelElement, string, UseCheckboxGroupChildInfo>({ initialIndex: 0 });
    //const { useCheckboxInputElement, useCheckboxLabelElement } = useAriaCheckbox<HTMLInputElement, HTMLLabelElement>({ checked: selfIsChecked, disabled: false, labelPosition: "separate", onInput: onCheckboxGroupInput as any, inputTag: "input", labelTag: "label" });

    const { useCheckboxGroupParentInputProps, useCheckboxGroupParentLabelProps } = useCheckboxGroupParentInput({ tagInput: "input", tagLabel: "label", disabled: false, labelPosition: "separate" })

    return <div class="demo">
        <CheckboxGroupContext.Provider value={useCheckboxGroupChild}>
            <div>
                <input {...useCheckboxGroupParentInputProps({})} />
                <label {...useCheckboxGroupParentLabelProps({})}>All checked?</label>
            </div>
            <div {...useHasFocusProps({ style: { "display": "flex", "flexDirection": "column" } })} >

                {Array.from((function* () {
                    for (let i = 0; i < 10; ++i) {

                        yield <DemoUseCheckboxGroupChild key={i} index={i} />
                    }
                })())}
            </div>
        </CheckboxGroupContext.Provider>
    </div>
});


const DemoUseCheckboxGroupChild = memo(({ index }: { index: number }) => {
    const [checked, setChecked, _getChecked] = useState(false);
    const useCheckboxGroupChild = useContext(CheckboxGroupContext);
    let text = `Number ${index + 1} checkbox ${checked ? "(checked)" : ""}`;

    const {
        tabbable,
        useCheckboxGroupChildInputProps,
        useCheckboxGroupChildLabelProps
    } = useCheckboxGroupChild({
        onInput: e => setChecked(e[EventDetail].checked),
        info: {
            index,
            text,
            flags: {},
        },
        checked,
        disabled: false,
        tagInput: "input",
        tagLabel: "label",
        labelPosition: "separate"
    });
    text = `Number ${index + 1} checkbox ${checked ? "(checked)" : ""} ${tabbable ? "(tabbble)" : ""}`;
    //const { useCheckboxInputElement, useCheckboxLabelElement } = useAriaCheckbox<HTMLInputElement, HTMLLabelElement>({ checked, disabled: false, labelPosition: "separate", onInput: e => { setChecked(e[EventDetail].checked); }, inputTag: "input", labelTag: "label" });

    return (<div>
        <input {...useCheckboxGroupChildInputProps({})} />
        <label {...useCheckboxGroupChildLabelProps({})}>{text}</label>
    </div>
    );
});


const DemoUseDialog = memo(() => {
    const onClose = (() => setOpen(false));
    const [open, setOpen] = useState(false);

    const { useDialogBackdrop, useDialogBody, useDialogProps, useDialogTitle } = useAriaDialog<HTMLDivElement, HTMLDivElement, HTMLDivElement, HTMLDivElement>({ open, onClose: () => { onClose(); } });
    const { useDialogBackdropProps } = useDialogBackdrop();
    const { useDialogBodyProps } = useDialogBody({ descriptive: true });
    const { useDialogTitleProps } = useDialogTitle();
    return (
        <div class="demo">
            <label><input type="checkbox" checked={open} onInput={e => { e.preventDefault(); setOpen(e.currentTarget.checked) }} /></label>
            <div {...useDialogBackdropProps({ hidden: !open })}>
                <div {...useDialogProps({})}>
                    <div {...useDialogTitleProps({})}>Dialog Title</div>
                    <div {...useDialogBodyProps({})}>
                        <p tabIndex={-1}>Dialog body content</p>
                        <p>{RandomWords.join(" ")}</p>
                        <p>{RandomWords.join(" ")}</p>
                        <p>{RandomWords.join(" ")}</p>
                        <p><button onClick={onClose}>Close</button></p>
                    </div>
                </div>
            </div>
        </div>
    )
});

const RadioWrapContext = createContext(false);
const RadioContext = createContext<UseRadio<number, HTMLInputElement, HTMLLabelElement, UseAriaRadioInfoBase>>(null!);
const DemoUseRadioGroup = memo(() => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [wrap, setWrap] = useState(useContext(RadioWrapContext));
    const { useRadio, useRadioGroupProps } = useAriaRadioGroup<number, HTMLDivElement, HTMLLabelElement, HTMLInputElement, HTMLLabelElement, UseAriaRadioInfoBase>({
        name: "radio-demo-1",
        onInput: (e) => setSelectedIndex(+e[EventDetail].selectedValue),
        selectedValue: selectedIndex,
        tagGroupLabel: "label",
        tagGroup: "div",

    });


    return <div class="demo">
        <label><input type="checkbox" checked={wrap} onInput={e => setWrap(w => !w)} /> Wrapper label</label>
        <RadioWrapContext.Provider key={wrap} value={wrap}>
            <RadioContext.Provider value={useRadio}>
                <div {...useRadioGroupProps({})}>
                    {Array.from((function* () {
                        for (let i = 0; i < 10; ++i) {
                            yield <DemoRadio key={i} index={i} />
                        }
                    })())}
                </div>
            </RadioContext.Provider>
        </RadioWrapContext.Provider>
    </div>
});



const DemoRadio = memo(({ index }: { index: number }) => {
    const wrap = useContext(RadioWrapContext);
    const { useRadioInput, useRadioLabel, checked, tabbable } = useContext(RadioContext)({ info: { index, text: "", flags: {} }, value: index, disabled: false, labelPosition: wrap ? "wrapping" : "separate", tagInput: "input", tagLabel: "label" });
    const { useRadioInputProps } = useRadioInput({ tag: "input" });
    const { useRadioLabelProps } = useRadioLabel({ tag: "label" });
    if (wrap)
        return <label {...useRadioLabelProps({})}><input {...useRadioInputProps({})} />Number {index + 1} radio{checked ? " (checked)" : ""}{tabbable ? " (tabbable)" : ""}</label>;
    else
        return <div><input {...useRadioInputProps({})} />Number {index + 1} radio{checked ? " (checked)" : ""}{tabbable ? " (tabbable)" : ""}<label {...useRadioLabelProps({})}></label></div>;
});


const ListBoxSingleItemContext = createContext<UseListboxSingleItem<HTMLLIElement, string, UseListboxSingleItemInfo<HTMLLIElement, string>>>(null!);
const DemoUseListboxSingle = memo(() => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const {
        useListboxSingleItem,
        useListboxSingleLabel,
        useListboxSingleProps
    } = useAriaListboxSingle<HTMLLabelElement, HTMLUListElement, HTMLLIElement, string, UseListboxSingleItemInfo<HTMLLIElement, string>>({
        selectedIndex,
        onSelect: e => setSelectedIndex(e[EventDetail].selectedIndex), selectionMode: "activate", tagLabel: "label", tagList: "ul"
    });

    const { useListboxSingleLabelProps } = useListboxSingleLabel()

    return <div class="demo">
        <ListBoxSingleItemContext.Provider value={useListboxSingleItem}>
            <label {...useListboxSingleLabelProps({})}>Demo Single-Select Listbox</label>
            <ul {...useListboxSingleProps({})}>
                {Array.from((function* () {
                    for (let i = 0; i < 10; ++i) {
                        yield <DemoListboxSingleOption key={i} index={i} />
                    }
                })())}
            </ul>
        </ListBoxSingleItemContext.Provider>
    </div>
});



const DemoListboxSingleOption = memo(({ index }: { index: number, }) => {
    const { selected, tabbable, useListboxSingleItemProps } = useContext(ListBoxSingleItemContext)({ index, text: `Number ${index + 1} option`, flags: {} });
    return <li {...useListboxSingleItemProps({})}>Number {index + 1} option{selected ? " (selected)" : ""}{tabbable ? " (tabbable)" : ""}</li>
});





const ListBoxMultiItemContext = createContext<UseListboxMultiItem<HTMLLIElement>>(null!);
const DemoUseListboxMulti = memo(() => {

    const { useListboxMultiItem, useListboxMultiLabel, useListboxMultiProps, currentTypeahead } = useAriaListboxMulti<HTMLLabelElement, HTMLUListElement, HTMLLIElement, string, UseListboxMultiItemInfo<HTMLLIElement>>({ initialIndex: 0, labelTag: "label", listTag: "ul" });
    const { useListboxMultiLabelProps } = useListboxMultiLabel();

    return <div class="demo">
        <ListBoxMultiItemContext.Provider value={useListboxMultiItem}>
            <label {...useListboxMultiLabelProps({})}>Demo Multi-Select Listbox</label>
            <ul {...useListboxMultiProps({})}>
                {Array.from((function* () {
                    for (let i = 0; i < 10; ++i) {

                        yield <DemoListboxMultiOption key={i} index={i} />
                    }
                })())}
            </ul>
            {currentTypeahead != null && <p>{currentTypeahead}</p>}
        </ListBoxMultiItemContext.Provider>
    </div>
});

const MenuItemContext = createContext<UseMenuItem<HTMLLIElement, UseMenuChildInfo>>(null!);
const DemoListboxMultiOption = memo(({ index }: { index: number }) => {
    const [selected, setSelected] = useState(false);
    let text = `Number ${index + 1} option${selected ? " (selected)" : ""}`;
    const { tabbable, useListboxMultiItemProps } = useContext(ListBoxMultiItemContext)({ tag: "li", index, text, onSelect: e => setSelected(e[EventDetail].selected), selected, flags: {} });
    text = `Number ${index + 1} option${selected ? " (selected)" : ""}${tabbable ? " (tabbable)" : ""}`;
    return <li {...useListboxMultiItemProps({})}>{text}</li>
});

const DemoMenu = memo(() => {
    const [open, setOpen] = useState(false);
    const onClose = () => setOpen(false);
    const onOpen = () => setOpen(true);
    const { useHasFocusProps, getFocusedInner: _getMenuFocusedInner } = useHasFocus<HTMLUListElement>({})

    const { useMenuButtonProps, useMenuItem, useMenuProps } = useAriaMenu<HTMLUListElement, HTMLLIElement, string, UseMenuChildInfo>({ open, onClose, onOpen, initialIndex: 0 });

    return (
        <div class="demo">
            <MenuItemContext.Provider value={useMenuItem}>
                <button {...useMenuButtonProps({})}>Open menu</button>
                <ul {...useMenuProps(useHasFocusProps({}))} hidden={!open}>
                    <DemoMenuItem index={0} />
                    <DemoMenuItem index={1} />
                    <DemoMenuItem index={2} />
                </ul>
            </MenuItemContext.Provider>

        </div>
    )
});

const DemoMenuItem = memo(({ index }: { index: number }) => {
    const useAriaMenuItem = useContext(MenuItemContext);
    const { useMenuItemProps } = useAriaMenuItem({ info: { index, text: `Item ${index + 1}`, flags: {} } });
    return <li {...useMenuItemProps({})}>Item {index + 1}</li>
})

const TabContext = createContext<UseTab<HTMLLIElement>>(null!);
const TabPanelContext = createContext<UseTabPanel<HTMLParagraphElement>>(null!);
const DemoTabs = memo(() => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectionMode, setSelectionMode] = useState<"focus" | "activate">("focus");

    const {
        useTab,
        useTabPanel,
        useTabsLabelProps,
        useTabsListProps
    } = useAriaTabs<HTMLUListElement, HTMLLIElement, HTMLParagraphElement, HTMLLabelElement, string, UseTabInfo<HTMLUListElement, string>>({
        onSelect: e => setSelectedIndex(e[EventDetail].selectedIndex),
        selectedIndex,
        selectionMode,
        orientation: "block",
        initialIndex: 0
    });


    return (
        <TabContext.Provider value={useTab} >
            <TabPanelContext.Provider value={useTabPanel} >
                <div class="demo">
                    <label><input type="checkbox" checked={selectionMode == "focus"} onInput={(e) => { e.preventDefault(); setSelectionMode(e.currentTarget.checked ? "focus" : "activate") }} /> Activate on focus?</label>
                    <label {...useTabsLabelProps({})}>Tabs</label>
                    <ul {...useTabsListProps({})}><DemoTab index={0} /><DemoTab index={1} /><DemoTab index={2} /><DemoTab index={3} /><DemoTab index={4} /></ul>
                    <div><DemoTabPanel index={0} /><DemoTabPanel index={1} /><DemoTabPanel index={2} /><DemoTabPanel index={3} /><DemoTabPanel index={4} /></div>
                </div>
            </TabPanelContext.Provider>
        </TabContext.Provider>
    )
});

const DemoTab = memo(({ index }: { index: number }) => {
    const useTabSet = useContext(TabContext);
    const { useTabProps, selected, getSelected, tabbable, getElement } = useTabSet({ index, text: "", flags: {} })

    return (<>
        <li {...useTabProps({})}>Tab #{index + 1} ({`Selected: ${selected}`})</li>
    </>)
});

const DemoTabPanel = memo(({ index }: { index: number }) => {
    const useTabPanel = useContext(TabPanelContext);
    const { useTabPanelProps, visible } = useTabPanel({ index })

    return (
        <div {...useTabPanelProps({ hidden: !visible })}>
            <p>Tab panel content #{index + 1} ({`Selected: ${visible}`}).</p>
            <p>{RandomWords.slice(0, Math.floor(RandomWords.length / (index + 1))).join(" ")}</p>
        </div>
    )
});

const DemoTooltip = memo(() => {
    const { useTooltip, useTooltipTrigger, isOpen } = useAriaTooltip<HTMLSpanElement, HTMLSpanElement>({});
    const { useTooltipProps } = useTooltip();
    const { useTooltipTriggerProps } = useTooltipTrigger();
    return (
        <div class="demo">
            <p>This is a paragraph with a <span {...useTooltipTriggerProps({})}>tooltip right here.</span><span {...useTooltipProps({ hidden: !isOpen })}>This is the tooltip content.</span></p>
        </div>
    )
});

/*
const DemoTable = memo(() => {

    const { useTableBody, useTableFoot, useTableHead, useTableProps, useTableRow } = useTable<
        HTMLTableElement, HTMLTableSectionElement, HTMLTableSectionElement, HTMLTableSectionElement, HTMLTableRowElement, HTMLTableCellElement, HTMLTableCellElement>({});

    const { useTableHeadProps } = useTableHead({});
    const { useTableBodyProps } = useTableBody({});

    const rows: VNode<any>[] = Array.from(function* () {
        for (let i = 0; i < 10; ++i) {
            yield <TableRow rowIndex={i + 1} />;
        }
    }());


    return (
        <TableRowContext.Provider value={useTableRow}>
            <table {...useTableProps({})}>
                <thead {...useTableHeadProps({ children: [<TableHeaderRow rowIndex={0} />] })} />
                <tbody {...useTableBodyProps({ children: rows })} />
            </table>
        </TableRowContext.Provider>
    )

});

const TableRowContext = createContext<UseTableRow<HTMLTableRowElement, HTMLTableCellElement, HTMLTableCellElement>>(null!);


const TableRow = memo(function TableRow({ rowIndex }: { rowIndex: number }) {
    const i = rowIndex - 1;
    const useTableRow = useContext(TableRowContext);
    const { rowIndexAsSorted, rowIndexAsUnsorted, useTableCell, useTableRowProps } = useTableRow({ rowIndex, location: "body" });
    const date = new Date(new Date().getFullYear(), new Date().getMonth(), (i * 7) ** 2);

    const { useTableCellProps: useTableCellProps1, useTableCellDelegateProps: useTableCellDelegateProps1 } = useTableCell({ columnIndex: 0, value: i });
    const { useTableCellProps: useTableCellProps2, useTableCellDelegateProps: useTableCellDelegateProps2 } = useTableCell({ columnIndex: 1, value: RandomWords[i] });
    const { useTableCellProps: useTableCellProps3, useTableCellDelegateProps: useTableCellDelegateProps3 } = useTableCell({ columnIndex: 2, value: date });
    return (
        <tr {...useTableRowProps({ "data-index": rowIndex } as {})}>
            <td {...useTableCellProps1(useTableCellDelegateProps1({}))}>{i}</td>
            <td {...useTableCellProps2(useTableCellDelegateProps2({}))}>{RandomWords[i]}</td>
            <td {...useTableCellProps3(useTableCellDelegateProps3({}))}>{date.toLocaleDateString()}</td>
        </tr>
    )
})


const TableHeaderRow = memo(function TableHeaderRow({ rowIndex }: { rowIndex: number }) {
    const useTableRow = useContext(TableRowContext);
    const { useTableHeadCell, useTableRowProps: useTableHeadRowProps } = useTableRow({ rowIndex, location: "head" });
    const { useTableHeadCellProps: useTableHeadCellProps1, useTableHeadCellDelegateProps: useTableHeadCellDelegateProps1, sortDirection: sortDirection1 } = useTableHeadCell({ tag: "th", columnIndex: 0 });
    const { useTableHeadCellProps: useTableHeadCellProps2, useTableHeadCellDelegateProps: useTableHeadCellDelegateProps2, sortDirection: sortDirection2 } = useTableHeadCell({ tag: "th", columnIndex: 1 });
    const { useTableHeadCellProps: useTableHeadCellProps3, useTableHeadCellDelegateProps: useTableHeadCellDelegateProps3, sortDirection: sortDirection3 } = useTableHeadCell({ tag: "th", columnIndex: 2 });


    return (<tr {...useTableHeadRowProps({ "data-index": rowIndex } as {})}>
        <th {...useTableHeadCellProps1(useTableHeadCellDelegateProps1({}))}>Number {sortDirection1}</th>
        <th {...useTableHeadCellProps2(useTableHeadCellDelegateProps2({}))}>String {sortDirection2}</th>
        <th {...useTableHeadCellProps3(useTableHeadCellDelegateProps3({}))}>Date {sortDirection3}</th>
    </tr>)
})*/

const Component = () => {
    return <div class="flex" style={{ flexWrap: "wrap" }}>
        <DemoUseAccordion />
        <DemoUseListboxSingle />
        <DemoUseListboxMulti /><DemoTooltip />
        <DemoTabs />
        <DemoUseCheckbox />
        <DemoUseRadioGroup />
        <DemoUseDialog />
        <DemoMenu />
        {/*
       
        <DemoTable />


        <DemoUseFocusTrap />
        <DemoUseDroppable />
        <DemoUseDraggable />
        <input />*/}
    </div>
}

requestAnimationFrame(() => {
    render(<Component />, document.getElementById("root")!);
})
