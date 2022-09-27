
import { ComponentChildren, h, RenderableProps } from "preact";
import { useState } from "preact-prop-helpers";
import { StateUpdater } from "preact/hooks";
import { Button, Checkbox, EventDetail, defaultRenderButton, defaultRenderCheckbox } from "../../index";

/*function DemoButton({ tag, ...props }: { tag: string } & RenderableProps<{}>) {
    return <Button disabled={disabled} onPress={onPress} pressed={} {...props} tag={tag as any}   />
}*/



export function Blurb() {
    return (
        <>
            <p><a href="https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/">In accordance with the ARIA guidelines for Checkbox patterns,</a> this widget supports the following:</p>
            <ul>
                <li>Toggles between checked and unchecked when pressed (clicked, Enter pressed, Space released, etc.)</li>
                <li>Can be <code>mixed</code> instead, though <code>onInput</code> will only ever be called with <code>true</code> or <code>false</code></li>
                <li>Supports using <code>&lt;input&gt;</code>s and <code>&lt;label&gt;</code>s, as well as just plain ol' <code>&lt;div&gt;</code>s on either/both</li>
                <li>The checkbox and label can be sibling elements, like normal, or the label can wrap the input for a larger hit area. In all cases, the appropriate roles/event handlers will be applied to each element.</li>
                <li>When selecting the text of a checkbox's label, this does not change the checkbox's state</li>
                <li>Double-clicking the label checks &amp; un-checks the checkbox instead of selecting the label's text</li>
                <li>Checkbox groups (with a tri-state parent) are a separate component/hook</li>
            </ul>
            <p><strong>Things <em>not</em> handled:</strong></p>
            <ul>
                <li>If your checkbox does not have a visible label (achievable by by overriding the <code>render</code> prop and setting <code>labelPosition</code> to be "separate"), you must pass <code>aria-label</code> as a prop to the checkbox manually. Not providing one will print an error to the console, but it it not required by the type system.</li>
            </ul>
        </>
    )
}

export function Code() {
    return (<code>{`<Checkbox checked={true} labelPosition="separate" tagInput="input" tagLabel="label">Label text</Checkbox>`}</code>)
}

export function Demo() {

    const [checked, setChecked] = useState(false as boolean | "mixed");


    return (
        <>
            <Blurb />
            <Code />
            <Button tag="button" onPress={() => { setChecked("mixed" as any); }} render={defaultRenderButton("button", () => ({ children: "Change to mixed" }))} />
            <DemoCheckbox checked={checked} setChecked={setChecked} labelPosition="separate" disabled={false} tagInput="input" tagLabel="label" />
            <DemoCheckbox checked={checked} setChecked={setChecked} labelPosition="wrapping" disabled={false} tagInput="input" tagLabel="label" />
            <DemoCheckbox checked={checked} setChecked={setChecked} labelPosition="separate" disabled={false} tagInput="div" tagLabel="label" />
            <DemoCheckbox checked={checked} setChecked={setChecked} labelPosition="wrapping" disabled={false} tagInput="div" tagLabel="label" />
            <DemoCheckbox checked={checked} setChecked={setChecked} labelPosition="separate" disabled={false} tagInput="input" tagLabel="div" />
            <DemoCheckbox checked={checked} setChecked={setChecked} labelPosition="wrapping" disabled={false} tagInput="input" tagLabel="div" />
            <DemoCheckbox checked={checked} setChecked={setChecked} labelPosition="separate" disabled={false} tagInput="div" tagLabel="div" />
            <DemoCheckbox checked={checked} setChecked={setChecked} labelPosition="wrapping" disabled={false} tagInput="div" tagLabel="div" />
            <DemoCheckbox checked={checked} setChecked={setChecked} labelPosition="hidden" disabled={false} tagInput="input" tagLabel="label" />
        </>
    )
}

function DemoCheckbox({ labelPosition, tagInput, tagLabel, disabled, checked, setChecked }: { disabled: boolean, labelPosition: "separate" | "wrapping" | "hidden", tagInput: string, tagLabel: string, checked: boolean | "mixed", setChecked: StateUpdater<boolean | "mixed"> }) {
    //const [checked, setChecked] = useState(false);
    return (
        <div style={{ border: "1px solid black" }}>
            <Checkbox
                disabled={disabled}
                checked={checked}
                onCheckedChange={e => setChecked(e[EventDetail].checked)}
                labelPosition={labelPosition == "hidden" ? "separate" : labelPosition}
                tagInput={tagInput as never}
                tagLabel={tagLabel as never}
                render={defaultRenderCheckbox({
                    labelPosition,
                    tagInput,
                    tagLabel,
                    makeInputProps: () => ({ "aria-label": labelPosition == "hidden" ? `Hidden label (technically separate), ${tagInput} and ${tagLabel} ${checked ? "checked" : "not checked"}` : undefined, }),
                    makeLabelProps: () => ({ children: `${labelPosition}, ${tagInput} and ${tagLabel}, ${checked ? "checked" : "not checked"}` })
                })}
            />
            {labelPosition == "hidden" && <div>(This is not a label -- the actual label is via the <code>aria-label</code> prop)</div>}
        </div>
    )
}
