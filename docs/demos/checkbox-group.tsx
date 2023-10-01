
import { EventDetail, useMergedProps, useStableCallback, useState } from "preact-prop-helpers";
import { useRef } from "preact/hooks";
import { Checkbox, CheckboxCheckedType, CheckboxGroup, CheckboxGroupChild, CheckboxGroupParent, UseCheckboxReturnType, defaultRenderCheckboxLike } from "../../dist/index.js";

function DemoCheckbox({ index }: { index: number }) {
    const [checked, setChecked] = useState<CheckboxCheckedType>(false);
    const ref = useRef<UseCheckboxReturnType<HTMLInputElement, HTMLLabelElement>>(null);
    return (
        <CheckboxGroupChild<HTMLInputElement>
            checked={checked}
            index={index}
            focusSelf={() => ref.current?.checkboxLikeReturn.focusSelf()}
            onChangeFromParent={async (checked) => { await new Promise(resolve => setTimeout(resolve, Math.random() * 2000)); setChecked(checked); }}
            //focusSelf={useStableCallback((e) => e.focus())}
            render={(info) => {

                return (
                    <div>
                        <Checkbox<HTMLInputElement, HTMLLabelElement>
                            imperativeHandle={ref}
                            checked={checked}
                            disabled={false}
                            ariaLabel={null}
                            onCheckedChange={e => { const checked = e[EventDetail].checked; setChecked(checked); info.checkboxGroupChildReturn.onChildCheckedChange(checked); }}
                            labelPosition={"separate"}
                            tagInput={"input"}
                            tagLabel={"label"}
                            render={defaultRenderCheckboxLike({
                                labelPosition: "separate",
                                tagInput: "input",
                                tagLabel: "label",
                                makePropsInput: info2 => useMergedProps(info.propsChild, info.propsTabbable, info2.propsInput),
                                makePropsLabel: info2 => ({ children: `Checkbox #${index}`, ...info2.propsLabel })
                            })}

                        />
                    </div>)
            }}
        />
    )
}



export function Blurb() {
    return (
        <>
            <p>Checkbox groups are an alternative to multi-select lists. There is no role of <code>checkboxgroup</code>, but this aims to be an ARIA-compliant implementation of a checkbox group.</p>
            <ul>
                <li>All normal <code>Checkbox</code> functionality is supported on each individual checkbox.</li>
                <li>The parent checkbox switches between 3 states, remembering the last state that caused it to be "mixed".</li>
                <li>The parent's "mixed" state changes all children back to whatever state the user had most recently created; the distinction is drawn when a child calls <code>onChildCheckedChange</code> during its event handler. This call is what notifies the parent checkbox what to use when switching to that "mixed" state.</li>
                <li>The children are treated as a composite component with list navigation; see <code>AiraSingleSelectList</code> for more information</li>
                <li><code>aria-controls</code> is set on the parent Checkbox to contain the IDs of all child checkboxes. This has no effect on any technology that I am aware of, but it's there just in case.</li>
            </ul>
            <p><strong>Things <em>not</em> handled:</strong></p>
            <ul>
                <li><code>CheckboxGroupParent</code> has supports child checkboxes being asyncronous (e.g. if each child's <code>onChangeFromParent</code> is async, then the parent's <code>onParentCheckedChange</code> will asyncronously wait for all of them), but you must apply any relevant labelling of this circumstance yourself.</li>
                <li>As mentioned, <code>aria-controls</code> basically does nothing. Please ensure you're using good labelling here; it is assumed that the parent checkbox provides sufficient labelling for all the children, which how the demo example identifies these elements. If you have a separate label, you will need to wrap the children in a <code>role=group</code> that references that label by overriding <code>render</code>.</li>
            </ul>
        </>
    )
}

export function Code() {
    return (<code>{``}</code>)
}

export function Demo() {
    const [count, setCount] = useState(5);
    const [pending, setPending] = useState(false);


    return (
        <>
            <Blurb />
            <Code />
            <label><input type="number" min={0} value={count} onInput={e => setCount(e.currentTarget.valueAsNumber)} /> # of checkboxes</label>
            <div>
                <p><strong>Note:</strong> Each checkbox (in this demo only!) takes a random amount of time to update when modified via the parent checkbox to test async handling.</p>
                <CheckboxGroup<HTMLDivElement, HTMLInputElement>
                    orientation="vertical"
                    render={
                        (info2) => {
                            const ref = useRef<UseCheckboxReturnType<HTMLInputElement, HTMLLabelElement>>(null);
                            return <div {...info2.props} {...({
                                children: (
                                    <>
                                        <CheckboxGroupParent<HTMLInputElement>
                                            index={0}
                                            focusSelf={() => ref.current?.checkboxLikeReturn.focusSelf()}
                                            render={info3 => (<Checkbox<HTMLInputElement, HTMLLabelElement>
                                                imperativeHandle={ref}
                                                disabled={pending}
                                                checked={info3.checkboxGroupParentReturn.checked}
                                                onCheckedChange={useStableCallback((event) => {
                                                    const checked = event[EventDetail].checked;
                                                    setPending(true);
                                                    info3.checkboxGroupParentReturn.onParentCheckedChange(event).finally(() => setPending(false))
                                                })}
                                                ariaLabel="Parent checkbox"
                                                labelPosition="separate"
                                                tagInput="input"
                                                tagLabel="label"
                                                render={defaultRenderCheckboxLike({
                                                    labelPosition: "separate",
                                                    makePropsInput: info4 => useMergedProps(info4.propsInput, info3.propsChild, info3.propsTabbable),
                                                    makePropsLabel: info4 => ({ children: "Parent checkbox", ...info4.propsLabel }),
                                                    tagInput: "input",
                                                    tagLabel: "label"
                                                })}
                                            />)
                                            }
                                        />
                                        <div style={{ display: "flex", flexDirection: "column" }}>
                                            <>{Array.from((function* () {
                                                for (let i = 0; i < count; ++i) {
                                                    yield <DemoCheckbox index={i + 1} key={i} />
                                                }
                                            })())}</>
                                        </div>
                                    </>
                                )
                            })} />
                        }} />
            </div>
        </>
    )
}

/*

({ checkboxGroup: { parentIsChecked, parentPercentChecked }, ..._info }, { checkboxGroupParent: { checked, onCheckedChange }, ..._info2 }, modifyControlProps, modifyChildContainerProps) => {

                        return (
                            <div>
                                <Checkbox<HTMLInputElement, HTMLLabelElement>

                                    getDocument={getDocument}
                                    disabled={false}
                                    checked={parentIsChecked}
                                    onCheckedChange={onCheckedChange}
                                    labelPosition={"separate"}
                                    tagInput={"input"}
                                    tagLabel={"label"}
                                    render={defaultRenderCheckbox({
                                        labelPosition: "separate",
                                        tagInput: "input",
                                        tagLabel: "label",
                                        makeInputProps: () => modifyControlProps({}),
                                        makeLabelProps: () => ({ children: `${(parentPercentChecked * 100).toFixed(0)}%, ${checked? checked == "mixed" ? "mixed" : "checked" : "not checked"}` })
                                    })}

                                />
                                <div style={{ display: "flex" }} {...modifyChildContainerProps({})}>
                                    <>{Array.from((function* () {
                                        for (let i = 0; i < count; ++i) {
                                            yield <DemoCheckbox index={i} key={i} />
                                        }
                                    })())}</>
                                </div>
                            </div>
                        )
                    }
                    
 */