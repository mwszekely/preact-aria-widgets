
import { ComponentChildren, h, RenderableProps } from "preact";
import { useState } from "preact-prop-helpers";
import { AriaButton, EventDetail } from "../../index";

/*function DemoButton({ tag, ...props }: { tag: string } & RenderableProps<{}>) {
    return <AriaButton disabled={disabled} onPress={onPress} pressed={} {...props} tag={tag as any}   />
}*/



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
    return (<code>{`<AriaButton tag="button">Button</AriaButton>
    <AriaButton tag="div">Div</AriaButton>`}</code>)
}

export function Demo() {

    const onPress = () => { alert("Button clicked") }
    const [pressed, setPressed] = useState(false);
;
    return (
        <>
            <Blurb />
            <Code />
            <AriaButton disabled={false} onPress={onPress} tag="button">Button</AriaButton>
            <AriaButton disabled="soft" onPress={onPress} tag="button">Button, disabled (soft)</AriaButton>
            <AriaButton disabled="hard" onPress={onPress} tag="button">Button, disabled (hard)</AriaButton>
            <AriaButton disabled={false} onPress={onPress} tag="div">Div</AriaButton>
            <AriaButton disabled="soft" onPress={onPress} tag="div">Div, disabled (soft)</AriaButton>
            <AriaButton disabled="hard" onPress={onPress} tag="div">Div, disabled (hard)</AriaButton>
            <AriaButton disabled={false} tag="button" pressed={pressed} onPress={e => setPressed(e[EventDetail].pressed ?? false)}>Button ({pressed? "pressed" : "unpressed"})</AriaButton>
        </>
    )
}