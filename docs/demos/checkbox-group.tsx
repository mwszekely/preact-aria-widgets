
import { returnUndefined, useMergedProps, usePassiveState, useStableCallback, useState } from "preact-prop-helpers";
import { useEffect, useRef } from "preact/hooks";
import { CheckboxGroupParent, defaultRenderCheckboxGroupParent } from "../../component/checkbox-group";
import { Checkbox, CheckboxCheckedType, CheckboxGroup, CheckboxGroupChild, defaultRenderCheckbox, EventDetail } from "../../index";


function getDocument() {
    return window.document;
}

function DemoCheckbox({ index }: { index: number }) {
    const [checked, setChecked] = useState<CheckboxCheckedType>(false);
    const labelText = `Checkbox #${index}`
    return (
        <CheckboxGroupChild<HTMLInputElement, HTMLLabelElement>
            checked={checked}
            index={index}
            text={labelText}
            subInfo={undefined}
            onChangeFromParent={async (checked) => { await new Promise(resolve => setTimeout(resolve, Math.random() * 2000)); setChecked(checked); }}
            focusSelf={useStableCallback((e) => e.focus())}
            render={({ checkboxGroupChild: { onControlIdChanged, onChildCheckedChange } }, modifyControlProps) => {

                return (
                    <Checkbox<HTMLInputElement, HTMLLabelElement>
                        checked={checked}
                        disabled={false}
                        getDocument={getDocument}
                        onCheckedChange={e => { setChecked(e[EventDetail].checked); onChildCheckedChange(e[EventDetail].checked); }}
                        labelPosition={"separate"}
                        tagInput={"input"}
                        tagLabel={"label"}
                        render={({ label: { inputId } }, modifyInput, modifyLabel) => {

                            const [_getControlId, setControlId] = usePassiveState<string | undefined>(onControlIdChanged, returnUndefined);
                            useEffect(() => { setControlId(inputId); return () => setControlId(undefined); }, [inputId]);

                            return (
                                <div style={{ border: "1px solid black" }}>
                                    <input {...modifyInput(modifyControlProps)} />
                                    <label {...modifyLabel({ children: `Checkbox #${index}` })} />
                                </div>
                            );
                        }}

                    />)
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
                <p><strong>Note:</strong> Each checkbox takes a random amount of time to update when modified via the parent checkbox to test async handling.</p>
                <CheckboxGroup<HTMLInputElement, HTMLLabelElement> render={
                    (info, childContainerProps) => {

                        return <div {...({
                            children: (
                                <>
                                    <CheckboxGroupParent
                                        index={0}
                                        focusSelf={e => e.focus()}
                                        subInfo={undefined}
                                        text="Parent checkbox"
                                        render={defaultRenderCheckboxGroupParent<HTMLInputElement, HTMLLabelElement>({
                                            disabled: pending,
                                            getDocument,
                                            labelPosition: "separate",
                                            tagInput: "input",
                                            tagLabel: "label",
                                            onCheckedChangeStart: () => { setPending(true) },
                                            onCheckedChangeEnd: () => { setPending(false) },
                                            render: defaultRenderCheckbox({ tagInput: "input", tagLabel: "label", labelPosition: "separate", makeInputProps: () => ({}), makeLabelProps: () => ({ children: "Parent checkbox" }) })
                                        })}
                                    />
                                    <div style={{ display: "flex" }} {...useMergedProps(childContainerProps, {})}>
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