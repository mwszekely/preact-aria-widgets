import { Button } from "../../dist/index.js";
import { TestItem, useTestSyncState } from "./util.js";

export function TestBasesButton() {
    const disabledType = useTestSyncState("Button", "setDisabledType", "soft");
    const disabled = useTestSyncState("Button", "setDisabled", false);
    const pressed = useTestSyncState("Button", "setPressed", undefined);
    installTestingHandler("Button", "onPress", e => alert(e))
    return (
        <TestItem>
        <Button<HTMLButtonElement> onPress={(e) => { console.log("Button (button) clicked"); let ret = getTestingHandler("Button", "onPress")(e); console.log(ret); return ret; }} disabled={disabled? (disabledType) : false} pressed={pressed} tagButton="button" render={info => <button {...info.props}>Button</button>} />
        <Button<HTMLDivElement> onPress={(e) => { console.log("Button (div) clicked"); let ret = getTestingHandler("Button", "onPress")(e); console.log(ret); return ret; }} disabled={disabled? (disabledType) : false} pressed={pressed} tagButton="div" render={info => <div {...info.props}>Div</div>} />
            <input type="text" value="I can take focus" />
        </TestItem>
    )
}
