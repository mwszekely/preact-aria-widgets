import { Context, createContext } from "preact";
import { GetIndex, UseSingleSelectionChildParameters } from "preact-prop-helpers";
import { ForwardFn, forwardRef, memo, useContext } from "preact/compat";

export function memoForwardRef<T extends ForwardFn<any, any>>(fn: T): T {
    return memo(forwardRef(fn)) as T;
}

export const ContextDefaults = {
    collator: createContext<Intl.Collator | null>(null),
    pageNavigationSize: createContext<number>(0.1),
    typeaheadTimeout: createContext(1000),
    noTypeahead: createContext(false),
    getIndex: createContext<GetIndex>(v => v.props.index),
    disableArrowKeys: createContext(false),
    disableHomeEndKeys: createContext(false),
    getWindow: createContext(() => globalThis.window as Window),
    focusOpener: createContext((e: any) => e?.focus?.()),
    getText: createContext((e: any) => (e?.textContent ?? "") as string | null),
    selectionMode: createContext<UseSingleSelectionChildParameters<any, any>["singleSelectionChildParameters"]["selectionMode"]>("activation"),
}

type DefaultExcepts = keyof typeof ContextDefaults;

type ContextType<T extends Context<any>> = T extends Context<infer C> ? C : unknown;

export function useDefault<K extends DefaultExcepts>(context: K, userValue: undefined | ContextType<(typeof ContextDefaults)[K]>): ContextType<(typeof ContextDefaults)[K]> {
    const defaultValue = useContext<ContextType<(typeof ContextDefaults)[K]>>(ContextDefaults[context] as Context<any>);
    return userValue ?? defaultValue;
}

export const ParentDepthContext = createContext(0);

type PartialExceptD<T, KeepRequired extends keyof T> = Partial<Pick<T, Exclude<keyof T, KeepRequired>>> & Pick<T, KeepRequired>;
export type PartialExcept<T, K extends keyof T> = PartialExceptD<T, K>;
