import { Context, Ref, createContext } from "preact";
import { GetIndex, Nullable, UseSingleSelectionParameters, VNode, focus } from "preact-prop-helpers";
import { ForwardFn, createPortal, forwardRef, memo, useContext, useImperativeHandle, useRef } from "preact/compat";

export function memoForwardRef<T extends ForwardFn<any, any>>(fn: T): T {
    return memo(forwardRef(fn)) as T;
}

export function useComponent<R>(ref: Nullable<Ref<R>>, render: (info: R) => VNode, Context: null | Context<(R extends {context?: infer C}? C : unknown)>, info: R) {
    useImperativeHandle(ref!, () => info);
    if (Context) {
        return <Context.Provider value={(info as { context?: any }).context}>{render(info)}</Context.Provider>
    }
    else {
        return render(info);
    }
}

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
}

export type GenericPropsBase<ReturnType, OtherProps> = OtherProps & {
    imperativeHandle?: Ref<ReturnType>;
}

export const ContextDefaults = {
    collator: createContext<Intl.Collator | null>(null),
    pageNavigationSize: createContext<number>(0.1),
    typeaheadTimeout: createContext(1000),
    focusSelf: createContext((e: any) => (e as Element as HTMLElement).focus?.()),
    noTypeahead: createContext(false),
    getIndex: createContext<GetIndex>(v => v.props.index),
    disableArrowKeys: createContext(false),
    disableHomeEndKeys: createContext(false),
    getWindow: createContext(() => globalThis.window as Window),
    getDocument: createContext(() => globalThis.document as Document),
    focusOpener: createContext((e: any) => focus(e)),
    getText: createContext((e: any) => (e?.textContent ?? "") as string | null),
    selectionMode: createContext<UseSingleSelectionParameters<any, any>["singleSelectionParameters"]["selectionMode"]>("activation"),
}

type DefaultExcepts = keyof typeof ContextDefaults;

type ContextType<T extends Context<any>> = T extends Context<infer C> ? C : unknown;

export function useDefault<K extends DefaultExcepts>(context: K, userValue: null | undefined | ContextType<(typeof ContextDefaults)[K]>): ContextType<(typeof ContextDefaults)[K]> {
    const defaultValue = useContext<ContextType<(typeof ContextDefaults)[K]>>(ContextDefaults[context] as Context<any>);
    return userValue ?? defaultValue;
}

export const ParentDepthContext = createContext(0);

type PartialExceptD<T, KeepRequired extends keyof T> = Partial<Pick<T, Exclude<keyof T, KeepRequired>>> & Pick<T, KeepRequired>;

/**
 * Like `Partial<T>`, but the properties given by `K` will **NOT** be made partial -- they'll remain required.
 */
export type PartialExcept<T, K extends keyof T> = PartialExceptD<T, K>;


export function useDefaultRenderPortal({ portalId, children }: { portalId: string, children: VNode }): VNode {
    const portalRef = useRef<HTMLElement>(null!);
    portalRef.current ??= document.getElementById(portalId)!;
    if (portalRef.current)
        return createPortal(children, portalRef.current);
    else
        return children;
}