import { Context } from "preact";
import { GetIndex } from "preact-prop-helpers";
import { ForwardFn } from "preact/compat";
export declare function memoForwardRef<T extends ForwardFn<any, any>>(fn: T): T;
export declare const ContextDefaults: {
    collator: Context<Intl.Collator | null>;
    pageNavigationSize: Context<number>;
    typeaheadTimeout: Context<number>;
    noTypeahead: Context<boolean>;
    getIndex: Context<GetIndex>;
    disableArrowKeys: Context<boolean>;
    disableHomeEndKeys: Context<boolean>;
    getWindow: Context<() => Window>;
    focusOpener: Context<(e: any) => any>;
    getText: Context<(e: any) => string | null>;
    selectionMode: Context<"disabled" | "focus" | "activation">;
};
type DefaultExcepts = keyof typeof ContextDefaults;
type ContextType<T extends Context<any>> = T extends Context<infer C> ? C : unknown;
export declare function useDefault<K extends DefaultExcepts>(context: K, userValue: undefined | ContextType<(typeof ContextDefaults)[K]>): ContextType<(typeof ContextDefaults)[K]>;
export declare const ParentDepthContext: Context<number>;
type PartialExceptD<T, KeepRequired extends keyof T> = Partial<Pick<T, Exclude<keyof T, KeepRequired>>> & Pick<T, KeepRequired>;
export type PartialExcept<T, K extends keyof T> = PartialExceptD<T, K>;
export {};
//# sourceMappingURL=util.d.ts.map