
import { returnZero, useMergedProps, useState } from "preact-prop-helpers";
import { memo } from "preact/compat";
import { Button, Toolbar, ToolbarChild } from "../../dist/index.js";

const DemoListItem = memo(function DemoListItem({ index }: { index: number }) {

    return (
        <ToolbarChild<HTMLButtonElement>
            index={index}
            focusSelf={e => e.focus()}
            getSortValue={returnZero}
            disabledProp="disabled"
            render={info2 => {
                return (
                    <Button<HTMLButtonElement>
                        tagButton="button"
                        pressed={false}
                        render={info3 => <button {...useMergedProps(info2.propsChild, info2.propsTabbable, info3.props)}>Toolbar child #{index}</button>} />
                );
            }}
        />
    )
})






export function Blurb() {
    return (
        <>
            <p><a href="https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/">In accordance with the ARIA guidelines for Toolbar patterns,</a> this widget supports the following:</p>
            <ul>
                <li>A Toolbar is a single widget for the purposes of keyboard navigation, like a Listbox.</li>
                <li>Toolbars are well-suited for "button group" patterns as well. Multiple groups can be contained within a single Toolbar, even multiple different types of components.</li>
            </ul>
            <p><strong>Things <em>not</em> handled:</strong></p>
            <ul>
                <li>You must label the Toolbar with <code>aria-label</code>.</li>
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
            <label><input type="number" min={0} value={count} onInput={e => setCount(e.currentTarget.valueAsNumber)} /> # of list items</label>
            <div>
                <Toolbar<HTMLDivElement, HTMLButtonElement, HTMLLabelElement>
                    orientation="horizontal"
                    role="toolbar"
                    ariaPropName="aria-pressed"
                    selectionMode="activation"
                    selectionLimit="single"
                    ariaLabel={null}
                    render={(info) => <>
                        <label {...info.propsLabel}>Toolbar demo</label>
                        <div {...info.propsToolbar}>
                            {Array.from((function* () {
                                for (let i = 0; i < count; ++i) {
                                    yield <DemoListItem index={i} key={i} />
                                }
                            })())}
                        </div></>
                    }
                />
            </div>
        </>
    )
}