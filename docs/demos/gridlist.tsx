
import { getEventDetail, useMergedProps, useState } from "preact-prop-helpers";
import { useRef } from "preact/compat";
import { Checkbox, CheckboxChangeEventDetail, EventDetail, Gridlist, GridlistCell, GridlistRow, UseCheckboxReturnType } from "../../dist/preact/index.js";

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
    return (
        <GridlistCell<HTMLDivElement> focusSelf={e => e.focus()} index={0} render={info => {
            return (
                <div {...useMergedProps<HTMLDivElement>(info.propsCell, info.propsTabbable, info.propsPress)}>{text}</div>
            );
            /*
            
            defaultRenderGridlistChild({ tagGridlistChild: "div", makePropsGridlistChild: (_info) => ({ children: text }) })
    
            */
        }} />
    )
}

function DemoGridlistChild2({ tabbable }: { tabbable: boolean }) {
    const cb = useRef<UseCheckboxReturnType<HTMLInputElement, HTMLLabelElement>>(null);
    const [b, setB] = useState(false);
    return (
        <GridlistCell<HTMLDivElement>
            focusSelf={e => { debugger; cb.current?.checkboxLikeReturn.focusSelf() }}
            index={1}
            render={info => {

                return (
                    <div {...useMergedProps<HTMLDivElement>(info.propsCell)}>
                        <Checkbox<HTMLInputElement, HTMLLabelElement>
                            ariaLabel={"Whether this item is selected"}
                            imperativeHandle={cb}
                            labelPosition={"separate"}
                            tagInput="input"
                            tagLabel="label"
                            checked={b}
                            disabled={false}
                            onCheckedChange={checked => setB(getEventDetail<CheckboxChangeEventDetail>(checked).checked)}
                            render={infoCheckbox => {
                                return (
                                    <>
                                        <input {...useMergedProps(infoCheckbox.propsInput, info.propsTabbable, info.propsPress)} />
                                    </>
                                )

                                /*
                                defaultRenderCheckbox({ labelPosition: "separate", tagInput: "input", tagLabel: "label", makeInputProps: () => ({ tabIndex: info.rovingTabIndex.tabbable ? 0 : -1 }), makeLabelProps: () => ({ children: "Checkbox" }) })
                                */
                            }} />
                    </div>
                )

                /*
                
                defaultRenderGridlistChild<HTMLDivElement>({ tagGridlistChild: "div", makePropsGridlistChild: (info) => ({ children: <Checkbox ref={cb} labelPosition={"separate"} tagInput="input" tagLabel="label" checked={b} disabled={false} getDocument={getDocument} onCheckedChange={e => setB(e[EventDetail].checked)} render={defaultRenderCheckbox({ labelPosition: "separate", tagInput: "input", tagLabel: "label", makeInputProps: () => ({ tabIndex: info.rovingTabIndex.tabbable ? 0 : -1 }), makeLabelProps: () => ({ children: "Checkbox" }) })} /> }) })
        
                */
            }}
        />)
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
                <Gridlist<HTMLUListElement, HTMLLIElement, HTMLLabelElement>
                    ariaLabel={null}
                    singleSelectionAriaPropName="aria-selected"
                    singleSelectionMode="activation"
                    singleSelectedIndex={selectedIndex}
                    onSingleSelectedIndexChange={e => setSelectedIndex(e[EventDetail].selectedIndex)}
                    staggered={true}
                    children={Array.from(function* () {
                        for (let i = 0; i < count; ++i) {
                            yield (
                                <GridlistRow<HTMLLIElement, HTMLDivElement>

                                    multiSelected={null}
                                    index={i}
                                    render={rowInfo => {

                                        if (rowInfo.hide) {
                                            return <li {...rowInfo.props} />
                                        }
                                        return (
                                            <li {...rowInfo.props}><DemoGridlistChild1 row={i} />{i != 2 && <DemoGridlistChild2 tabbable={rowInfo.rovingTabIndexChildReturn?.tabbable || false} />}</li>
                                        )
                                    }} />
                            )
                        }
                    }())
                    }
                    render={infoGridlist => {
                        infoGridlist.rovingTabIndexReturn.getTabbableIndex();
                        return (
                            <>
                                <label {...infoGridlist.propsLabel}>Gridlist demo</label>
                                <ul {...infoGridlist.props}>{infoGridlist.rearrangeableChildrenReturn.children}</ul>
                            </>
                        )
                        /*
                        
                        defaultRenderGridlist({
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
                    })
                        
                        */
                    }} />


            </div>
        </>
    )
}