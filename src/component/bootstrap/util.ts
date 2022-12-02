import { h } from "preact";

export type StandardProps = keyof Pick<h.JSX.HTMLAttributes<any>, "class" | "className" | "children" | "key" | "ref">

