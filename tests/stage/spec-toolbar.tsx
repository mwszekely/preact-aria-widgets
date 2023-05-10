import { Button, Toolbar, ToolbarChild } from "../../dist/index.js";
import { TestItem, useTestSyncState } from "./util.js";
import { returnZero } from "preact-prop-helpers"

export function TestBasesToolbar() {
    const selectedIndex = useTestSyncState("Toolbar", "setSelectedIndex", null);
    const childCount = useTestSyncState("Toolbar", "setChildCount", 10);
    const disabled = useTestSyncState("Toolbar", "setDisabled", false);
    installTestingHandler("Button", "onPress", e => alert(e))
    return (
        <TestItem>
            <Toolbar<HTMLUListElement, HTMLLIElement, HTMLLabelElement>
                ariaPropName="aria-selected"
                disabled={disabled}
                ariaLabel="Toolbar"
                orientation="horizontal"
                selectedIndex={selectedIndex}
                render={info => {
                    return (
                        <>
                            <label {...info.propsLabel} />
                            <ul {...info.propsToolbar}>
                                <TestBasesToolbarChildren count={childCount} />
                            </ul>
                        </>
                    )
                }} />
            <input type="text" value="I can take focus" />
        </TestItem>
    )
}

function TestBasesToolbarChildren({ count }: { count: number }) {
    return (
        <>
            {Array.from(function* () {
                for (let i = 0; i < count; ++i) {
                    yield (
                        <ToolbarChild<HTMLLIElement> index={i} disabledProp="aria-disabled" getSortValue={returnZero} render={info => <li {...info.props}>List Item #{i}</li>} />
                    );
                }
            }())}
        </>
    )
}
