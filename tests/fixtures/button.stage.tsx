import { Button } from "../../dist/preact/index.js";
import { TestItem, fromStringBoolean, fromStringString, useTestSyncState } from "../util.js";

export function TestBasesButton() {
    const [disabledType] = useTestSyncState("Button", "setDisabledType", "soft", fromStringString);
    const [disabled] = useTestSyncState("Button", "setDisabled", false, fromStringBoolean);
    const [pressed] = useTestSyncState("Button", "setPressed", undefined, fromStringBoolean);
    installTestingHandler("Button", "onPress", e => alert(e))
    return (
        <TestItem>
            <Button<HTMLButtonElement> onPressSync={(e) => { console.log("Button (button) clicked"); let ret = getTestingHandler("Button", "onPress")(e); console.log(ret); return ret; }} disabled={disabled ? (disabledType) : false} pressed={pressed} tagButton="button" render={info => <button {...info.props}>Button</button>} />
            <Button<HTMLDivElement> onPressSync={(e) => { console.log("Button (div) clicked"); let ret = getTestingHandler("Button", "onPress")(e); console.log(ret); return ret; }} disabled={disabled ? (disabledType) : false} pressed={pressed} tagButton="div" render={info => <div {...info.props}>Div</div>} />
            <input type="text" value="I can take focus" />
        </TestItem>
    )
}
