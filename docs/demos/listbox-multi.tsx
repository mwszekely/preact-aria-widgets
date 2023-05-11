
import { returnZero, useMergedProps, useState } from "preact-prop-helpers";
import { memo } from "preact/compat";
import { Listbox, ListboxItem } from "../../dist/index.js";

const DemoListItem = memo(function DemoListItem({ index }: { index: number }) {
    const [selected, setSelected] = useState(false);
    const labelText = `List item #${index}${selected ? " (selected)" : ""}`



    return (
        <ListboxItem<HTMLLIElement>
            selected={selected}
            index={index}
            disabled={false}
            getSortValue={returnZero}

            onPressSync={() => { setSelected(p => !p) }}
            render={info => {
                return (
                    <li {...useMergedProps(info.props, info.propsPressStable)}>{labelText}</li>
                )
            }}
        />
    )
})



export function Blurb() {
    return (
        <>
            <p><a href="https://www.w3.org/WAI/ARIA/apg/patterns/listbox/">In accordance with the ARIA guidelines for Listbox patterns,</a> this widget supports the following:</p>
            <ul>
                <li>The children are treated as a composite component with list navigation; see <code>AiraSingleSelectList</code> for more information</li>
                <li>The parent checkbox switches between 3 states, remembering the last state that caused it to be "mixed".</li>
                <li>The parent checkbox reacts to each child's <code>checked</code> prop and updates its own internal <code>checked</code> attribute (be aware of this if they're asyncronous, as you'll want to ensure they all resolve on the same tick with <code>Promise.all</code> to not clobber the user's inputs).</li>
                <li>The children are treated as a composite component with list navigation; see <code>AiraSingleSelectList</code> for more information</li>
                <li>Grouping is supported</li>
                <li>Sorting/reordering is supported, though not provided by default, as it's mutually exclusive with grouping.</li>
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
            <label><input type="number" min={0} value={count} onInput={e => setCount(e.currentTarget.valueAsNumber)} /> # of list items</label>
            <div>
                <Listbox<HTMLUListElement, HTMLLIElement, HTMLLabelElement> 
                selectedIndex={null} 
                ariaLabel={null} 
                ariaPropName="aria-selected"
                orientation="vertical" 
                selectionLimit="multi" 
                render={info => {
                    return (
                        <>
                        <label {...info.propsListboxLabel}></label>
                        <ul {...info.propsListbox}>{Array.from((function* () {
                            for (let i = 0; i < count; ++i) {
                                yield <DemoListItem index={i} key={i} />
                            }
                        })())}</ul>
                        </>
                    )
                }} />
            </div>
        </>
    )
}