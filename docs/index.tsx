
import { createContext, Fragment, h, render, VNode } from "preact";
import { useAnimationFrame, useDraggable, useDroppable, useElementSize, useFocusTrap, useHasFocus, useMergedProps, useRandomId, useState } from "preact-prop-helpers";
import { forwardRef, memo } from "preact/compat";
import { useCallback, useContext, useRef } from "preact/hooks";
import { EventDetail } from "../props";
import { useAriaAccordion, UseAriaAccordionSection } from "../use-accordion";
import { useAriaCheckbox } from "../use-checkbox";
import { CheckboxGroupChangeEvent, useCheckboxGroup, UseCheckboxGroupChild, UseCheckboxGroupChildInfo } from "../use-checkbox-group";
import { useAriaDialog } from "../use-dialog";
import { useAriaListboxMulti, UseListboxMultiItem, UseListboxMultiItemInfo } from "../use-listbox-multi";
import { useAriaListboxSingle, UseListboxSingleItem, UseListboxSingleItemInfo } from "../use-listbox-single";
import { useAriaMenu, UseMenuItem } from "../use-menu";
import { useTable, UseTableRow } from "../use-table";
import { useAriaTabs, UseTab, UseTabPanel } from "../use-tabs";
import { useAriaTooltip } from "../use-tooltip";
import { DemoUseInterval } from "./demos/use-interval";
import { DemoUseRovingTabIndex } from "./demos/use-roving-tab-index";
import { DemoUseTimeout } from "./demos/use-timeout";

const RandomWords = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".split(" ");

type E = (EventTarget & HTMLInputElement);
type E2 = E["className"]


const DemoUseDroppable = () => {
    const { droppedFiles, droppedStrings, filesForConsideration, stringsForConsideration, useDroppableProps, dropError } = useDroppable<HTMLDivElement>({ effect: "copy" });

    const { ref } = useMergedProps<HTMLInputElement>()({}, { ref: useRef<HTMLInputElement>(null!) })

    const p = useDroppableProps({ className: "demo droppable" });

    const r = p.ref;

    return (
        <div {...p}>

            {droppedStrings != null && <div>Data dropped: <ul>{(Object.entries(droppedStrings) as [keyof typeof stringsForConsideration, string][]).map(([type, value]) => <li>{type}: {value}</li>)}</ul></div>}
            {droppedFiles != null && <div>Files dropped: <table>
                <thead><tr><th>Name</th><th>Size</th><th>Type</th><th>Last modified</th></tr></thead>
                <tbody>{droppedFiles.map(f => <tr><td>{f.name}</td>{f.data.byteLength}<td>{f.type}</td><td>{new Date(f.lastModified ?? 0)}</td></tr>)}</tbody>
            </table></div>}
            <hr />

            {stringsForConsideration != null && <div>Data being considered: <ul>{Array.from(stringsForConsideration).map(type => <li>{type}</li>)}</ul></div>}
            {filesForConsideration != null && <div>Files being considered: <ul>{filesForConsideration.map(f => <li>{JSON.stringify(f)}</li>)}</ul></div>}

            <hr />
            {dropError && <div>{dropError instanceof Error ? dropError.message : JSON.stringify(dropError)}</div>}
        </div>
    )
}

const DemoUseDraggable = () => {
    const { dragging, useDraggableProps, lastDropEffect, getLastDropEffect, getDragging } = useDraggable<HTMLDivElement>({ data: { "text/plain": "This is custom draggable content of type text/plain." } });


    return (
        <div {...useDraggableProps({ className: "demo" })}>
            Draggable content
        </div>)
}


const DemoUseFocusTrap = memo(({ depth }: { depth?: number }) => {

    const [active, setActive] = useState(false);

    const { useFocusTrapProps } = useFocusTrap<HTMLDivElement>({ trapActive: active });

    const divProps = useFocusTrapProps({ ref: undefined, className: "focus-trap-demo" });
    if (depth == 2)
        return <div />;

    return (
        <div className="demo">
            <label>Active: <input type="checkbox" checked={active} onInput={e => { e.preventDefault(); setActive(e.currentTarget.checked); }} /></label>
            <div {...divProps} >
                <DemoUseFocusTrapChild active={active} setActive={setActive} depth={depth ?? 0} />
            </div>
        </div>
    );
});


const DemoUseFocusTrapChild = memo(({ setActive, active, depth }: { active: boolean, setActive: (active: boolean) => void, depth: number }) => {


    return (
        <>
            <button>Button 1</button>
            <button>Button 2</button>
            <button>Button 3</button>
            <label>Active: <input type="checkbox" checked={active} onInput={e => { e.preventDefault(); setActive(e.currentTarget.checked); }} /></label>

        </>
    );
});

