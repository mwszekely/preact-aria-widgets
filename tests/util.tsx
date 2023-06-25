import { RenderableProps } from "preact";
import { useForceUpdate, useSearchParamStateDeclarative } from "preact-prop-helpers";
import { useCallback, useLayoutEffect, useRef, type StateUpdater } from "preact/hooks";
import { TestingConstants, TestingConstantsParameter } from "./fixtures/base.types.js";



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
function useTestSyncState2<S>(initialState: S | (() => S), key: string, fromString: (str: string) => S | null): readonly [S, (...args: Parameters<StateUpdater<S>>) => Promise<ReturnType<StateUpdater<S>>>, () => S] {


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

    return [value, useCallback(async (...args: Parameters<StateUpdater<S>>) => {
        setValue(...(args as [never]));
        forceUpdate();  // TODO: It's either this, or resolve the promise immediately (if the value hasn't changed)
        return promiseRef.current ??= new Promise<void>(resolve => { resolveRef.current = resolve; })
    }, []), getValue] as const;
}

export function TestItem({ children }: RenderableProps<{}>) {
    return (
        <div class="tests-container">
            {children}
        </div>
    )
}