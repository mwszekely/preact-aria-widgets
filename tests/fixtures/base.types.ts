import type { AccordionTestingConstants } from "./accordion.types.js";
import type { ButtonTestingConstants } from "./button.types.js";
import type { MenuTestingConstants } from "./menu.types.js";
import type { ToolbarTestingConstants } from "./toolbar.types.js";

export const DisabledIndex = 4;
export const MissingIndex = 6;

export type TestingConstantsParameter<K extends keyof TestingConstants, K2 extends keyof TestingConstants[K]> = TestingConstants[K][K2] extends (...args: any[]) => any ? Parameters<TestingConstants[K][K2]>[0] : never;

export interface TestingConstants {
    Button: ButtonTestingConstants;
    Menu: MenuTestingConstants;
    Toolbar: ToolbarTestingConstants,
    Accordion: AccordionTestingConstants;
}


export function fromStringBoolean(s: string | null) { return s == null? null : (s != "false") }
export function fromStringNumber(s: string | null) { return s == null || s == "null"? null : +s; }
export function fromStringString(s: string | null) { return s == null || s == "null"? null : s as never; }
export function fromStringArray<S>(fromStringElement: (s: string) => S) { return function (s: string) { return s == null || s == "null"? null : s.split(",").map(fromStringElement) as [...never] } }