const UseAccordionSectionContext = createContext<UseAriaAccordionSection<HTMLButtonElement>>(null!);
const DemoUseAccordion = memo(() => {

    const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

    const { useAriaAccordionSection } = useAriaAccordion<HTMLDivElement, HTMLButtonElement>({ expandedIndex, setExpandedIndex })

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
    const { expanded, useAriaAccordionSectionBody, useAriaAccordionSectionHeader } = useAccordionSection({ index });

    const { useAriaAccordionSectionBodyProps } = useAriaAccordionSectionBody<HTMLDivElement>();
    const { useAriaAccordionSectionHeaderProps } = useAriaAccordionSectionHeader({ tag: "button" });

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

    const { useCheckboxInputElement, useCheckboxLabelElement } = useAriaCheckbox<HTMLInputElement, HTMLLabelElement>({ disabled: false, checked, labelPosition: "separate", onInput: e => setChecked(e[EventDetail].checked) });
    const { useCheckboxInputElementProps } = useCheckboxInputElement({ tag: "input" });
    const { useCheckboxLabelElementProps } = useCheckboxLabelElement({ tag: "label" });

    return (
        <div>
            <input {...useCheckboxInputElementProps({ type: "checkbox", })} />
            <label {...useCheckboxLabelElementProps({})}>Label</label>
        </div>
    )
});

const Checkbox2 = memo(() => {

    const [checked, setChecked] = useState(false);

    const { useCheckboxLabelElement, useCheckboxInputElement } = useAriaCheckbox<HTMLInputElement, HTMLLabelElement>({ disabled: false, labelPosition: "wrapping", onInput: e => setChecked(e[EventDetail].checked), checked });
    const { useCheckboxInputElementProps } = useCheckboxInputElement({ tag: "input" });
    const { useCheckboxLabelElementProps } = useCheckboxLabelElement({ tag: "label" });

    return (
        <div>
            <label {...useCheckboxLabelElementProps({})}><input {...useCheckboxInputElementProps({ type: "checkbox" })} /> Label</label>
        </div>
    )
});


const CheckboxGroupContext = createContext<UseCheckboxGroupChild<HTMLInputElement, UseCheckboxGroupChildInfo>>(null!);

const DemoUseCheckboxGroup = memo(() => {

    const onUpdateChildren = (event: CheckboxGroupChangeEvent<h.JSX.TargetedEvent<HTMLInputElement>>): void => {
        const value = event[EventDetail].childrenChecked;
        let selectedValues = new Set<number>();
        for (let i = 0; i < 10; ++i) {
            if (value === false) { /* Do nothing */ }
            else if (value === true)
                selectedValues.add(i);
            else if (value.get(i) === true)
                selectedValues.add(i);

        }

        setSelectedValues(selectedValues);
    };


    const [focusedInner, setFocusedInner, getFocusedInner] = useState(false);
    const { useHasFocusProps } = useHasFocus<HTMLDivElement>({ setFocusedInner })
    const { useCheckboxGroupParentProps: useCheckboxGroupCheckboxProps, useCheckboxGroupChild, getParentIsChecked: getSelfIsChecked, parentPercentChecked: percentChecked, onCheckboxGroupParentInput: onCheckboxGroupInput } = useCheckboxGroup<HTMLInputElement, UseCheckboxGroupChildInfo>({ shouldFocusOnChange: getFocusedInner, onUpdateChildren });
    const { useCheckboxInputElement, useCheckboxLabelElement } = useAriaCheckbox<HTMLInputElement, HTMLLabelElement>({ checked: getSelfIsChecked(), disabled: false, labelPosition: "separate", onInput: onCheckboxGroupInput as any });

    const { useCheckboxInputElementProps } = useCheckboxInputElement({ tag: "input" });
    const { useCheckboxLabelElementProps } = useCheckboxLabelElement({ tag: "label" });
    const [selectedValues, setSelectedValues] = useState<Set<number>>(new Set());


    return <div class="demo">
        <CheckboxGroupContext.Provider value={useCheckboxGroupChild}>
            <div>
                <input {...useCheckboxInputElementProps(useCheckboxGroupCheckboxProps({}))} />
                <label {...useCheckboxLabelElementProps({})}>All checked?</label>
            </div>
            <div {...useHasFocusProps({ style: { "display": "flex", "flexDirection": "column" } })} >

                {Array.from((function* () {
                    for (let i = 0; i < 10; ++i) {
                        function setSelected2(selected: boolean) {

                            setSelectedValues(selectedValues => {
                                let next = new Set(selectedValues);

                                if (selected && !next.has(i)) {
                                    next.add(i);
                                    return next;
                                }
                                else if (!selected && next.has(i)) {
                                    next.delete(i);
                                    return next;
                                }

                                return selectedValues;
                            });

                        }

                        yield <DemoUseCheckboxGroupChild key={i} index={i} checked={!!selectedValues.has(i)} setChecked={setSelected2} />
                    }
                })())}
            </div>
        </CheckboxGroupContext.Provider>
    </div>
});


