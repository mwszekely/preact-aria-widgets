import { RenderableProps, render } from "preact";
import { useForceUpdate, useSearchParamState } from "preact-prop-helpers";
import { StateUpdater, useCallback, useEffect, useRef, useState } from "preact/hooks";
import { Button } from "../../dist/index.js";
import type { TestingConstants } from "../fixtures/shared.js";
import { TestBasesButton } from "./spec-button.js";
import { TestBasesToolbar } from "./spec-toolbar.js";


declare module globalThis {
    let installTestingHandler: <K extends keyof TestingConstants, K2 extends keyof TestingConstants[K]>(key: K, Key2: K2, func: TestingConstants[K][K2]) => void;
    let _TestingConstants: TestingConstants;
    let getTestingHandler: <K extends keyof TestingConstants, K2 extends keyof TestingConstants[K]>(key: K, Key2: K2) => TestingConstants[K][K2];
}




globalThis.installTestingHandler = function installTestingHandler<K extends keyof TestingConstants, K2 extends keyof TestingConstants[K]>(key: K, Key2: K2, func: TestingConstants[K][K2]) {
    (globalThis)._TestingConstants ??= {} as any;
    (globalThis)._TestingConstants[key] ??= {} as any;
    (globalThis)._TestingConstants[key][Key2] = func;
};
globalThis.getTestingHandler = function getTestingHandler<K extends keyof TestingConstants, K2 extends keyof TestingConstants[K]>(key: K, Key2: K2) {
    (globalThis)._TestingConstants ??= {} as any;
    (globalThis)._TestingConstants[key] ??= {} as any;
    return (globalThis)._TestingConstants[key][Key2] ?? undefined!; // || (noop as never);
};

function noop() { }

declare global {
    let installTestingHandler: (typeof globalThis)["installTestingHandler"];
    let _TestingConstants: TestingConstants;
    let getTestingHandler: (typeof globalThis)["getTestingHandler"];
}


/*
function TestBasesMenu() {
    return (
        <TestItem>
            <Menu anchor={<Button onPress={null}>Open Menu</Button>}>
                <MenuItem onPress={useCallback(async (closeMenu, ...rest) => await (getTestingHandler("Menu", "onMenuItem") ?? (async (closeMenu) => { await new Promise(resolve => setTimeout(resolve, 1000)); closeMenu(); }))(closeMenu, ...rest, 0), [])} index={0}>Item 0</MenuItem>
                <MenuItem onPress={useCallback(async (closeMenu, ...rest) => await (getTestingHandler("Menu", "onMenuItem") ?? (async (closeMenu) => { await new Promise(resolve => setTimeout(resolve, 1000)); closeMenu(); }))(closeMenu, ...rest, 1), [])} index={1}>Another Item (1)</MenuItem>
                <MenuItem onPress={useCallback(async (closeMenu, ...rest) => await (getTestingHandler("Menu", "onMenuItem") ?? (async (closeMenu) => { await new Promise(resolve => setTimeout(resolve, 1000)); closeMenu(); }))(closeMenu, ...rest, 2), [])} index={2} disabled>Disabled Item (2)</MenuItem>
                <MenuItem onPress={useCallback(async (closeMenu, ...rest) => await (getTestingHandler("Menu", "onMenuItem") ?? (async (closeMenu) => { await new Promise(resolve => setTimeout(resolve, 1000)); closeMenu(); }))(closeMenu, ...rest, 3), [])} index={3}>The next item is missing (3)</MenuItem>
                <MenuItem onPress={useCallback(async (closeMenu, ...rest) => await (getTestingHandler("Menu", "onMenuItem") ?? (async (closeMenu) => { await new Promise(resolve => setTimeout(resolve, 1000)); closeMenu(); }))(closeMenu, ...rest, 5), [])} index={5}>Final Item (5)</MenuItem>
            </Menu>
            <input type="text" value="I can take focus" />
        </TestItem>
    )
}
*/
function TestBasesSanityCheck() {
    // Please, it's 2023, this should never ever fail, surely, please. (please)
    return (
        <>
            <div class="default">default</div>
            <div class="encoding">符号化テスト</div>
        </>
    )
}

const TestBases = {
    "sanity-check": <TestBasesSanityCheck />,
    "button": <TestBasesButton />,
    "toolbar": <TestBasesToolbar />,
    /*"menu": <TestBasesMenu />,*/
}

declare module 'preact-prop-helpers' {
    interface SearchParamStates {
        "test-base": string;
    }
}
function TestsContainer() {
    const [getBase, setBase] = useSearchParamState({ key: "test-base", fromString: e => e, toString: e => e, initialValue: "" });
    const base = getBase();

    if (!base) {
        return (
            <>
                <p><strong>No test selected</strong>. View any of the available bases below:</p>
                <ul>{Object.entries(TestBases).map(([name, component]) => <li><code><a href={`?test-base=${name}`}>{name}</a></code></li>)}</ul>
            </>
        );
    }
    return (
        <div class="tests-container">
            {Object.entries(TestBases).map(([name, component]) => {
                if (name === base)
                    return component;
                return null;
            })}
        </div>
    )
}

document.addEventListener("DOMContentLoaded", () => {

    render(<TestsContainer />, document.body);
})

