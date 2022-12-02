import { h } from "preact";

export type StandardProps = keyof Pick<h.JSX.HTMLAttributes<any>, "class" | "className" | "children" | "key" | "ref">

function classesHelper<T extends any[]>(...values: T): { [K in T[number]]: string} {
    let ret = {} as any;
    for (const v of values)
        ret[v] = v;
    return ret;
}

export const Classes = {
    accordion: {
        accordion: "accordion" ,
        accordionSection: "accordion-item",
        accordionSectionHeader: "accordion-header",
        accordionSectionButton: "accordion-button",
        accordionSectionBody: "accordion-body",
    }, 
    button: {
        button: "btn",
        active: "active"
    },
    checkbox: {
        input: "form-check-input checkbox",
        label: "form-check-label checkbox",
        checked: "checked",
        active: "active"
    },
    "listbox": //classesHelper("listbox-item" as const, "listbox" as const, "selected" as const, "disabled" as const, "active" as const, "tabbable" as const),
    {
        listbox: "list-group",
        listboxItem: "list-group-item",
        active: "active",
        disabled: "disabled"
    },
    "dialog": {
        focusContainer: "modal-dialog",
        dialog: ""
    },
    //classesHelper("focus-container" as const, "dialog" as const, "dialog-title" as const, "dialog-body" as const)
};


export function setDefaultClass<T extends keyof typeof Classes, U extends keyof (typeof Classes)[T]>(k1: T, k2: U, className: string) {
    Classes[k1 as "accordion"][k2 as "accordion"] = className;
}

export function getDefaultClass<T extends keyof typeof Classes, U extends keyof (typeof Classes)[T]>(k1: T, k2: U): string {
    return Classes[k1 as "accordion"][k2 as "accordion"];
}

