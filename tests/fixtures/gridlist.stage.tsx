import { returnZero } from "preact-prop-helpers";
import { Gridlist, GridlistChild, GridlistRow } from "../../dist/index.js";
import { TestItem, useTestSyncState } from "../util.js";
import { MissingIndex, fromStringNumber, fromStringString } from "./base.types.js";
import { WithFocusableIndex } from "./gridlist.types.js";
export function TestBasesGridlist() {
    const [childCount] = useTestSyncState("Accordion", "setChildCount", 10, fromStringNumber);
    const [orientation] = useTestSyncState("Accordion", "setOrientation", "vertical", fromStringString);

    installTestingHandler("Button", "onPress", e => alert(e))
    return (
        <TestItem>
            <Gridlist<HTMLDivElement, HTMLDivElement, HTMLDivElement, HTMLLabelElement>
                ariaLabel={"Gridlist test"}
                groupingType="without-groups"
                orientation={orientation}
                selectedIndex={null}
                selectionLimit="none"
                ariaPropName="aria-selected"

                render={gridInfo => {
                    return (
                        <>
                            <label {...gridInfo.propsGridlistLabel}>Gridlist test</label>
                            <div data-gridlist {...gridInfo.propsGridlist}>
                                {Array.from(function* () {
                                    for (let i = 0; i < childCount; ++i) {
                                        yield <Row index={i} />
                                    }
                                }())}
                            </div>
                        </>
                    )
                }} />
        </TestItem>
    )
}

function Row({ index }: { index: number }) {
    //const [open, setOpen] = useTestSyncState("Accordion", `setChildOpened_${index}`, null, fromStringString);

    if (index == MissingIndex)
        return <div aria-hidden><div data-accordion-header>(There is no section #{index}&mdash;it is a hole in the array)<div data-accordion-header-button /></div><div data-accordion-section /></div>

    return (
        <GridlistRow<HTMLDivElement, HTMLDivElement>

            index={index}
            getSortValue={returnZero}
            render={rowInfo => {
                return (
                    <div data-gridlist-row {...rowInfo.props} >

                        {Array.from(function* () {
                            for (let i = 0; i < 10; ++i) {
                                yield <GridlistChild<HTMLDivElement> index={i} render={cellInfo => {
                                    if (i == MissingIndex)
                                        return <div>(missing)</div>;
                                    if (i == WithFocusableIndex)
                                        return (<div {...cellInfo.props} data-gridlist-cell><label><input type="checkbox" />Focusable</label></div>)
                                    else
                                        return (<div {...cellInfo.props} data-gridlist-cell>(i, index)</div>)
                                }} />
                            }
                        }())}

                    </div>
                );
            }} />
    )
}


