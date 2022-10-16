
import { useState } from "preact-prop-helpers";
import { defaultRenderMenu, Menu } from "../../component/menu";
import { defaultRenderMenuItem, MenuItem } from "../../component/menubar";
import { EventDetail } from "../../props";

function DemoListItem({ index }: { index: number }) {

    return (
        <MenuItem<HTMLLIElement>
            index={index}
            focusSelf={e => e.focus()}
            role="menuitem"
            text={`List item #${index}`}
            subInfo={undefined}
            onPress={e => alert(`Menu item #${e[EventDetail].index} pressed`)}
            disabled={false}
            getDocument={getDocument}
            render={defaultRenderMenuItem({ tagChild: "li", makePropsChild: () => ({ children: `Menu item #${index}` }) })}
        />
    )
}

function getDocument() { return window.document; }

export function Blurb() {
    return (
        <>
            <p><a href="https://www.w3.org/WAI/ARIA/apg/patterns/listbox/">In accordance with the ARIA guidelines for Listbox patterns,</a> this widget supports the following:</p>
            <ul>
                <li>The children are treated as a composite component with list navigation; see <code>AiraSingleSelectList</code> for more information</li>
                <li>When opened, the menu will focus the first element within it. When closed (by pressing escape, pressing the button again, or tabbing out of the menu), the button that opened it will have focus restored to it.</li>
                <li>When the menu is closed because another element on the page was focused instead, focus will not be modified.</li>
            </ul>
            <p><strong>Things <em>not</em> handled:</strong></p>
            <ul>
                <li>TODO</li>
            </ul>
        </>
    )
}

export function Code() {
    return (<code>{``}</code>)
}

export function Demo() {
    const [count, setCount] = useState(5);
    const [open, setOpen] = useState(false);


    return (
        <>
            <Blurb />
            <Code />
            <label><input type="number" min={0} value={count} onInput={e => setCount(e.currentTarget.valueAsNumber)} /> # of menu items</label>
            <div>
                <Menu<HTMLDivElement, HTMLUListElement, HTMLDivElement, HTMLLIElement, HTMLButtonElement>
                    orientation="vertical"
                    getDocument={getDocument}
                    onOpen={() => setOpen(true)}
                    onClose={() => setOpen(false)}
                    open={open}
                    openDirection="down"
                    render={defaultRenderMenu({
                        tagButton: "button",
                        tagMenu: "ul",
                        tagSentinel: "div",
                        tagSurface: "div",
                        portalId: "portal",
                        makePropsButton: () => ({ children: "Open menu" + (open ? " (open)" : " (closed)") }),
                        makePropsMenu: () => ({
                            children: <>{Array.from((function* () {
                                for (let i = 0; i < count; ++i) {
                                    yield <div><DemoListItem index={i} key={i} /></div>
                                }
                            })())}</>
                        }),
                        makePropsSurface: () => ({ style: { display: !open ? "none" : undefined } }),
                        makePropsSentinel: () => ({}),
                    })} />
            </div>
        </>
    )
}