import { RenderableProps } from "preact";
import { useForceUpdate, useSearchParamStateDeclarative, useState } from "preact-prop-helpers";
import { useCallback, useLayoutEffect, useRef } from "preact/hooks";
import type { AccordionTestingConstants } from "./fixtures/accordion.types.js";
import type { ButtonTestingConstants } from "./fixtures/button.types.js";
import { GridlistTestingConstants } from "./fixtures/gridlist.types.js";
import type { MenuTestingConstants } from "./fixtures/menu.types.js";
import type { ToolbarTestingConstants } from "./fixtures/toolbar.types.js";

export const DisabledIndex = 4;
export const MissingIndex = 6;

export type TestingConstantsParameter<K extends keyof TestingConstants, K2 extends keyof TestingConstants[K]> = TestingConstants[K][K2] extends (...args: any[]) => any ? Parameters<TestingConstants[K][K2]>[0] : never;

export interface TestingConstants {
    Button: ButtonTestingConstants;
    Menu: MenuTestingConstants;
    Toolbar: ToolbarTestingConstants,
    Accordion: AccordionTestingConstants;
    Gridlist: GridlistTestingConstants;
}


export function fromStringBoolean(s: string | null) { return s == null? null : (s != "false") }
export function fromStringNumber(s: string | null) { return s == null || s == "null"? null : +s; }
export function fromStringString(s: string | null) { return s == null || s == "null"? null : s as never; }
export function fromStringArray<S>(fromStringElement: (s: string) => S) { return function (s: string) { return s == null || s == "null"? null : s.split(",").map(fromStringElement) as [...never] } }

export function useTestSyncState<K extends keyof TestingConstants, K2 extends keyof TestingConstants[K]>(key: K, key2: K2, initialState: TestingConstantsParameter<K, K2>, fromString: (str: string) => TestingConstantsParameter<K, K2> | null) {
    type S = TestingConstantsParameter<K, K2>;
    const [value, setValue, getValue] = useTestSyncState2<S>(initialState, `${key2 as string}`, fromString);
    installTestingHandler(key, key2, setValue as TestingConstants[K][K2]);
    return [value, setValue, getValue] as const;
}



/**
 * A special version of `useState` whose `setState` returns a promise that resolves a bit after the function finishes rendering.
 * 
 * By calling this from Playwright (via `run`), a component's state can be changed and then inspected afterwards.
 * @param initialState 
 * @returns 
 */
function useTestSyncState2<S>(initialState: S | (() => S), key: string, fromString: (str: string) => S | null): ReturnType<typeof useState<S>> {

    type A0 = ReturnType<typeof useState<S>>[0];
    type A1 = ReturnType<typeof useState<S>>[1];
    type A2 = ReturnType<typeof useState<S>>[2];

    let resolveRef = useRef<(() => void) | null>(null);
    let promiseRef = useRef<Promise<void> | null>(null);
    const [value, setValue, getValue] = useSearchParamStateDeclarative({ key: key as never, initialValue: initialState as never, stringToValue: fromString as never, valueToString: value => `${value}` });

    const forceUpdate = useForceUpdate();

    // Explicitly wait until we've had a chance to draw (i.e. all component children have also rendered) with useEffect
    useLayoutEffect(() => {
        // Also wait for a short moment afterwards just in case there's more settling that needs to be done
        resolveRef.current?.();
        //let handle = setTimeout(() => { resolveRef.current?.(); resolveRef.current = promiseRef.current = null; }, 50);
        //return () => clearTimeout(handle);
    });

    const a0: A0 = value;
    const a1: A1 = useCallback(async (...args: Parameters<A1>) => {
        setValue(...(args as [never]));
        forceUpdate();  // TODO: It's either this, or resolve the promise immediately (if the value hasn't changed)
        return promiseRef.current ??= new Promise<void>(resolve => { resolveRef.current = resolve; })
    }, []);
    const a2: A2 = getValue;

    return [a0, a1, a2] as const;
}

export function TestItem({ children }: RenderableProps<{}>) {
    return (
        <div class="tests-container">
            {children}
        </div>
    )
}