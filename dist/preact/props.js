import { useContext } from "preact-prop-helpers/preact";
export { EventDetail, enhanceEvent, monitored, useContext } from "preact-prop-helpers/preact";
const alreadyWarned = new Set();
export function overwriteWithWarning(componentName, props, propName, newValue) {
    //const key = `${componentName};${propName}`;
    const oldValue = props[propName];
    if (oldValue != null) {
        if (!alreadyWarned.has(String(propName))) {
            alreadyWarned.add(String(propName));
            console.warn(`The ${String(propName)} attribute on ${componentName} was given a value of ${oldValue} but is being overwritten to ${newValue} for conformance. Consider removing it before passing those props to ${componentName}.`);
        }
    }
    props[propName] = newValue;
}
export function useContextWithWarning(context, parentContextName) {
    let ret = useContext(context);
    if (ret == null) {
        /* eslint-disable no-debugger */
        debugger;
        console.error(`This child is missing its parent ${parentContextName} context`);
    }
    return ret;
}
export function noop() { return; }
// (These do not need to be unique)
export const Prefices = {
    accordionSectionHeaderButton: "ashb-",
    accordionSectionBody: "asb-",
    checkboxLikeInput: "cbli-",
    checkboxLikeLabel: "cbll-",
    dialog: "mdl-",
    dialogTitle: "mdlt-",
    drawer: "mdw-",
    drawerTitle: "mdwt-",
    gridlist: "gl-",
    gridlistLabel: "gll-",
    listbox: "lb-",
    listboxLabel: "lbl-",
    menu: "menu-",
    progressIndicator: "pi-",
    progressLabel: "pl-",
    radioGroup: "rg-",
    radioGroupLabel: "rgl-",
    radio: "rb-",
    radioLabel: "rbl-",
    sliderThumb: "st-",
    table: "tb-",
    tableLabel: "tbl-",
    tablist: "tl-",
    tablistLabel: "tll-",
    tooltip: "tt-",
    toolbar: "tlb-",
    toolbarLabel: "tlbl-"
};
//# sourceMappingURL=props.js.map