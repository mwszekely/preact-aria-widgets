import { Context, Ref } from "preact";
import { GetIndex, Nullable, VNode } from "preact-prop-helpers";
import { ForwardFn } from "preact/compat";
export declare function memoForwardRef<T extends ForwardFn<any, any>>(fn: T): T;
export declare function useComponent<R>(ref: Nullable<Ref<R>>, render: (info: R) => VNode, Context: null | Context<(R extends {
    context?: infer C;
} ? C : unknown)>, info: R): import("preact").JSX.Element;
/**
 * Quickly puts together component props from the hook it's based on.
 *
 * @param ReturnType - The `info` that is passed to the render function, and what the hook returns
 * @param OtherProps - All the parameters, squashed down with `Get5` or `Get12` or whatever.
 * @param RequiredProps - Which props are required -- all others are optional in the component
 */
export type GenericComponentProps<ReturnType, OtherProps, RequiredProps extends keyof OtherProps> = PartialExcept<OtherProps, RequiredProps> & {
    imperativeHandle?: Ref<ReturnType>;
    render(info: ReturnType): VNode;
};
export type GenericPropsBase<ReturnType, OtherProps> = OtherProps & {
    imperativeHandle?: Ref<ReturnType>;
};
export declare const ContextDefaults: {
    collator: Context<Intl.Collator | null>;
    pageNavigationSize: Context<number>;
    typeaheadTimeout: Context<number>;
    focusSelf: Context<(e: any) => void>;
    noTypeahead: Context<boolean>;
    getIndex: Context<GetIndex>;
    disableArrowKeys: Context<boolean>;
    disableHomeEndKeys: Context<boolean>;
    getWindow: Context<() => Window>;
    getDocument: Context<() => Document>;
    focusOpener: Context<(e: any) => void>;
    getText: Context<(e: any) => string | null>;
    selectionMode: Context<"disabled" | "focus" | "activation">;
};
type DefaultExcepts = keyof typeof ContextDefaults;
type ContextType<T extends Context<any>> = T extends Context<infer C> ? C : unknown;
export declare function useDefault<K extends DefaultExcepts>(context: K, userValue: null | undefined | ContextType<(typeof ContextDefaults)[K]>): ContextType<(typeof ContextDefaults)[K]>;
export declare const ParentDepthContext: Context<number>;
type PartialExceptD<T, KeepRequired extends keyof T> = Partial<Pick<T, Exclude<keyof T, KeepRequired>>> & Pick<T, KeepRequired>;
/**
 * Like `Partial<T>`, but the properties given by `K` will **NOT** be made partial -- they'll remain required.
 */
export type PartialExcept<T, K extends keyof T> = PartialExceptD<T, K>;
export declare function useDefaultRenderPortal({ portalId, children }: {
    portalId: string;
    children: VNode;
}): VNode;
export {};
//# sourceMappingURL=util.d.ts.map