const DemoUseCheckboxGroupChild = memo(({ index, checked, setChecked }: { index: number, checked: boolean | "mixed", setChecked(selected: boolean | "mixed"): void }) => {
    const { randomId } = useRandomId();
    const useCheckboxGroupChild = useContext(CheckboxGroupContext);
    let text = `Number ${index + 1} checkbox ${checked ? "(checked)" : ""}`;
    const { tabbable, useCheckboxGroupChildProps } = useCheckboxGroupChild({ index, text, checked, id: randomId });
    text = `Number ${index + 1} checkbox ${checked ? "(checked)" : ""} ${tabbable ? "(tabbble)" : ""}`;
    const { useCheckboxInputElement, useCheckboxLabelElement } = useAriaCheckbox<HTMLInputElement, HTMLLabelElement>({ checked, disabled: false, labelPosition: "separate", onInput: e => {setChecked(e[EventDetail].checked); } });

    const { useCheckboxInputElementProps } = useCheckboxInputElement({ tag: "input" });
    const { useCheckboxLabelElementProps } = useCheckboxLabelElement({ tag: "label" });

    return (<div>
        <input {...useCheckboxInputElementProps(useCheckboxGroupChildProps({}))} />
        <label {...useCheckboxLabelElementProps({})}>{text}</label>
    </div>
    );
});


