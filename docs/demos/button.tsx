
import { JSX } from "preact";
import { EventDetail, useState } from "preact-prop-helpers";
import { Button, ProgressWithHandler, TargetedButtonPressEvent } from "../../dist/index.js";

export function Blurb() {
    return (
        <>
            <p><a href="https://www.w3.org/WAI/ARIA/apg/patterns/button/">In accordance with the ARIA guidelines for Button patterns,</a> this widget supports the following:</p>
            <ul>
                <li>Whether using an actual <code>&lt;button&gt;</code>, or something else like a <code>&lt;div&gt;</code>, the proper roles and event handlers will be applied.</li>
                <li>Buttons can be toggled (pressed or unpressed).</li>
                <li>The button responds to keyboard, mouse, touch, etc. events, regardless of the element used.
                    <ul>
                        <li>Double-clicks do not select text, but text is still selectable without it counting as a press/click</li>
                        <li>When Enter is pressed, the button is immediately activated</li>
                        <li>When Space is pressed, the button is activated once released</li>
                        <li>iOS Safari properly focuses the button</li>
                    </ul>
                </li>
            </ul>
            <p><strong>Things <em>not</em> handled:</strong></p>
            <ul>
                <li>If your button contains only an icon (or other non-descriptive content, etc.), you must provide an <code>aria-label</code> manually stating what happens when the button is pressed.</li>
            </ul>
        </>
    )
}

export function Code() {
    return (<code>{`<Button tag="button">Button</Button>
    <Button tag="div">Div</Button>`}</code>)
}

export function Demo() {
    const [pressed, setPressed] = useState(false as boolean | undefined);

    return (
        <>
            <Blurb />
            <Code />
            <DemoButton disabled={false} tag="button" />
            <DemoButton disabled="soft" tag="button" />
            <DemoButton disabled="hard" tag="button" />
            <DemoButton disabled={false} tag="div" />
            <DemoButton disabled="soft" tag="div" />
            <DemoButton disabled="hard" tag="div" />
            <Button<HTMLButtonElement>
                tagButton="button"
                pressed={pressed}
                onPressSync={e => setPressed(e[EventDetail].pressed!)}
                render={info => {
                    return (
                        <>
                            <button {...info.props}>{`Toggle button (${pressed ? "pressed" : "unpressed"})`}</button>
                        </>
                    )
                }}
            />
        </>
    )
}

function DemoButton({ tag: Tag, disabled }: { tag: keyof JSX.IntrinsicElements, disabled: boolean | "soft" | "hard" }) {
    const onPress = async () => { await new Promise(resolve => setTimeout(resolve, 1000)); alert("Button clicked"); }

    return (
        <ProgressWithHandler<TargetedButtonPressEvent<HTMLButtonElement>, boolean | undefined, HTMLProgressElement, HTMLLabelElement> 
        capture={e => undefined}
        tagProgressIndicator="progress"
        asyncHandler={onPress}
        
        render={progressInfo => {
            return (
                <Button<HTMLButtonElement>
                    disabled={disabled}
                    tagButton={Tag as any}
                    onPressSync={progressInfo.asyncHandlerReturn.syncHandler}
                    render={info => {
                        let progressBar = (
                            <>
                                <label {...progressInfo.propsProgressLabel}>Async handler progress</label>
                                <progress {...progressInfo.propsProgressIndicator} />
                            </>
                        );
                        return (
                            <>
                                <Tag {...info.props as {}}>{`${Tag} ${disabled ? ` disabled (${disabled == "soft" ? "soft" : "hard"})` : ""}`}</Tag>
                                {progressInfo.asyncHandlerReturn.pending && progressBar}
                            </>)
                    }}
                />
            )
        }} />

    )
}