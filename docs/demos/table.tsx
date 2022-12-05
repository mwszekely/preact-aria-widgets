
import { h } from "preact";
import { useState } from "preact-prop-helpers";
import { useRef } from "preact/compat";
import { useCallback } from "preact/hooks";
import { Table, TableSection, TableCell, TableRow } from "../../component/table";
/*
function getDocument() { return window.document; }


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


function DemoInput({ tabbable }: { tabbable: boolean }) {
    const [v, setV] = useState("");
    return (
        <input type="text" tabIndex={tabbable ? 0 : -1} onInput={useCallback((e: h.JSX.TargetedEvent<HTMLInputElement>) => {
            setV(e.currentTarget.value);
            e.preventDefault();
        }, [])} value={v} />
    )
}

function DemoTableCell({ index, header }: { index: number, header?: boolean }) {
    const r = useRef(Math.random());

    if (header) {
        const text = `Header #${index}`;
        return <TableCell<HTMLTableCellElement> focusSelf={e => e.focus()}  tagTableCell="th" index={index} render={info => <button tabIndex={info.rovingTabIndexChildReturn.tabbable ? 0 : -1} onClick={() => info..sort()}>{text}</button>}  subInfo={undefined} />
    }
    else {
        //const text = `Cell in column #${index}`;
        switch (index) {
            case 0:
                return <TableCell<HTMLTableCellElement> focusSelf={e => e.focus()} location="body" headerType={null} tagTableCell="td" index={index} getDocument={getDocument} text={""} value={""} render={defaultRenderTableCell({
                    tagTableCell: "td", makePropsTableCell: (info) => ({
                        children: <DemoInput tabbable={info.rovingTabIndex.tabbable} />

                    })
                })}  subInfo={undefined} />
            default:
                return <TableCell<HTMLTableCellElement> focusSelf={e => e.focus()} location="body" headerType={null} tagTableCell="td" index={index} getDocument={getDocument} text={r.current.toString()} value={r.current.toString()} render={defaultRenderTableCell({ tagTableCell: "td", makePropsTableCell: () => ({ children: r.current.toString() }) })}  subInfo={undefined} />
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
                <Table noTypeahead={true} render={defaultRenderTable({
                    tagTable: "table", 
                    makePropsTable: () => ({

                        children: <>
                            <TableHead tagTableHead="thead" render={defaultRenderTableHead({
                                tagTableHead: "thead",
                                makePropsTableHead: () => ({
                                    children: <TableRow tagTableRow="tr" noTypeahead={true} index={0} text={""} render={defaultRenderTableRow({
                                        tagTableRow: "tr",
                                        makePropsTableRow: () => ({
                                            children: <>
                                                <DemoTableCell key={0} index={0} header={true} />
                                                <DemoTableCell key={1} index={1} header={true} />
                                                <DemoTableCell key={2} index={2} header={true} />
                                            </>
                                        })
                                    })}  subInfo={undefined} />
                                })
                            })} />
                            <TableBody render={defaultRenderTableBody({
                                tagTableBody: "tbody",
                                makePropsTableBody: () => ({
                                    children: Array.from(function* () {
                                        for (let i = 0; i < count; ++i) {
                                            yield <TableRow tagTableRow="tr" noTypeahead={true} key={i} index={i + 1} text={""} render={defaultRenderTableRow({
                                                tagTableRow: "tr",
                                                makePropsTableRow: () => ({
                                                    children: <>
                                                        <DemoTableCell key={0} index={0} />
                                                        <DemoTableCell key={1} index={1} />
                                                        <DemoTableCell key={2} index={2} />
                                                    </>
                                                })
                                            })}  subInfo={undefined} />
                                        }
                                    }())
                                })
                            })} />
                            {/*<TableFoot render={defaultRenderTableFoot({ tagTableFoot: "tfoot", makePropsTableFoot: () => ({ children: null }) })} />*\/}
                        </>
                    })
                })} />

            </div>
        </>
    )
}*/