const DemoUseDialog = memo(() => {
    const onClose = (() => setOpen(false));
    const [open, setOpen] = useState(false);

    const { useDialogBackdrop, useDialogBody, useDialogProps, useDialogTitle } = useAriaDialog<HTMLDivElement>({ open, onClose });
    const { useDialogBackdropProps } = useDialogBackdrop<HTMLDivElement>();
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

const ListBoxSingleItemContext = createContext<UseListboxSingleItem<HTMLLIElement>>(null!);
const DemoUseListboxSingle = memo(() => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const { useListboxSingleItem, useListboxSingleLabel, useListboxSingleProps } = useAriaListboxSingle<HTMLUListElement, HTMLLIElement, UseListboxSingleItemInfo<HTMLLIElement>>({ selectedIndex, onSelect: e => setSelectedIndex(e[EventDetail].selectedIndex), selectionMode: "activate" });


    return <div class="demo">
        <ListBoxSingleItemContext.Provider value={useListboxSingleItem}>
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
    const { getSelected, selected, tabbable, useListboxSingleItemProps } = useContext(ListBoxSingleItemContext)({ index, text: null, tag: "li" });
    return <li {...useListboxSingleItemProps({})}>Number {index + 1} option{selected ? " (selected)" : ""}{tabbable ? " (tabbable)" : ""}</li>
});





const ListBoxMultiItemContext = createContext<UseListboxMultiItem<HTMLLIElement>>(null!);
const DemoUseListboxMulti = memo(() => {

    const { useListboxMultiItem, useListboxMultiLabel, useListboxMultiProps, currentTypeahead } = useAriaListboxMulti<HTMLUListElement, HTMLLIElement, UseListboxMultiItemInfo<HTMLLIElement>>({});

    const [selectedValues, setSelectedValues] = useState<Set<number>>(new Set());


    return <div class="demo">
        <ListBoxMultiItemContext.Provider value={useListboxMultiItem}>
            <ul {...useListboxMultiProps({})}>
                {Array.from((function* () {
                    for (let i = 0; i < 10; ++i) {
                        function setSelected2(selected: boolean) {

                            setSelectedValues(selectedValues => {
                                let next = new Set(selectedValues);

                                if (selected && !next.has(i)) {
                                    next.add(i);
                                    return next;
                                }
                                else if (!selected && next.has(i)) {
                                    next.delete(i);
                                    return next;
                                }

                                return selectedValues;
                            });

                        }

                        yield <DemoListboxMultiOption key={i} index={i} selected={!!selectedValues.has(i)} setSelected={setSelected2} />
                    }
                })())}
            </ul>
            {currentTypeahead != null && <p>{currentTypeahead}</p>}
        </ListBoxMultiItemContext.Provider>
    </div>
});

const MenuItemContext = createContext<UseMenuItem<HTMLLIElement>>(null!);
const DemoListboxMultiOption = memo(({ index, selected, setSelected }: { index: number, selected: boolean, setSelected(selected: boolean): void }) => {
    let text = `Number ${index + 1} option${selected ? " (selected)" : ""}`;
    const { tabbable, useListboxMultiItemProps } = useContext(ListBoxMultiItemContext)({ tag: "li", index, text, onSelect: e => setSelected(e[EventDetail].selected), selected });
    text = `Number ${index + 1} option${selected ? " (selected)" : ""}${tabbable ? " (tabbable)" : ""}`;
    return <li {...useListboxMultiItemProps({})}>{text}</li>
});

const DemoMenu = memo(() => {
    const [open, setOpen] = useState(false);
    const onClose = () => setOpen(false);
    const onOpen = () => setOpen(true);

    const { useMenuButton, useMenuItem, useMenuItemCheckbox, useMenuProps, useMenuSubmenuItem } = useAriaMenu<HTMLUListElement, HTMLLIElement>({ open, onClose, onOpen });

    const { useMenuButtonProps } = useMenuButton<HTMLButtonElement>({ tag: "button" })
    return (
        <div class="demo">
            <MenuItemContext.Provider value={useMenuItem}>
                <button {...useMenuButtonProps({ onClick: e => setOpen(open => !open) })}>Open menu</button>
                <ul {...useMenuProps({})} hidden={!open}>
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
    const { useMenuItemProps } = useAriaMenuItem({ index, text: null });
    return <li {...useMenuItemProps({})}>Item {index + 1}</li>
})

const TabContext = createContext<UseTab<HTMLLIElement>>(null!);
const TabPanelContext = createContext<UseTabPanel<HTMLParagraphElement>>(null!);
const DemoTabs = memo(() => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectionMode, setSelectionMode] = useState<"focus" | "activate">("focus");

    const { useTabPanel, useTabsLabel, useTab, useTabsList } = useAriaTabs<HTMLUListElement, HTMLLIElement, HTMLParagraphElement>({ onSelect: e => setSelectedIndex(e[EventDetail].selectedIndex), selectedIndex, selectionMode, orientation: "block" });

    const { useTabListProps } = useTabsList();

    return (
        <TabContext.Provider value={useTab} >
            <TabPanelContext.Provider value={useTabPanel} >
                <div class="demo">
                    <label><input type="checkbox" checked={selectionMode == "focus"} onInput={(e) => { e.preventDefault(); setSelectionMode(e.currentTarget.checked ? "focus" : "activate") }} /> Activate on focus?</label>

                    <ul {...useTabListProps({})}><DemoTab index={0} /><DemoTab index={1} /><DemoTab index={2} /><DemoTab index={3} /><DemoTab index={4} /></ul>
                    <div><DemoTabPanel index={0} /><DemoTabPanel index={1} /><DemoTabPanel index={2} /><DemoTabPanel index={3} /><DemoTabPanel index={4} /></div>
                </div>
            </TabPanelContext.Provider>
        </TabContext.Provider>
    )
});

const DemoTab = memo(({ index }: { index: number }) => {
    const useTab = useContext(TabContext);
    const { useTabProps } = useTab({ index, text: null, tag: "li" })

    return (<>
        <li {...useTabProps({})}>Tab #{index + 1}</li>
    </>)
});

const DemoTabPanel = memo(({ index }: { index: number }) => {
    const useTabPanel = useContext(TabPanelContext);
    const { useTabPanelProps, selected } = useTabPanel({ index })

    return (
        <div {...useTabPanelProps({ hidden: !selected })}>
            <p>Tab panel content #{index + 1}.</p>
            <p>{RandomWords.slice(0, Math.floor(RandomWords.length / (index + 1))).join(" ")}</p>
        </div>
    )
});

const DemoTooltip = memo(() => {
    const { useTooltip, useTooltipTrigger, isOpen } = useAriaTooltip({});
    const { useTooltipProps } = useTooltip<HTMLSpanElement>();
    const { useTooltipTriggerProps } = useTooltipTrigger<HTMLSpanElement>();
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
        <DemoTooltip />
        {/*<DemoTable />*/}
        <DemoTabs />
        <DemoUseTimeout />
        <DemoUseInterval />
        <DemoMenu />
        <DemoUseListboxSingle />
        <DemoUseListboxMulti />
        <DemoUseCheckbox />
        <DemoUseAccordion />
        <DemoUseDialog />
        <DemoUseRovingTabIndex />


        <DemoUseFocusTrap />
        <DemoUseDroppable />
        <DemoUseDraggable />
        <input />
    </div>
}

requestAnimationFrame(() => {
    render(<Component />, document.getElementById("root")!);
})
