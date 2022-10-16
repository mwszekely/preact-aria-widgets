import { ForwardFn, memo, forwardRef } from "preact/compat";


export function memoForwardRef<T extends ForwardFn<any, any>>(fn: T): T {
    return memo(forwardRef(fn)) as T;//(props: Parameters<T>[0]) => ReturnType<T>;
}
