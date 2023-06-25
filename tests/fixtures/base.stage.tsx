import { useSearchParamStateDeclarative } from "preact-prop-helpers";
import { useEffect, useRef } from "preact/hooks";
import { fromStringNumber } from "./base.types.js";

export function TestBasesSanityCheck() {

        let which = useRef(9);
        const [s, setS] = useSearchParamStateDeclarative({ key: "sanity-check", initialValue: 9, stringToValue: fromStringNumber, defaultReason: "replace" });
    
        console.assert(s == which.current);
        console.assert(new URL(window.location.toString()).searchParams.get("sanity-check") == (which.current as number | string));
    
        useEffect(() => {
            which.current = 10;
            setS(10);
        }, []);
    
        // Please, it's 2023, this should never ever fail, surely, please. (please)
        return (
            <>
                <div class="default">default</div>
                <div class="encoding">符号化テスト</div>
            </>
        )
    }