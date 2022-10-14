
import { returnUndefined, usePassiveState, useStableCallback, useState } from "preact-prop-helpers";
import { useEffect, useRef } from "preact/hooks";
import { CheckboxGroupParent, defaultRenderCheckboxGroupParent } from "../../component/checkbox-group";
import { Checkbox, CheckboxCheckedType, CheckboxGroup, CheckboxGroupChild, defaultRenderCheckbox, EventDetail } from "../../index";


function getDocument() {
    return window.document;
}

function DemoCheckbox({ index }: { index: number }) {
    const [checked, setChecked] = useState<CheckboxCheckedType>(false);
    const labelText = `Checkbox #${index}`
    const inputElement = useRef<HTMLInputElement>(null);
    return (
        <CheckboxGroupChild<HTMLInputElement, HTMLLabelElement>
            //getDocument={getDocument}
            checked={checked}
            index={index}
            //disabled={false}
            //labelPosition="separate"
            text={labelText}
            subInfo={undefined}
            onChangeFromParent={(checked) => { setChecked(checked); }}
            focus={useStableCallback(() => inputElement.current?.focus())}
            render={({ checkboxGroupChild: { onControlIdChanged, onCheckedChange } }, modifyControlProps) => {

                return (
                    <Checkbox
                        checked={checked}
                        disabled={false}
                        getDocument={getDocument}
                        onCheckedChange={e => { setChecked(e[EventDetail].checked); onCheckedChange(e[EventDetail].checked); }}
                        labelPosition={"separate"}
                        tagInput={"input"}
                        tagLabel={"label"}
                        render={({ label: { inputId } }, modifyInput, modifyLabel) => {

                            const [_getControlId, setControlId] = usePassiveState<string | undefined>(onControlIdChanged, returnUndefined);
                            useEffect(() => { setControlId(inputId); return () => setControlId(undefined); }, [inputId]);

                            return (
                                <div style={{ border: "1px solid black" }}>
                                    <input {...modifyControlProps(modifyInput({ ref: inputElement }))} />
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
                <li>The parent checkbox reacts to each child's <code>checked</code> prop and updates its own internal <code>checked</code> attribute (be aware of this if they're asyncronous, as you'll want to ensure they all resolve on the same tick with <code>Promise.all</code> to not clobber the user's inputs).</li>
                <li>The children are treated as a composite component with list navigation; see <code>AiraSingleSelectList</code> for more information</li>
                <li><code>aria-controls</code> is set on the parent Checkbox to contain the IDs of all child checkboxes. This has no effect on any technology that I am aware of, but it's there just in case.</li>
            </ul>
            <p><strong>Things <em>not</em> handled:</strong></p>
            <ul>
                <li>As mentioned, <code>aria-controls</code> basically does nothing. Please ensure you're using good labelling here; it is assumed that the parent checkbox provides sufficient labelling for all the children, which how the demo example identifies these elements. If you have a separate label, you will need to wrap the children in a <code>role=group</code> that references that label by overriding <code>render</code>.</li>
                <li>See the caveat above for when each child's <code>onInput</code> takes a variable amount of time to actually update the <code>checked</code> prop, as it can clobber the user's last input when clicking on the parent</li>
            </ul>
        </>
    )
}

export function Code() {
    return (<code>{``}</code>)
}

export function Demo() {
    const [count, setCount] = useState(5);


    return (
        <>
            <Blurb />
            <Code />
            <label><input type="number" min={0} value={count} onInput={e => setCount(e.currentTarget.valueAsNumber)} /> # of checkboxes</label>
            <div>
                <CheckboxGroup<HTMLInputElement, HTMLLabelElement> render={
                    (info, modifyChildContainerProps) => {

                        return <div {...({
                            children: (
                                <>
                                    <CheckboxGroupParent 
                                    index={0}
                                    subInfo={undefined}
                                    text="Parent checkbox"
                                    render={defaultRenderCheckboxGroupParent<HTMLInputElement, HTMLLabelElement>({ disabled: false, getDocument, labelPosition: "separate", tagInput: "input", tagLabel: "label", render: defaultRenderCheckbox({ tagInput: "input", tagLabel: "label", labelPosition: "separate", makeInputProps: () => ({}), makeLabelProps: () => ({ children: "Parent checkbox" }) }) })}
                                     />
                                    <div style={{ display: "flex" }} {...modifyChildContainerProps({})}>
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