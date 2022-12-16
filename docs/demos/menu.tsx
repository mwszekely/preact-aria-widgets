
import { returnZero, useState } from "preact-prop-helpers";
import { defaultRenderPortal } from "../../component/dialog";
import { Menu } from "../../component/menu";
import { MenuItem } from "../../component/menubar";
import { EventDetail } from "../../props";

function DemoListItem({ index }: { index: number }) {

    return (
        <MenuItem<HTMLLIElement>
            index={index}
            ariaPropName={null}
            getSortValue={returnZero}
            selectionMode="disabled"
            role="menuitem"
            onPress={e => alert(`Menu item #${e[EventDetail].index} pressed`)}
            disabled={false}
            render={info => <li {...info.props}>{`Menu item #${index}`}</li>}
        />
    )
}

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
                <li>Unlike most components, the label of a menu is implicitly the button that opens it and is not a separate, standalone element. If this button doesn't label the menu well, you must use the <code>ariaLabel</code> prop to compensate.</li>
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
                <Menu<HTMLDivElement, HTMLUListElement, HTMLLIElement, HTMLButtonElement>
                    orientation="vertical"
                    onOpen={() => setOpen(true)}
                    onClose={() => setOpen(false)}
                    open={open}
                    openDirection="down"
                    render={info => {
                        return (
                            <>
                                <button {...info.propsTrigger} onClick={() => setOpen(o => !o)}>Menu trigger</button>
                                {defaultRenderPortal({
                                    portalId: "portal", children: (
                                        <div {...info.propsSurface} hidden={!open}>
                                            <ul {...info.propsTarget}>{Array.from((function* () {
                                                for (let i = 0; i < count; ++i) {
                                                    yield <div><DemoListItem index={i} key={i} /></div>
                                                }
                                            })())}</ul>
                                        </div>
                                    )
                                })}
                            </>
                        )
                    }/*defaultRenderMenu({
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
                    })*/} />
            </div>
        </>
    )
}