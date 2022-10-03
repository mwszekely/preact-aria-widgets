
import { h } from "preact";
import { useState } from "preact-prop-helpers";
import { useRef } from "preact/compat";
import { useCallback } from "preact/hooks";
import { defaultRenderGridlist, defaultRenderGridlistChild, defaultRenderGridlistRow, defaultRenderGridlistSection, Gridlist, GridlistChild, GridlistRow, GridlistSection } from "../../component/gridlist";
import { defaultRenderTable, defaultRenderTableBody, defaultRenderTableCell, defaultRenderTableHead, defaultRenderTableRow, Table, TableBody, TableCell, TableHead, TableRow } from "../../component/table";

function getDocument() { return window.document; }


export function Blurb() {
    return (
        <>
            <p>Because Listboxes are not allowed to contain interactive content, a Gridlist is semantically a list that <a href="https://www.w3.org/WAI/ARIA/apg/patterns/grid/">complies with the ARIA pattern for grids</a>.</p>
            <ul>
                <li>In terms of keyboard navigation and tabbing through elements, a Gridlist is like a Listbox, but in two dimensions, like a Table.</li>
                <li>The rows of a Gridlist are sortable. It is possible to have multiple, independently sortable sections within the same Gridlist.</li>
            </ul>
            <p><strong>Things <em>not</em> handled:</strong></p>
            <ul>
                <li>It's up to you to make sure that any interactive elements within a Gridlist respond to focus management properly with <code>focusSelf</code> prop and a properly placed <code>tabIndex={"{"}info.rovingTabIndex.tabbable? 0 : -1{"}"}</code> in the <code>render</code> prop.</li>
                <li>Any given row in a Gridlist can be marked as selected, but this is up to you to handle manually at the moment</li>
            </ul>
        </>
    )
}

export function Code() {
    return (<code>{``}</code>)
}


function DemoGridlistChild1({ row }: { row: number }) {
    const text = "Gridlist child " + row;
    return <GridlistChild getDocument={getDocument} index={0} locationIndex={0} text={text} render={defaultRenderGridlistChild({ tagGridlistChild: "div", makePropsGridlistChild: (info) => ({ children: text }) })} />
}

function DemoGridlistChild2() {
    const ref = useRef<HTMLInputElement>(null);
    const [b, setB] = useState(false);
    return <GridlistChild focusSelf={() => ref.current?.focus()} getDocument={getDocument} index={1} locationIndex={0} text={b.toString()} render={defaultRenderGridlistChild({ tagGridlistChild: "div", makePropsGridlistChild: (info) => ({ children: <input ref={ref} type="checkbox" tabIndex={info.rovingTabIndex.tabbable? 0 : -1} checked={b} onInput={e => setB(e.currentTarget.checked)} /> }) })} />
}

export function Demo() {
    const [count, setCount] = useState(5);


    return (
        <>
            <Blurb />
            <Code />
            <label><input type="number" min={0} value={count} onInput={e => setCount(e.currentTarget.valueAsNumber)} /> # of table rows</label>
            <div>
                <Gridlist initialIndex={0} render={defaultRenderGridlist({
                    tagGridlist: "div", makePropsGridlist: (info) => ({
                        children: <GridlistSection index={0} compareRows={(lhs, rhs) => lhs - rhs} render={defaultRenderGridlistSection({
                            tagGridlistSection: "div", makePropsGridlistSection: (info) => ({
                                children: Array.from(function* () {
                                    for (let i = 0; i < count; ++i) {
                                        yield <GridlistRow index={i} text="" render={defaultRenderGridlistRow({
                                            tagGridlistRow: "div", makePropsGridlistRow: (info) => ({
                                                children: [<DemoGridlistChild1 row={i} />, <DemoGridlistChild2 />]
                                            })
                                        })} />
                                    }
                                }())
                            })
                        })} />
                    })
                })} />
            

            </div>
        </>
    )
}