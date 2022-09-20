
import { ComponentChildren, h, RenderableProps } from "preact";
import { useState } from "preact-prop-helpers";
import { AriaButton, AriaCheckbox, CheckboxGroup, CheckboxGroupCheckbox, defaultRenderCheckboxGroupChild, defaultRenderCheckboxGroup, EventDetail } from "../../index";

/*function DemoButton({ tag, ...props }: { tag: string } & RenderableProps<{}>) {
    return <AriaButton disabled={disabled} onPress={onPress} pressed={} {...props} tag={tag as any}   />
}*/

function DemoCheckbox({ index }: { index: number }) {
    const [checked, setChecked] = useState(false);
    const labelText = `Checkbox #${index}`
    return (
        <CheckboxGroupCheckbox render={defaultRenderCheckboxGroupChild({
            labelPosition: "separate",
            tagInput: "input",
            tagLabel: "label",
            makeInputProps: () => ({}),
            makeLabelProps: () => ({ children: labelText })
        })}
            checked={checked}
            index={index}
            disabled={false}
            labelPosition="separate"
            text={labelText}
            tagInput="input"
            tagLabel="label"
            onInput={e => setChecked(e[EventDetail].checked)} />
    )
}



export function Blurb() {
    return (
        <>
            <p>Checkbox groups are an alternative to multi-select lists. There is no role of <code>checkboxgroup</code>, but this aims to be an ARIA-compliant implementation of a checkbox group.</p>
            <ul>
                <li>All normal <code>AriaCheckbox</code> functionality is supported on each individual checkbox.</li>
                <li>The parent checkbox switches between 3 states, remembering the last state that caused it to be "mixed".</li>
                <li>The parent checkbox reacts to each child's <code>checked</code> prop and updates its own internal <code>checked</code> attribute (be aware of this if they're asyncronous, as you'll want to ensure they all resolve on the same tick with <code>Promise.all</code> to not clobber the user's inputs).</li>
                <li>The children are treated as a composite component with list navigation; see <code>AiraSingleSelectList</code> for more information</li>
            </ul>
            <p><strong>Things <em>not</em> handled:</strong></p>
            <ul>
                <li>It is assumed that the parent checkbox provides sufficient labelling for all the children, which how the demo example identifies these elements. If you have a separate label, you will need to wrap the children in a <code>role=group</code> that references that label by overriding <code>render</code>.</li>
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
                <CheckboxGroup disabled={false} labelPosition="separate" tagInput="input" tagLabel="label" render={
                    defaultRenderCheckboxGroup({
                        labelPosition: "separate",
                        tagInput: "input",
                        tagLabel: "label",
                        makeInputProps: () => ({}),
                        makeLabelProps: () => ({}),
                        children: Array.from((function* () {
                            for (let i = 0; i < count; ++i) {
                                yield <div><DemoCheckbox index={i} key={i} /></div>
                            }
                        })())
                    })} />
            </div>
        </>
    )
}