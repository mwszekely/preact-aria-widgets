
import { useState } from "preact-prop-helpers";
import { memo } from "preact/compat";
import { defaultRenderRadio, Radio, RadioGroup } from "../../component/radio-group";
import { EventDetail, defaultRenderRadioGroup } from "../../index";

function getDocument() {
    return window.document;
}

const DemoRadioButton = memo(function DemoRadioButton({ index }: { index: number }) {

    const value = `Radio button #${index}`;

    return (
        <Radio<number, HTMLInputElement, HTMLLabelElement>
            index={index}
            getDocument={getDocument}
            disabled={false}
            labelPosition="separate"
            text={value}
            value={index}
            tagInput="input"
            tagLabel="label"
            render={defaultRenderRadio({
                labelPosition: "separate",
                tagInput: "input",
                tagLabel: "label",
                makeInputProps: () => ({ name: "radio-demo" }),
                makeLabelProps: () => ({ children: value })
            })} />
    )
})



export function Blurb() {
    return (
        <>
            <p><a href="https://www.w3.org/WAI/ARIA/apg/patterns/radiobutton/">In accordance with the ARIA guidelines for Radio Button patterns,</a> this widget supports the following:</p>
            <ul>
                <li>The children are treated as a composite component with list navigation; see <code>AiraSingleSelectList</code> for more information</li>
                <li>The input &amp; label support the same text-selection affordances as Checkboxes (labels can be selected, but double-clicking doesn't select the text and selecting text doesn't count as an input)</li>
                <li>Selection state is handled by the parent; instead of specifying whether any given radio button is checked or not, the parent notifies each child of the necessary changes.</li>
            </ul>
            <p><strong>Things <em>not</em> handled:</strong></p>
            <ul>
                <li>If your checkbox does not have a visible label (achievable by by overriding the <code>render</code> prop and setting <code>labelPosition</code> to be "separate"), you must pass <code>aria-label</code> as a prop to the checkbox manually. Not providing one will print an error to the console, but it it not required by the type system.</li>
                <li>The above also applies to the radio group as a whole; ARIA requires that all Radio Buttons be contained within an element with a specific role which is labelled either by an element (handled for you) or <code>aria-label</code> (specified by you manually on the input).</li>
            </ul>
        </>
    )
}

export function Code() {
    return (<code>{``}</code>)
}

export function Demo() {
    const [selectedIndex, setSelectedIndex] = useState<null | number>(null);
    const [count, setCount] = useState(5);


    return (
        <>
            <Blurb />
            <Code />
            <label><input type="number" min={0} value={count} onInput={e => setCount(e.currentTarget.valueAsNumber)} /> # of radio buttons</label>
            <div>
                <RadioGroup<number, HTMLDivElement, HTMLLabelElement, HTMLInputElement, HTMLLabelElement>
                    name="radio-demo"
                    onSelectedValueChange={e => setSelectedIndex(e[EventDetail].selectedValue ?? 0)}
                    selectedValue={selectedIndex}
                    tagGroupLabel="label"
                    tagGroup="div"
                    render={defaultRenderRadioGroup({
                        tagGroup: "div",
                        tagLabel: "label",
                        makePropsGroup: () => ({
                            children:
                                <>
                                    {Array.from((function* () {
                                        for (let i = 0; i < count; ++i) {
                                            yield <DemoRadioButton index={i} key={i} />
                                        }
                                    })())}
                                </>
                        }),
                        makePropsLabel: (info) => ({ children: "Radio group example " + "(" + info.radioGroup.selectedIndex?.toString() + ")" })
                    })} />
            </div>
        </>
    )
}