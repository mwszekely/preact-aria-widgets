
import { h } from "preact";
import { returnZero, useMergedProps, useStableGetter, useState } from "preact-prop-helpers";
import { useRef } from "preact/compat";
import { useCallback } from "preact/hooks";
import { Table, TableCell, TableRow, TableSection } from "../../dist/index.js";

export function Blurb() {
    return (
        <>
            <p>This is an implementation of an interactive data table that complies with <a href="https://www.w3.org/WAI/ARIA/apg/patterns/table/">the ARIA guidelines for Table patterns</a>.</p>
            <ul>
                <li>In terms of keyboard navigation and tabbing through elements, a Table is considered a <strong>single</strong> tab stop; in other words, no matter how many cells there are in a table (including if the cells contain interactive elements), it only takes one press of the Tab button to go through it.
                    <ul>
                        <li>Pressing the arrow keys navigates through the cells of the Table. You can override each cell's <code>focusSelf</code> prop to handle child elements.</li>
                        <li>Most other rules of list navigation apply (as in Listboxes), but in two dimensions.</li>
                    </ul>
                </li>
                <li>The body rows are sortable via each cell's <code>value</code> prop. As a result of this, each row must be a <em>direct</em> child of the body, like as a normal array of children with no intervening JSX.</li>
            </ul>
            <p><strong>Things <em>not</em> handled:</strong></p>
            <ul>
                <li>If you don't need all the sorting and focus management and such, there's no reason not to just use the good old <code>&lt;table&gt;</code> element.</li>
                <li>It's up to you to make sure that any interactive elements within a table cell respond to focus management properly with the aforementioned <code>focusSelf</code> prop and a properly placed <code>tabIndex={"{"}info.rovingTabIndex.tabbable? 0 : -1{"}"}</code> in the <code>render</code> prop.</li>
            </ul>
        </>
    )
}

export function Code() {
    return (<code>{``}</code>)
}


function DemoInput({ index }: { index: number }) {
    const [v, setV] = useState("");

    return (
        <TableCell<HTMLTableCellElement> /*getSortValue={() => v}*/
            focusSelf={e => { e.focus() }}
            tagTableCell="td"
            index={index}
            getSortValue={useStableGetter(v)}
            render={info => {
                return (
                    <td {...info.propsCell}>
                        <input {...info.propsFocus} type="text" onInput={useCallback((e: h.JSX.TargetedEvent<HTMLInputElement>) => {
                            setV(e.currentTarget.value);
                            e.preventDefault();
                        }, [])} value={v} />
                    </td>
                )
                /*
    
                tagTableCell: "td", makePropsTableCell: (info) => ({
                    children: <DemoInput tabbable={info.rovingTabIndex.tabbable} />
    
                })
    
                */
            }} />
    )
    /*
    return (
        <input {...props} type="text" tabIndex={tabbable ? 0 : -1} onInput={useCallback((e: h.JSX.TargetedEvent<HTMLInputElement>) => {
            debugger;
            setV(e.currentTarget.value);
            e.preventDefault();
        }, [])} value={v} />
    )*/
}

function DemoTableCell({ index, header }: { index: number, header?: boolean }) {
    const r = useRef(Math.random());

    if (header) {
        const ref = useRef<HTMLTableCellElement>(null);
        const text = `Header #${index}`;
        return <TableCell<HTMLTableCellElement> /* getSortValue={returnZero} */
            focusSelf={e => ref.current?.focus()}
            tagTableCell="th"
            index={index}
            getSortValue={returnZero}
            render={info => <th {...info.propsCell}>{text}<button {...useMergedProps(info.propsFocus, { ref })} onClick={() => { info.tableCellReturn.sortByThisColumn() }}>Sort</button></th>} />
    }
    else {
        //const text = `Cell in column #${index}`;
        switch (index) {
            case 0:
                return (
                    <DemoInput index={index} />
                );
            default:
                return <TableCell<HTMLTableCellElement> /* getSortValue={() => r.current} */ focusSelf={e => e.focus()} tagTableCell="td" index={index} getSortValue={useStableGetter(r.current)} render={info => {
                    return (
                        <td {...info.propsFocus} {...info.propsCell}>{r.current.toString()}</td>
                    )
                }} />
        }
    }
}

export function Demo() {
    const [count, setCount] = useState(5);


    return (
        <>
            <Blurb />
            <Code />
            <label><input type="number" min={0} value={count} onInput={e => setCount(e.currentTarget.valueAsNumber)} /> # of table rows</label>
            <div>
                <Table<HTMLTableElement, HTMLLabelElement>
                    ariaLabel={null}
                    multiSelectionMode="activation"
                    tagTable="table"
                    render={infoTable => {
                        return (
                            <>
                                <label {...infoTable.propsLabel}>Table demo</label>
                                <table {...infoTable.propsTable}>
                                    <TableSection<HTMLTableSectionElement, HTMLTableRowElement, HTMLTableCellElement>
                                        tagTableSection="thead"
                                        location="head"
                                        render={infoSection => {
                                            return (
                                                <thead {...infoSection.propsTableSection}>
                                                    <TableRow<HTMLTableRowElement, HTMLTableCellElement>
                                                        index={0}
                                                        tagTableRow="tr"
                                                        render={info => {
                                                            return (
                                                                <tr {...info.props}>
                                                                    <DemoTableCell header={true} key={0} index={0} />
                                                                    <DemoTableCell header={true} key={1} index={1} />
                                                                    <DemoTableCell header={true} key={2} index={2} />
                                                                </tr>
                                                            )
                                                        }} />
                                                </thead>
                                            )
                                        }} />
                                    <TableSection<HTMLTableSectionElement, HTMLTableRowElement, HTMLTableCellElement>
                                        tagTableSection="tbody"
                                        location="body"
                                        multiSelectionAriaPropName="aria-selected"
                                        render={infoSection => {
                                            return (
                                                <tbody {...infoSection.propsTableSection}>
                                                    {infoSection.rearrangeableChildrenReturn.useRearrangedChildren(Array.from(function* () {
                                                        for (let i = 0; i < count; ++i) {
                                                            yield (
                                                                <TableRow<HTMLTableRowElement, HTMLTableCellElement>
                                                                    tagTableRow="tr"
                                                                    key={i}
                                                                    index={i}
                                                                    render={infoRow => {
                                                                        return (
                                                                            <tr {...infoRow.props}>
                                                                                <DemoTableCell key={0} index={0} />
                                                                                <DemoTableCell key={1} index={1} />
                                                                                <DemoTableCell key={2} index={2} />
                                                                            </tr>
                                                                        );

                                                                        /*
        
        
                                                                        tagTableRow: "tr",
                                                                        makePropsTableRow: () => ({
                                                                            children: <>
                                                                                <DemoTableCell key={0} index={0} />
                                                                                <DemoTableCell key={1} index={1} />
                                                                                <DemoTableCell key={2} index={2} />
                                                                            </>
                                                                        })
                                                                    })
        
                                                                        */
                                                                    }} />
                                                            )
                                                        }
                                                    }()))}
                                                </tbody>
                                            )
                                        }} />
                                </table>
                            </>
                        )
                    }
                    } />
            </div>
        </>
    )
}

