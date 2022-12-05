import clsx from "clsx";
import { Listbox, ListboxItem, ListboxItemProps, ListboxProps } from "component/listbox";
import { h, Ref } from "preact";
import { useMergedProps } from "preact-prop-helpers";
import { useRef } from "preact/hooks";
import { ListboxInfo, UseListboxReturnType } from "../../use-listbox";
import { getDefaultClass, StandardProps } from "./util";

export interface Listbox2Props extends Pick<ListboxProps<HTMLDivElement, HTMLButtonElement, HTMLLabelElement, ListboxInfo<HTMLButtonElement>>, "selectionLimit" | "setSelectedIndex" | "groupingType" | "ariaLabel" | "untabbable">, Pick<h.JSX.HTMLAttributes<HTMLDivElement>, StandardProps> {
    selectedIndex: number;
}

export interface ListboxItem2Props extends Pick<ListboxItemProps<HTMLButtonElement, ListboxInfo<HTMLButtonElement>>, "selected" | "getSortValue" | "disabled" | "index">, Pick<h.JSX.HTMLAttributes<HTMLButtonElement>, StandardProps> {
    selectedIndex: number;
}

/*
export function Listbox2({ ariaLabel, groupingType, selectedIndex, setSelectedIndex, untabbable, selectionLimit, children, ...props }: Listbox2Props, ref: Ref<HTMLDivElement>) {
    const imperativeHandle = useRef<UseListboxReturnType<HTMLDivElement, HTMLButtonElement, HTMLLabelElement, any>>(null);
    return (
        <Listbox<HTMLDivElement, HTMLButtonElement, HTMLLabelElement>
            ref={imperativeHandle}
            ariaLabel={ariaLabel}
            groupingType={groupingType}
            navigationDirection="vertical"
            selectionLimit={selectionLimit}
            untabbable={untabbable}
            setSelectedIndex={setSelectedIndex}
            render={info => {
                const cls = clsx();
                return (
                    <>
                        {(ariaLabel && null && <label {...info.propsListboxLabel}></label>)}
                        <div {...useMergedProps({ ref, class: cls }, props, info.propsListbox)}>
                            {children}
                        </div>
                    </>
                )
            }}
        />
    )
}

export function ListboxItem2({ index, getSortValue, selectedIndex, disabled, children, selected, ...props }: ListboxItem2Props, ref: Ref<HTMLButtonElement>) {
    return (
        <ListboxItem<HTMLButtonElement>
            ariaPropName="aria-selected"
            index={index}
            getSortValue={getSortValue}
            render={info => {
                const cls = clsx(
                    getDefaultClass("listbox", "listbox-item"),
                    info.pressReturn.pseudoActive && getDefaultClass("listbox", "active"),
                    info.rovingTabIndexChildReturn.tabbable && getDefaultClass("listbox", "tabbable"),
                    info.singleSelectionChildReturn.selected && getDefaultClass("listbox", "selected"),
                    disabled && getDefaultClass("listbox", "disabled")
                );

                return (
                    <button {...useMergedProps({ ...props, ref }, { className: cls }, info.props)}>{children}</button>
                )
            }}

        />
    )
}*/
