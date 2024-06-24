import { useMergedProps } from "preact-prop-helpers";
import { Toolbar, ToolbarChild } from "../../dist/preact/index.js";
import { TestItem, fromStringBoolean, fromStringNumber, useTestSyncState } from "../util.js";

export function TestBasesToolbar() {
    const [selectedIndex] = useTestSyncState("Toolbar", "setSelectedIndex", null, fromStringNumber);
    const [childCount] = useTestSyncState("Toolbar", "setChildCount", 10, fromStringNumber);
    const [disabled] = useTestSyncState("Toolbar", "setDisabled", false, fromStringBoolean);
    installTestingHandler("Button", "onPress", e => alert(e))
    return (
        <TestItem>
            <Toolbar<HTMLUListElement, HTMLLIElement, HTMLLabelElement>
                singleSelectionAriaPropName="aria-selected"
                multiSelectionMode="disabled"
                singleSelectionMode="activation"
                disabled={disabled}
                ariaLabel="Toolbar"
                orientation="horizontal"
                singleSelectedIndex={selectedIndex}
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
                        <ToolbarChild<HTMLLIElement> index={i} disabledProp="aria-disabled" render={info => <li {...useMergedProps(info.propsChild, info.propsTabbable)}>List Item #{i}</li>} />
                    );
                }
            }())}
        </>
    )
}
