import { useMergedProps } from "preact-prop-helpers";
import { Gridlist, GridlistCell, GridlistRow } from "../../dist/preact/index.js";
import { MissingIndex, TestItem, fromStringNumber, fromStringString, useTestSyncState } from "../util.js";
import { WithColSpanIndex, WithFocusableIndex } from "./gridlist.types.js";
export function TestBasesGridlist() {
    const [childCount] = useTestSyncState("Accordion", "setChildCount", 10, fromStringNumber);
    const [orientation] = useTestSyncState("Accordion", "setOrientation", "vertical", fromStringString);

    installTestingHandler("Button", "onPress", e => alert(e))
    return (
        <TestItem>
            <p>Every {MissingIndex}-th row and/or column is "missing" (that grid cell isn't rendered/the hook isn't called).</p>
            <p>Every {WithColSpanIndex}-th column's cell has an ever-increasing <code>colSpan</code> (modulo 10).</p>
            <p>Every {WithFocusableIndex}-th column's cell has an input that receives focus instead of the grid cell itself.</p>
            <Gridlist<HTMLTableElement, HTMLTableRowElement, HTMLLabelElement>
                ariaLabel={"Gridlist test"}
                //groupingType="without-groups"
                singleSelectedIndex={null}
                singleSelectionMode="disabled"
                singleSelectionAriaPropName="aria-selected"
                children={Array.from(function* () {
                    for (let i = 0; i < childCount; ++i) {
                        yield <Row index={i} />
                    }
                }())}
                render={gridInfo => {
                    return (
                        <>
                            <label {...gridInfo.propsLabel}>Gridlist test</label>
                            <table data-gridlist {...gridInfo.props}>
                                <tbody role="rowgroup">{gridInfo.rearrangeableChildrenReturn.children}</tbody>
                            </table>
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
        <GridlistRow<HTMLTableRowElement, HTMLTableCellElement>

            index={index}
            render={rowInfo => {
                return (
                    <tr data-gridlist-row {...rowInfo.props} >

                        {Array.from(function* () {
                            for (let i = 0; i < 10; ++i) {
                                let colspan = (i !== WithColSpanIndex ? 0 : (index % 10)) + 1
                                if (i == MissingIndex)
                                    yield <td colSpan={colspan}>(missing)</td>;
                                else
                                    yield <GridlistCell<HTMLTableCellElement> index={i} colSpan={colspan} render={cellInfo => {
                                        if (i == WithFocusableIndex)
                                            return (<td colSpan={colspan} {...useMergedProps(cellInfo.propsCell)} data-gridlist-cell><input {...useMergedProps(cellInfo.propsTabbable, cellInfo.propsPress)} type="checkbox">Select row #{index}</input></td>)
                                        else
                                            return (<td colSpan={colspan} {...useMergedProps(cellInfo.propsCell, cellInfo.propsTabbable)} data-gridlist-cell>({i}, {index})</td>)
                                    }} />

                                i += (colspan - 1);
                            }
                        }())}

                    </tr>
                );
            }} />
    )
}


