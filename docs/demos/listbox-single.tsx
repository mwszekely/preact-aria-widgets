
import { useState } from "preact-prop-helpers";
import { memo } from "preact/compat";
import { defaultRenderListboxSingleItem, ListboxSingleItem } from "../../component/listbox-single";
import { EventDetail, ListboxSingle, defaultRenderListboxSingle } from "../../index";

function getDocument() { return window.document; }

const DemoListItem = memo(function DemoListItem({ index }: { index: number }) {

    return (
        <ListboxSingleItem<HTMLLIElement> index={index} getDocument={getDocument} disabled={false} text={`List item #${index}`} render={defaultRenderListboxSingleItem({ tagListItem: "li", makePropsListItem: ({ singleSelection: { selected } }) => ({ children: `List item #${index}${selected ? " (selected)" : ""}` }) })} />
    )
})



export function Blurb() {
    return (
        <>
            <p><a href="https://www.w3.org/WAI/ARIA/apg/patterns/listbox/">In accordance with the ARIA guidelines for Listbox patterns,</a> this widget supports the following:</p>
            <ul>
                <li>In terms of keyboard navigation and tabbing through elements, a Listbox is considered a <strong>single</strong> tab stop; in other words, no matter how many list items there are in a Listbox, it only takes one press of the Tab button to go through it.
                    <ul>
                        <li>When a Listbox is tabbed into, the most recently selected item is given focus</li>
                        <li>Pressing Tab again navigates out of the listbox; no other list items are tabbable other than the one currently designated.</li>
                        <li>Pressing the arrow keys navigates through the Listbox one item at a time</li>
                        <li>Pressing the Home/End keys move focus to the first/last items respectively</li>
                        <li>Typing any sequence of text starts typeahead that navigates to the next item that matches what's being typed</li>
                        <li>Focus &amp; selection management is as optimized as possible; only two children re-render at a time when focus or selection changes</li>
                        <li>These apply generally to all composite components with a variable number of children (Tab Lists, Radio Groups, Multi-Select Listboxes etc.)</li>
                    </ul>
                </li>
                <li>Rather than each individual list item knowing whether it is selected or not (as with multi-select lists), here the parent knows the <code>selectedIndex</code> and simply notifies the (max two) relevant children any time it changes.</li>
                <li>Grouping is supported</li>
                <li>Sorting/reordering is supported, though not provided by default, as it's mutually exclusive with grouping.</li>
            </ul>
            <p><strong>Things <em>not</em> handled:</strong></p>
            <ul>
                <li>Listboxes do not support interactive content within them (e.g. a dropdown menu), as ARIA specifies that this is a different pattern.</li>
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
            <label><input type="number" min={0} value={count} onInput={e => setCount(e.currentTarget.valueAsNumber)} /> # of list items</label>
            <div>
                <ListboxSingle
                    render={defaultRenderListboxSingle({
                        tagLabel: "label", tagList: "ol", makePropsLabel: () => ({}), makePropsList: () => ({
                            children: <>{Array.from((function* () {
                                for (let i = 0; i < count; ++i) {
                                    yield <DemoListItem index={i} key={i} />
                                }
                            })())}</>
                        })
                    })}
                    selectionMode="activation"
                    tagLabel="label"
                    tagList="ol"
                    selectedIndex={selectedIndex}
                    onSelect={e => setSelectedIndex(e[EventDetail].selectedIndex)} />
            </div>
        </>
    )
}