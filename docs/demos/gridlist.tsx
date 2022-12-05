
import { usePassiveState, useState } from "preact-prop-helpers";
/*
import { useRef } from "preact/compat";
import { Checkbox, defaultRenderCheckbox } from "../../component/checkbox";
import { defaultRenderGridlist, defaultRenderGridlistChild, defaultRenderGridlistRow, defaultRenderGridlistSection, Gridlist, GridlistChild, GridlistRow, GridlistSection } from "../../component/gridlist";
import { EventDetail } from "../../props";
import { UseCheckboxReturnTypeInfo } from "../../use-checkbox";

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
    return <GridlistChild<HTMLDivElement> getDocument={getDocument} focusSelf={e => e.focus()} index={0} text={text} render={defaultRenderGridlistChild({ tagGridlistChild: "div", makePropsGridlistChild: (_info) => ({ children: text }) })} subInfo={undefined} />
}

function DemoGridlistChild2() {
    const cb = useRef<UseCheckboxReturnTypeInfo<HTMLInputElement, HTMLLabelElement>>(null);
    const [b, setB] = useState(false);
    return <GridlistChild<HTMLDivElement> noModifyTabIndex={true} focusSelf={e => { debugger; cb.current?.checkboxLike.focusSelf() }} getDocument={getDocument} index={1} text={b.toString()} render={defaultRenderGridlistChild<HTMLDivElement>({ tagGridlistChild: "div", makePropsGridlistChild: (info) => ({ children: <Checkbox ref={cb} labelPosition={"separate"} tagInput="input" tagLabel="label" checked={b} disabled={false} getDocument={getDocument} onCheckedChange={e => setB(e[EventDetail].checked)} render={defaultRenderCheckbox({ labelPosition: "separate", tagInput: "input", tagLabel: "label", makeInputProps: () => ({ tabIndex: info.rovingTabIndex.tabbable? 0 : -1 }), makeLabelProps: () => ({ children: "Checkbox" }) })} /> }) })} subInfo={undefined} />
}

export function Demo() {
    const [count, setCount] = useState(5);
    const [selectedIndex, setSelectedIndex] = useState(null as number | null);

    return (
        <>
            <Blurb />
            <Code />
            <label><input type="number" min={0} value={count} onInput={e => setCount(e.currentTarget.valueAsNumber)} /> # of table rows</label>
            <div>
                <Gridlist
                    initialIndex={0}
                    selectedIndex={selectedIndex}
                    selectionMode="activation"
                    setSelectedIndex={setSelectedIndex}
                    render={defaultRenderGridlist({
                        tagGridlist: "div", makePropsGridlist: (_info) => ({
                            children: <GridlistSection index={0} compareRows={(lhs, rhs) => lhs - rhs} render={defaultRenderGridlistSection({
                                tagGridlistSection: "div", makePropsGridlistSection: (_info) => ({
                                    children: Array.from(function* () {
                                        for (let i = 0; i < count; ++i) {
                                            yield (
                                                <GridlistRow<HTMLDivElement, HTMLDivElement>
                                                    ariaPropName="aria-selected"
                                                    getDocument={getDocument}
                                                    selected={false}
                                                    unselectable={true}
                                                    subInfo={undefined}
                                                    index={i}
                                                    text=""
                                                    render={defaultRenderGridlistRow({
                                                        tagGridlistRow: "div", makePropsGridlistRow: (_info) => ({
                                                            children: [<DemoGridlistChild1 row={i} />, <DemoGridlistChild2 />]
                                                        })
                                                    })} />
                                            )
                                        }
                                    }())
                                })
                            })} />
                        })
                    })} />


            </div>
        </>
    )
}*/