
import { ComponentChildren, h, RenderableProps } from "preact";
import { useState } from "preact-prop-helpers";
import { AriaButton, AriaCheckbox, EventDetail } from "../../index";

/*function DemoButton({ tag, ...props }: { tag: string } & RenderableProps<{}>) {
    return <AriaButton disabled={disabled} onPress={onPress} pressed={} {...props} tag={tag as any}   />
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
                <li>Checkbox groups (with a tri-state parent) are a separate component/hook</li>
            </ul>
            <p><strong>Things <em>not</em> handled:</strong></p>
            <ul>
                <li>If your checkbox does not have a visible label (achievable by by overriding the <code>render</code> prop and setting <code>labelPosition</code> to be "separate"), you must pass <code>aria-label</code> as a prop to the checkbox manually.</li>
            </ul>
        </>
    )
}

export function Code() {
    return (<code>{`<AriaCheckbox checked={true} labelPosition="separate" tagInput="input" tagLabel="label">Label text</AriaCheckbox>`}</code>)
}

export function Demo() {

    const [checked, setChecked] = useState(false);

    
    return (
        <>
            <Blurb />
            <Code />
            <AriaButton tag="button" onPress={() => { setChecked("mixed" as any); }}>Change to mixed</AriaButton>
            <div style={{border: "1px solid black"}}><AriaCheckbox labelPosition="separate" checked={checked} onInput={e => setChecked(e[EventDetail].checked)} disabled={false} tagInput="input" tagLabel="label">Separate, input &amp; label</AriaCheckbox></div>
            <div style={{border: "1px solid black"}}><AriaCheckbox labelPosition="wrapping" checked={checked} onInput={e => setChecked(e[EventDetail].checked)} disabled={false} tagInput="input" tagLabel="label">Wrapping, input &amp; label</AriaCheckbox></div>
            <div style={{border: "1px solid black"}}><AriaCheckbox labelPosition="separate" checked={checked} onInput={e => setChecked(e[EventDetail].checked)} disabled={false} tagInput="div" tagLabel="label">Separate, div &amp; label</AriaCheckbox></div>
            <div style={{border: "1px solid black"}}><AriaCheckbox labelPosition="wrapping" checked={checked} onInput={e => setChecked(e[EventDetail].checked)} disabled={false} tagInput="div" tagLabel="label">Wrapping, div &amp; label</AriaCheckbox></div>
            <div style={{border: "1px solid black"}}><AriaCheckbox labelPosition="separate" checked={checked} onInput={e => setChecked(e[EventDetail].checked)} disabled={false} tagInput="input" tagLabel="div">Separate, input &amp; div</AriaCheckbox></div>
            <div style={{border: "1px solid black"}}><AriaCheckbox labelPosition="wrapping" checked={checked} onInput={e => setChecked(e[EventDetail].checked)} disabled={false} tagInput="input" tagLabel="div">Wrapping, input &amp; div</AriaCheckbox></div>
            <div style={{border: "1px solid black"}}><AriaCheckbox labelPosition="separate" checked={checked} onInput={e => setChecked(e[EventDetail].checked)} disabled={false} tagInput="div" tagLabel="div">Separate, div &amp; div</AriaCheckbox></div>
            <div style={{border: "1px solid black"}}><AriaCheckbox labelPosition="wrapping" checked={checked} onInput={e => setChecked(e[EventDetail].checked)} disabled={false} tagInput="div" tagLabel="div">Wrapping, div &amp; div</AriaCheckbox></div>
            <div style={{border: "1px solid black"}}><AriaCheckbox<HTMLInputElement, HTMLLabelElement> labelPosition="separate" checked={checked} onInput={e => setChecked(e[EventDetail].checked)} disabled={false} tagInput="input" tagLabel="label" render={(info, input, label) => { return <input {...input} aria-label="Hidden label (technically separate), input &amp; label" /> }}>This text will not be rendered.</AriaCheckbox></div>
        </>
    )
}