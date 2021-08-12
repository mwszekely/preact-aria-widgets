import { h, Ref } from "preact";
import { useCallback } from "preact/hooks";
import { useLinearNavigation, UseLinearNavigationPropsReturnType } from "preact-prop-helpers/use-keyboard-navigation";
import { useRandomId, UseRandomIdPropsReturnType, UseReferencedIdPropsReturnType } from "preact-prop-helpers/use-random-id";
import { useState } from "preact-prop-helpers/use-state";
import { ManagedChildInfo, useChildManager, UsedManagedChild } from "preact-prop-helpers/use-child-manager";
import { useLayoutEffect } from "preact-prop-helpers/use-layout-effect"
import { useHasFocus, UseHasFocusPropsReturnType } from "preact-prop-helpers/use-has-focus";
import { MergedProps, useMergedProps } from "preact-prop-helpers/use-merged-props";
import { useStableCallback } from "preact-prop-helpers/use-stable-callback";
import { useRefElement } from "preact-prop-helpers/use-ref-element";
import { TagSensitiveProps } from "props";
import { useButtonLikeEventHandlers } from "./use-button";
import { useAsyncHandler } from "preact-prop-helpers";

export type UseAriaAccordion<E extends Element> = (args: UseAriaAccordionParameters) => UseAriaAccordionReturnType<E>;
export type UseAriaAccordionSection = (args: UseAriaAccordionSectionParameters) => UseAriaAccordionSectionReturnType
export type UseAriaAccordionSectionHeaderProps<E extends Element> = <P extends UseAriaAccordionSectionHeaderPropsParameters<E>>(props: P) => UseAriaAccordionSectionHeaderPropsReturnType<E, P>;
export type UseAriaAccordionSectionBodyProps<E extends Element> = <P extends UseAriaAccordionSectionBodyPropsParameters<E>>(props: P) => UseAriaAccordionSectionBodyPropsReturnType<E, P>;


export interface UseAriaAccordionParameters {
    expandedIndex?: number | null;
    setExpandedIndex?(i: number): void;
}

export interface UseAriaAccordionReturnType<E extends Element> {
    useAriaAccordionSection: UseAriaAccordionSection;
    useAriaAccordionProps: UseAriaAccordionProps<E>;
}

export type UseAriaAccordionProps<E extends Element> = <P extends UseAriaAccordionPropsParameters<E>>(props: P) => UseAriaAccordionPropsReturnType<E, P>;

export type UseAriaAccordionPropsReturnType<E extends Element, P extends UseAriaAccordionPropsParameters<E>> = UseLinearNavigationPropsReturnType<E, P>;

export interface UseAriaAccordionSectionInfo extends ManagedChildInfo<number> {
    open?: boolean | undefined;
    setOpenFromParent(open: boolean): void;
    focus(): void;
}

export interface UseAriaAccordionSectionParameters extends Omit<UseAriaAccordionSectionInfo, "setOpenFromParent" | "focus"> {
    open?: boolean | undefined;
}

export interface UseAriaAccordionSectionHeaderPropsParameters<E extends Element> extends h.JSX.HTMLAttributes<E> { }
export interface UseAriaAccordionSectionBodyPropsParameters<E extends Element> extends h.JSX.HTMLAttributes<E> { }

export interface UseAriaAccordionSectionReturnType {
    openFromParent: boolean;
    useAriaAccordionSectionHeader: UseAriaAccordionSectionHeader;
    useAriaAccordionSectionBody: UseAriaAccordionSectionBody;
}
export type UseAriaAccordionSectionHeaderPropsReturnType<E extends Element, P extends UseAriaAccordionSectionHeaderPropsParameters<E>> = MergedProps<E, UseRandomIdPropsReturnType<UseReferencedIdPropsReturnType<{ "aria-expanded": string; "aria-disabled": string | undefined; } & UseHasFocusPropsReturnType<E, Omit<P, "aria-expanded" | "aria-disabled">>, "aria-controls">>, { onClick: h.JSX.EventHandler<h.JSX.TargetedMouseEvent<E>> }>;
export type UseAriaAccordionSectionBodyPropsReturnType<E extends Element, P extends UseAriaAccordionSectionBodyPropsParameters<E>> = UseRandomIdPropsReturnType<UseReferencedIdPropsReturnType<{ role: string; } & Omit<P, "role">, "aria-labelledby">>;

export type UseAriaAccordionSectionHeader = <E extends Element>({ tag }: TagSensitiveProps<E>) => UseAriaAccordionSectionHeaderReturnType<E>;
export interface UseAriaAccordionSectionHeaderReturnType<E extends Element> { useAriaAccordionSectionHeaderProps: UseAriaAccordionSectionHeaderProps<E>; }
export type UseAriaAccordionSectionBody = <E extends Element>() => UseAriaAccordionSectionBodyReturnType<E>;
export interface UseAriaAccordionSectionBodyReturnType<E extends Element> { useAriaAccordionSectionBodyProps: UseAriaAccordionSectionBodyProps<E>; }



type MergedNulls<T extends null | undefined, U extends | null | undefined, V extends | null | undefined, W extends | null | undefined> =
    UnionIncludes<T, null> extends true ? null :
    UnionIncludes<U, null> extends true ? null :
    UnionIncludes<V, null> extends true ? null :
    UnionIncludes<W, null> extends true ? null : undefined;

// A lot of boilerplate to basically say
// "undefined/null (prefer null) if everything is, string otherwise"
export type MergedClasses<Lhs extends Pick<h.JSX.HTMLAttributes<any>, "class" | "className">, Rhs extends Pick<h.JSX.HTMLAttributes<any>, "class" | "className">> =
    UnionIncludes<GetClassOrUndefined<Lhs>, null | undefined> extends true ?
    UnionIncludes<GetClassNameOrUndefined<Lhs>, null | undefined> extends true ?
    UnionIncludes<GetClassOrUndefined<Rhs>, null | undefined> extends true ?
    UnionIncludes<GetClassNameOrUndefined<Rhs>, null | undefined> extends true ?
    MergedNulls<
        Extract<GetClassOrUndefined<Lhs>, null | undefined>,
        Extract<GetClassOrUndefined<Rhs>, null | undefined>,
        Extract<GetClassNameOrUndefined<Lhs>, null | undefined>,
        Extract<GetClassNameOrUndefined<Rhs>, null | undefined>> : string : string : string : string;

type GetClassOrUndefined<T extends { class?: any }> = T extends { class: infer U } ? U : undefined;
type GetClassNameOrUndefined<T extends { className?: any }> = T extends { className: infer U } ? U : undefined;

type UnionIncludes<T, U> = Extract<T, U> extends never ? false : true;




interface UseAriaAccordionPropsParameters<E extends Element> extends h.JSX.HTMLAttributes<E> { }


export function useAriaAccordion<E extends Element>({ expandedIndex, setExpandedIndex }: UseAriaAccordionParameters): UseAriaAccordionReturnType<E> {

    //const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
    const [lastFocusedIndex, setLastFocusedIndex, getLastFocusedIndex] = useState(0);
    const stableSetExpandedIndex = useStableCallback(setExpandedIndex ?? (() => { }));

    const { managedChildren: managedAccordionSections, useManagedChild: useManagedChildSection } = useChildManager<UseAriaAccordionSectionInfo>();
    const { useLinearNavigationProps } = useLinearNavigation<E>({ managedChildren: managedAccordionSections, navigationDirection: "block", getIndex: getLastFocusedIndex, setIndex: setLastFocusedIndex });

    useLayoutEffect(() => {

        if (lastFocusedIndex != null && lastFocusedIndex >= 0)
            managedAccordionSections[lastFocusedIndex]?.focus();


    }, [lastFocusedIndex])


    useLayoutEffect(([prevExpandedIndex]) => {
        if (prevExpandedIndex != null && prevExpandedIndex <= managedAccordionSections.length)
            managedAccordionSections[prevExpandedIndex]?.setOpenFromParent(false);

        if (expandedIndex != null && expandedIndex <= managedAccordionSections.length)
            managedAccordionSections[expandedIndex]?.setOpenFromParent(true);
    }, [expandedIndex, managedAccordionSections.length])

    const useAriaAccordionSection = useCallback<UseAriaAccordionSection>((args: UseAriaAccordionSectionParameters): UseAriaAccordionSectionReturnType => {


        const [openFromParent, setOpenFromParent] = useState(false);
        const [headerElement, setHeaderElement] = useState<HTMLElement | null>(null);

        const focus = useCallback(() => { headerElement?.focus(); }, [headerElement]);


        const { randomId: bodyRandomId, useRandomIdProps: useBodyRandomIdProps, useReferencedIdProps: useReferencedBodyIdProps } = useRandomId({ prefix: "aria-accordion-section-body-" });
        const { randomId: headRandomId, useRandomIdProps: useHeadRandomIdProps, useReferencedIdProps: useReferencedHeadIdProps } = useRandomId({ prefix: "aria-accordion-section-header-" });

        let open = ((openFromParent || args.open) || false);

        function useAriaAccordionSectionHeader<E extends Element>({ tag }: TagSensitiveProps<E>): UseAriaAccordionSectionHeaderReturnType<E> {

            const { element, useManagedChildProps } = useManagedChildSection<E>({ ...args, setOpenFromParent, focus });
            const { focused, useHasFocusProps } = useHasFocus<E>();

            useLayoutEffect(() => {
                setHeaderElement((element as Element as HTMLElement) ?? null);
            }, [element])

            function useAriaAccordionSectionHeaderProps<P extends UseAriaAccordionSectionHeaderPropsParameters<E>>({ ["aria-expanded"]: ariaExpanded, ["aria-disabled"]: ariaDisabled, ...props }: P): UseAriaAccordionSectionHeaderPropsReturnType<E, P> {

                const onFocus = () => { setLastFocusedIndex(args.index); }
                let onClick = () => { stableSetExpandedIndex(args.index); };

                let retA = useMergedProps<E>()({ onClick }, props);
                let retB = useMergedProps<E>()({ tabIndex: 0 }, useButtonLikeEventHandlers<E>(onClick)(props));

                let ret3:
                    MergedProps<E, UseRandomIdPropsReturnType<UseReferencedIdPropsReturnType<{ "aria-expanded": string; "aria-disabled": string | undefined; } & UseHasFocusPropsReturnType<E, Omit<P, "aria-expanded" | "aria-disabled">>, "aria-controls">>, { onClick: h.JSX.EventHandler<h.JSX.TargetedMouseEvent<E>> }>
                    = useMergedProps<E>()(useHeadRandomIdProps(useReferencedBodyIdProps("aria-controls")({ 
                        "aria-expanded": (ariaExpanded ?? open.toString()), 
                        "aria-disabled": (ariaDisabled ?? (open ? "true" : undefined)), 
                        ...useHasFocusProps(useManagedChildProps(tag === "button" ? retA : retB)) 
                    })), { onFocus });


                return ret3;
            };

            return { useAriaAccordionSectionHeaderProps };
        }


        function useAriaAccordionSectionBody<E extends Element>() {
            function useAriaAccordionSectionBodyProps<P extends UseAriaAccordionSectionBodyPropsParameters<E>>({ role, ...props }: P): UseAriaAccordionSectionBodyPropsReturnType<E, P> {
                let ret1 = useReferencedHeadIdProps("aria-labelledby")({ role: role ?? "region", ...props });
                let ret2 = useBodyRandomIdProps(ret1);
                return ret2;
            };
            return {
                useAriaAccordionSectionBodyProps
            }
        }

        return {
            openFromParent,
            useAriaAccordionSectionHeader,
            useAriaAccordionSectionBody,
        }
    }, []);


    function useAriaAccordionProps<P extends UseAriaAccordionPropsParameters<E>>(props: P) {
        return useLinearNavigationProps(props);
    }

    return {
        useAriaAccordionSection,
        useAriaAccordionProps
    }
}





declare module 'preact' {
    namespace h {
        namespace JSX {
            interface HTMLAttributes<RefType extends EventTarget = EventTarget> {

                /**   
                 * **Property** 
                 * 
                 * Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the `aria-relevant` attribute.
                 *
                 *  Both accessibility APIs and the Document Object Model provide events to allow the assistive technologies to determine changed areas of the document.
                 *
                 *  When the content of a live region changes, user agents SHOULD examine the changed element and traverse the ancestors to find the first element with `aria-atomic` set, and apply the appropriate behavior for the cases below.
                 *
                 * 1. If none of the ancestors have explicitly set `aria-atomic`, the default is that `aria-atomic` is `false`, and assistive technologies will only present the changed node to the user.
                 * 1. If `aria-atomic` is explicitly set to `false`, assistive technologies will stop searching up the ancestor chain and present only the changed node to the user.
                 * 1. If `aria-atomic` is explicitly set to `true`, assistive technologies will present the entire contents of the element, including the author-defined live region label if one exists.
                 *
                 *  When aria-atomic is true, assistive technologies MAY choose to combine several changes and present the entire changed region at once.
                 */
                "aria-atomic"?: undefined | string;

                /**
                 * **Property**
                 * 
                 * Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be presented if they are made.
                 * 
                 * The aria-autocomplete property describes the type of interaction model a textbox, searchbox, or combobox employs when dynamically helping users complete text input. It distinguishes between two models: the inline model (aria-autocomplete="inline") that presents a value completion prediction inside the text input and the list model (aria-autocomplete="list") that presents a collection of possible values in a separate element that pops up adjacent to the text input. It is possible for an input to offer both models at the same time (aria-autocomplete="both").
                 * 
                 * The aria-autocomplete property is limited to describing predictive behaviors of an input element. Authors SHOULD either omit specifying a value for aria-autocomplete or set aria-autocomplete to none if an input element provides one or more input proposals where none of the proposals are dependent on the specific input provided by the user. For instance, a combobox where the value of aria-autocomplete would be none is a search field that displays suggested values by listing the 5 most recently used search terms without any filtering of the list based on the user's input. Elements with a role that supports aria-autocomplete have a default value for aria-autocomplete of none.
                 * 
                 * When an inline suggestion is made as a user types in an input, suggested text for completing the value of the field dynamically appears in the field after the input cursor, and the suggested value is accepted as the value of the input if the user performs an action that causes focus to leave the field. When an element has aria-autocomplete set to inline or both, authors SHOULD ensure that the automatically suggested portion of the text is presented as selected text. This enables assistive technologies to distinguish between a user's input and the automatic suggestion and, in the event that the suggestion is not the desired value, enables the user to easily delete the suggestion or replace it by continuing to type.
                 * 
                 * If an element has aria-autocomplete set to list or both, authors MUST ensure both of the following conditions are met:
                 * 
                 * 1. The element has a value specified for aria-controls that refers to the element that contains the collection of suggested values.
                 * 1. Either the element or a containing element with role combobox has a value for aria-haspopup that matches the role of the element that contains the collection of suggested values.
                 * 
                 * Some implementations of the list model require the user to perform an action, such as moving focus to the suggestion with the Down Arrow or clicking on the suggestion, in order to choose the suggestion. In such implementations, authors MAY manage focus by either using aria-activedescendant if the collection container supports it or by moving DOM focus to the suggestion. However, other implementations of the list model automatically highlight one suggestion as the selected value that will be accepted when the field loses focus, e.g., when the user presses the Tab key or clicks on a different field. If an element has aria-autocomplete set to list or both, and if a suggestion is automatically selected as the user provides input, authors MUST ensure all the following conditions are met:
                 * 
                 * 1. The collection of suggestions is presented in an element with a role that supports aria-activedescendant.
                 * 1. The value of aria-activedescendant set on the input field is dynamically adjusted to refer to the element containing the selected suggestion as described in the definition of aria-activedescendant.
                 * 1. DOM focus remains on the text input while the suggestions are displayed.
                 * 
                 * The aria-autocomplete property is not intended to indicate the presence of a completion suggestion, and authors SHOULD NOT dynamically change its value in order to communicate the presence of a suggestion. When an element has aria-autocomplete set to list or both, authors SHOULD use the aria-expanded state to communicate whether the element that presents the suggestion collection is displayed.
                 * 
                 */
                "aria-autocomplete"?: undefined | string;

                /**
                 * **State**
                 * 
                 * Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.
                 * 
                 * The default value of aria-busy is false for all elements. When aria-busy is true for an element, assistive technologies MAY ignore changes to content owned by that element and then process all changes made during the busy period as a single, atomic update when aria-busy becomes false.
                 * 
                 * If it is necessary to make multiple additions, modifications, or removals within a container element that is already either partially or fully rendered, authors MAY set aria-busy to true on the container element before the first change, and then set it to false when the last change is complete. For example, if multiple changes to a live region should be spoken as a single unit of speech, authors MAY set aria-busy to true while the changes are being made and then set it to false when the changes are complete and ready to be spoken.
                 * 
                 * If an element with role feed is marked busy, assistive technologies MAY defer rendering changes that occur inside the feed with the exception of user-initiated changes that occur inside the article that the user is reading during the busy period.
                 * 
                 * If changes to a rendered widget would create a state where the widget is missing required owned elements during script execution, authors MUST set aria-busy to true on the widget during the update process. For example, if a rendered tree grid required a set of simultaneous updates to multiple discontiguous branches, an alternative to replacing the complete tree element with a single update would be to mark the tree busy while each of the branches are modified.
                 */
                "aria-busy"?: undefined | string;

                /**
                 * **State**
                 * 
                 * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets. See related aria-pressed and aria-selected.
                 * 
                 * The aria-checked attribute indicates whether the element is checked (true), unchecked (false), or represents a group of other elements that have a mixture of checked and unchecked values (mixed). Most inputs only support values of true and false, but the mixed value is supported by certain tri-state inputs such as a checkbox or menuitemcheckbox.
                 * 
                 * The mixed value is not supported on radio, menuitemradio, switch or any element that inherits from these in the taxonomy, and user agents MUST treat a mixed value as equivalent to false for those roles.
                 */
                "aria-checked"?: undefined | string;

                /**
                 * **Property**
                 * 
                 * Defines the total number of columns in a table, grid, or treegrid. See related aria-colindex.
                 * 
                 * If all of the columns are present in the DOM, it is not necessary to set this attribute as the user agent can automatically calculate the total number of columns. However, if only a portion of the columns is present in the DOM at a given moment, this attribute is needed to provide an explicit indication of the number of columns in the full table.
                 * 
                 * Authors MUST set the value of aria-colcount to an integer equal to the number of columns in the full table. If the total number of columns is unknown, authors MUST set the value of aria-colcount to -1 to indicate that the value should not be calculated by the user agent.
                 * 
                 */
                "aria-colcount"?: undefined | string;

                /** 
                 * **Property**
                 * 
                 * Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid. See related aria-colcount and aria-colspan.
                 * 
                 * If all of the columns are present in the DOM, it is not necessary to set this attribute as the user agent can automatically calculate the column index of each cell or gridcell. However, if only a portion of the columns is present in the DOM at a given moment, this attribute is needed to provide an explicit indication of the column of each cell or gridcell with respect to the full table.
                 * 
                 * Authors MUST set the value for aria-colindex to an integer greater than or equal to 1, greater than the aria-colindex value of any previous elements within the same row, and less than or equal to the number of columns in the full table. For a cell or gridcell which spans multiple columns, authors MUST set the value of aria-colindex to the start of the span.
                 * 
                 * If the set of columns which is present in the DOM is contiguous, and if there are no cells which span more than one row or column in that set, then authors MAY place aria-colindex on each row, setting the value to the index of the first column of the set. Otherwise, authors SHOULD place aria-colindex on all of the children or owned elements of each row.
                 * 

                */
                "aria-colindex"?: undefined | string;
                /**
                 * **Property**
                 * 
                 * Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid. See related aria-colindex and aria-rowspan.
                 * 
                 * This attribute is intended for cells and gridcells which are not contained in a native table. When defining the column span of cells or gridcells in a native table, authors SHOULD use the host language's attribute instead of aria-colspan. If aria-colspan is used on an element for which the host language provides an equivalent attribute, user agents MUST ignore the value of aria-colspan and instead expose the value of the host language's attribute to assistive technologies.
                 * 
                 * Authors MUST set the value of aria-colspan to an integer greater than or equal to 1 and less than the value which would cause the cell or gridcell to overlap the next cell or gridcell in the same row.
                 * 
                 */
                "aria-colspan"?: undefined | string;
                /**
                 * **Property**
                 * 
                 * Identifies the element (or elements) whose contents or presence are controlled by the current element. See related aria-owns.
                 * 
                 * For example:
                 * 
                 * * A table of contents tree view may control the content of a neighboring document pane.
                 * * A group of checkboxes may control what commodity prices are tracked live in a table or graph.
                 * * A tab controls the display of its associated tab panel.
                 * 
                 */
                "aria-controls"?: undefined | string;

                /**
                 * **State**
                 * 
                 * Indicates the element that represents the current item within a container or set of related elements.
                 * 
                 * The aria-current attribute is an enumerated type. Any value not included in the list of allowed values SHOULD be treated by assistive technologies as if the value true had been provided. If the attribute is not present or its value is an empty string or undefined, the default value of false applies and the aria-current state MUST NOT be exposed by user agents or assistive technologies.
                 * 
                 * The aria-current attribute is used when an element within a set of related elements is visually styled to indicate it is the current item in the set. For example:
                 * 
                 * * A page token used to indicate a link within a set of pagination links, where the link is visually styled to represent the currently-displayed page.
                 * * A step token used to indicate a link within a step indicator for a step-based process, where the link is visually styled to represent the current step.
                 * * A location token used to indicate the image that is visually highlighted as the current component of a flow chart.
                 * * A date token used to indicate the current date within a calendar.
                 * * A time token used to indicate the current time within a timetable.
                 * 
                 * Authors SHOULD only mark one element in a set of elements as current with aria-current.
                 * 
                 * Authors SHOULD NOT use the aria-current attribute as a substitute for aria-selected in widgets where aria-selected has the same meaning. For example, in a tablist, aria-selected is used on a tab to indicate the currently-displayed tabpanel.
                 */
                "aria-current"?: undefined | "page" | "step" | "location" | "date" | "time" | true | false | undefined;
                /**
                 * **Property**
                 * 
                 * Identifies the element (or elements) that describes the object. See related aria-labelledby.
                 * 
                 * The aria-labelledby attribute is similar to the aria-describedby in that both reference other elements to calculate a text alternative, but a label should be concise, where a description is intended to provide more verbose information.
                 * 
                 * The element or elements referenced by the aria-describedby comprise the entire description. Include ID references to multiple elements if necessary, or enclose a set of elements (e.g., paragraphs) with the element referenced by the ID.
                 */
                "aria-describedby"?: undefined | string;
                /**
                 * **Property**
                 * 
                 * Identifies the element that provides a detailed, extended description for the object. See related aria-describedby.
                 * 
                 * The aria-details attribute references a single element that provides more detailed information than would normally be provided by aria-describedby. It enables assistive technologies to make users aware of the availability of an extended description as well as navigate to it. Authors SHOULD ensure the element referenced by aria-details is visible to all users.
                 * 
                 * Unlike elements referenced by aria-describedby, the element referenced by aria-details is not used in either the Accessible Name Computation or the Accessible Description Computation as defined in the Accessible Name and Description specification [accname-aam-1.1]. Thus, the content of an element referenced by aria-details is not flattened to a string when presented to assistive technology users. This makes aria-details particularly useful when converting the information to a string would cause a loss of information or make the extended description more difficult to understand.
                 * 
                 * In some user agents, multiple reference relationships for descriptive information are not supported by the accessibility API. In such cases, if both aria-describedby and aria-details are provided on an element, aria-details takes precedence.
                 */
                "aria-details"?: undefined | string;

                /**
                 * **State**
                 * 
                 * Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable. See related aria-hidden and aria-readonly.
                 * 
                 * For example, irrelevant options in a radio group may be disabled. Disabled elements might not receive focus from the tab order. For some disabled elements, applications might choose not to support navigation to descendants. In addition to setting the aria-disabled attribute, authors SHOULD change the appearance (grayed out, etc.) to indicate that the item has been disabled.
                 * 
                 * The state of being disabled applies to the current element and all focusable descendant elements of the element on which the aria-disabled attribute is applied.
                 * 
                 */
                "aria-disabled"?: undefined | string;

                /**
                 * **Property**
                 * 
                 * This property allows assistive technologies to convey the possible drag options available to users, including whether a pop-up menu of choices is provided by the application. Typically, drop effect functions can only be provided once an object has been grabbed for a drag operation as the drop effect functions available are dependent on the object being dragged.
                 * 
                 * More than one drop effect may be supported for a given element. Therefore, the value of this attribute is a space-delimited set of tokens indicating the possible effects, or none if there is no supported operation. In addition to setting the aria-dropeffect attribute, authors SHOULD show a visual indication of potential drop targets.
                 * 
                 * @deprecated
                 */
                "aria-dropeffect"?: undefined | string;

                /**
                 * **Property**
                 * 
                 * Identifies the element that provides an error message for the object. See related aria-invalid and aria-describedby.
                 * 
                 * The aria-errormessage attribute references another element that contains custom error message text. Authors MUST use aria-invalid in conjunction with aria-errormessage. Initially, the object is in a valid state and either has aria-invalid set to false or no aria-invalid attribute, and the element referenced by aria-errormessage is not applicable. If the user enters an invalid value for the object, aria-invalid is set to true to indicate that aria-errormessage is now pertinent. When aria-errormessage is pertinent, authors MUST ensure the content is not hidden and is included in a container that exposes the content to the user as it is expected that the assistive technology user will navigate to the content in order to access it.
                 * 
                 * Authors MAY use live regions for the error message element applying either an aria-live property or using one of the live region roles, for example, alert. A live region scenario is when an error message is displayed to users only after they have provided invalid information. The message describes what is wrong and advises users as to what is required. For example, an error message might be, "Invalid time: the time must be between 9:00 AM and 5:00 PM".
                 */
                "aria-errormessage"?: undefined | string;
                /**
                 * **State**
                 * 
                 * Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.
                 * 
                 * For example, this indicates whether a portion of a tree is expanded or collapsed. In other instances, this may be applied to page sections to mark expandable and collapsible regions that are flexible for managing content density. Simplifying the user interface by collapsing sections may improve usability for all, including those with cognitive or developmental disabilities.
                 * 
                 * If the element with the aria-expanded attribute controls the expansion of another grouping container that is not 'owned by' the element, the author SHOULD reference the container by using the aria-controls attribute.
                 * 
                 */
                "aria-expanded"?: undefined | string;

                /**
                 * **Property**
                 * 
                 * Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion, allows assistive technology to override the general default of reading in document source order.
                 * 
                 * When aria-flowto has a single IDREF, it allows assistive technologies to, at the user's request, forego normal document reading order and go to the targeted object. However, when aria-flowto is provided with multiple IDREFS, assistive technologies SHOULD present the referenced elements as path choices.
                 * 
                 * In the case of one or more IDREFS, user agents or assistive technologies SHOULD give the user the option of navigating to any of the targeted elements. The name of the path can be determined by the name of the target element of the aria-flowto attribute. Accessibility APIs can provide named path relationships.
                 * 
                 */
                "aria-flowto"?: undefined | string;
                /**
                 * **State**
                 * 
                 * Setting aria-grabbed to true indicates that the element has been selected for dragging. Setting aria-grabbed to false indicates that the element can be grabbed for a drag-and-drop operation, but is not currently grabbed. If aria-grabbed is unspecified or set to undefined (default), the element cannot be grabbed.
                 * 
                 * When aria-grabbed is set to true, authors SHOULD update the aria-dropeffect attribute of all potential drop targets. When an element is not grabbed (the value is set to false or undefined, or the attribute is removed), authors SHOULD revert the aria-dropeffect attributes of the associated drop targets to none.
                 * 
                 * @deprecated
                 */
                "aria-grabbed"?: undefined | string;

                /**
                 * **Property**
                 * 
                 * Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.
                 * 
                 * A popup element usually appears as a block of content that is on top of other content. Authors MUST ensure that the role of the element that serves as the container for the popup content is menu, listbox, tree, grid, or dialog, and that the value of aria-haspopup matches the role of the popup container.
                 * 
                 * For the popup element to be keyboard accessible, authors SHOULD ensure that the element that can trigger the popup is focusable, that there is a keyboard mechanism for opening the popup, and that the popup element manages focus of all its descendants as described in Managing Focus.
                 * 
                 * The aria-haspopup property is an enumerated type. User agents MUST treat any value of aria-haspopup that is not included in the list of allowed values, including an empty string, as if the value false had been provided. To provide backward compatibility with ARIA 1.0 content, user agents MUST treat an aria-haspopup value of true as equivalent to a value of menu.
                 * 
                 * Assistive technologies SHOULD NOT expose the aria-haspopup property if it has a value of false.
                 * 
                 * **Note**: A tooltip is not considered to be a popup in this context.
                 */
                "aria-haspopup"?: undefined | "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog";

                /**
                 * **State**
                 * 
                 * Indicates whether the element is exposed to an accessibility API. See related aria-disabled.
                 * 
                 * User agents determine an element's hidden status based on whether it is rendered, and the rendering is usually controlled by CSS. For example, an element whose display property is set to none is not rendered. An element is considered hidden if it, or any of its ancestors are not rendered or have their aria-hidden attribute value set to true.
                 * 
                 * Authors MAY, with caution, use aria-hidden to hide visibly rendered content from assistive technologies only if the act of hiding this content is intended to improve the experience for users of assistive technologies by removing redundant or extraneous content. Authors using aria-hidden to hide visible content from screen readers MUST ensure that identical or equivalent meaning and functionality is exposed to assistive technologies.
                 * 
                 * **Note**: Authors are advised to use extreme caution and consider a wide range of disabilities when hiding visibly rendered content from assistive technologies. For example, a sighted, dexterity-impaired individual may use voice-controlled assistive technologies to access a visual interface. If an author hides visible link text "Go to checkout" and exposes similar, yet non-identical link text "Check out now" to the accessibility API, the user may be unable to access the interface they perceive using voice control. Similar problems may also arise for screen reader users. For example, a sighted telephone support technician may attempt to have the blind screen reader user click the "Go to checkout" link, which they may be unable to find using a type-ahead item search ("Go to…").
                 * 
                 * **Note**: At the time of this writing, aria-hidden="false" is known to work inconsistently in browsers. As future implementations improve, use caution and test thoroughly before relying on this approach.
                 * 
                 * **Note**: It is recommended that authors key visibility of elements off this attribute, rather than change visibility and separately update this property. CSS 2 introduced a way to select on attribute values ([css3-selectors]). The following CSS declaration makes content visible unless the aria-hidden attribute is true; scripts need only update the value of this attribute to change visibility:
                 * 
                 */
                "aria-hidden"?: undefined | string;

                /**
                 * **State**
                 * 
                 * Indicates the entered value does not conform to the format expected by the application. See related aria-errormessage.
                 * 
                 * If the value is computed to be invalid or out-of-range, the application author SHOULD set this attribute to true. User agents SHOULD inform the user of the error. Application authors SHOULD provide suggestions for corrections if they are known.
                 * 
                 * When the user attempts to submit data involving a field for which aria-required is true, authors MAY use the aria-invalid attribute to signal there is an error. However, if the user has not attempted to submit the form, authors SHOULD NOT set the aria-invalid attribute on required widgets simply because the user has not yet entered data.
                 * 
                 * For future expansion, the aria-invalid attribute is an enumerated type. Any value not recognized in the list of allowed values MUST be treated by user agents as if the value true had been provided. If the attribute is not present, or its value is false, or its value is an empty string, the default value of false applies.
                 * 
                 */
                "aria-invalid"?: undefined | string;

                /**
                 * **Property**
                 * 
                 * Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.
                 * 
                 * The value of the aria-keyshortcuts attribute is a space-delimited list of keyboard shortcuts that can be pressed to activate a command or textbox widget. The keys defined in the shortcuts represent the physical keys pressed and not the actual characters generated. Each keyboard shortcut consists of one or more tokens delimited by the plus sign ("+") representing zero or more modifier keys and exactly one non-modifier key that must be pressed simultaneously to activate the given shortcut.
                 * 
                 * Authors MUST specify modifier keys exactly according to the UI Events KeyboardEvent key Values spec [uievents-key] - for example, "Alt", "Control", "Shift", "Meta", or "AltGraph". Note that Meta corresponds to the Command key, and Alt to the Option key, on Apple computers.
                 * 
                 * The valid names for non-modifier keys are any printable character such as "A", "B", "1", "2", "$", "Plus" for a plus sign, "Space" for the spacebar, or the names of any other non-modifier key specified in the UI Events KeyboardEvent key Values spec [uievents-key] - for example, "Enter", "Tab", "ArrowRight", "PageDown", "Escape", or "F1". The use of "Space" for the spacebar is an exception to the UI Events KeyboardEvent key Values spec [uievents-key] as the space or spacebar key is encoded as ' ' and would be treated as a whitespace character.
                 * 
                 * Authors MUST ensure modifier keys come first when they are part of a keyboard shortcut. Authors MUST ensure that required non-modifier keys come last when they are part of a shortcut. The order of the modifier keys is not otherwise significant, so "Alt+Shift+T" and "Shift+Alt+T" are equivalent, but "T+Shift+Alt" is not valid because all of the modifier keys don't come first, and "Alt" is not valid because it doesn't include at least one non-modifier key.
                 * 
                 * When specifying an alphabetic key, both the uppercase and lowercase variants are considered equivalent: "a" and "A" are the same.
                 * 
                 * When implementing keyboard shortcuts authors should consider the keyboards they intend to support to avoid unintended results. Keyboard designs vary significantly based on the device used and the languages supported. For example, many modifier keys are used in conjunction with other keys to create common punctuation symbols, create number characters, swap keyboard sides on bilingual keyboards to switch languages, and perform a number of other functions.
                 * 
                 * For many supported keyboards, authors can prevent conflicts by avoiding keys other than ASCII letters, as number characters and common punctuation often require modifiers. Here, the keyboard shortcut entered does not equate to the key generated. For example, in French keyboard layouts, the number characters are not available until you press the Control key, so a keyboard shortcut defined as "Control+2" would be ambiguous as this is how one would type the "2" character on a French keyboard.
                 * 
                 * If the character used is determined by a modifier key, the author MUST specify the actual key used to generate the character, that is generated by the key, and not the resulting character. This convention enables the assistive technology to accurately convey what keys must be used to generate the shortcut. For example, on most U.S. English keyboards, the percent sign "%" can be input by pressing Shift+5. The correct way to specify this shortcut is "Shift+5". It is incorrect to specify "%" or "Shift+%". However, note that on some international keyboards the percent sign may be an unmodified key, in which case "%" and "Shift+%" could be correct on those keyboards.
                 * 
                 * If the key that needs to be specified is illegal in the host language or would cause a string to be terminated, authors MUST use the string escaping sequence of the host language to specify it. For example, the double-quote character can be encoded as "Shift+&#39;" in HTML.
                 * 
                 * Examples of valid keyboard shortcuts include:
                 * 
                 * * "A"
                 * * "Shift+Space"
                 * * "Control+Alt+."
                 * * "Control+Shift+&#39;"
                 * * "Alt+Shift+P Control+F"
                 * * "Meta+C Meta+Shift+C"
                 * 
                 * User agents MUST NOT change keyboard behavior in response to the aria-keyshortcuts attribute. Authors MUST handle scripted keyboard events to process aria-keyshortcuts. The aria-keyshortcuts attribute exposes the existence of these shortcuts so that assistive technologies can communicate this information to users.
                 * 
                 * Authors SHOULD provide a way to expose keyboard shortcuts so that all users may discover them, such as through the use of a tooltip. Authors MUST ensure that aria-keyshortcuts applied to disabled elements are unavailable.
                 * 
                 * Authors SHOULD avoid implementing shortcut keys that inhibit operating system, user agent, or assistive technology functionality. This requires the author to carefully consider both which keys to assign and the contexts and conditions in which the keys are available to the user. For guidance, see the keyboard shortcuts section of the WAI-ARIA Authoring Practices Guide [wai-aria-practices-1.1].
                 * 
                 */
                "aria-keyshortcuts"?: undefined | string;

                /**
                 * **Property**
                 * 
                 * Defines a string value that labels the current element. See related aria-labelledby.
                 * 
                 * The purpose of aria-label is the same as that of aria-labelledby. It provides the user with a recognizable name of the object. The most common accessibility API mapping for a label is the accessible name property.
                 * 
                 * If the label text is visible on screen, authors SHOULD use aria-labelledby and SHOULD NOT use aria-label. There may be instances where the name of an element cannot be determined programmatically from the content of the element, and there are cases where providing a visible label is not the desired user experience. Most host languages provide an attribute that could be used to name the element (e.g., the title attribute in HTML), yet this could present a browser tooltip. In the cases where a visible label or visible tooltip is undesirable, authors MAY set the accessible name of the element using aria-label. As required by the text alternative computation, user agents give precedence to aria-labelledby over aria-label when computing the accessible name property.
                 * 
                 */
                "aria-label"?: undefined | string;

                /**
                 * **Property**
                 * 
                 * Identifies the element (or elements) that labels the current element. See related aria-describedby.
                 * 
                 * The purpose of aria-labelledby is the same as that of aria-label. It provides the user with a recognizable name of the object. The most common accessibility API mapping for a label is the accessible name property.
                 * 
                 * If the interface is such that it is not possible to have a visible label on the screen, authors SHOULD use aria-label and SHOULD NOT use aria-labelledby. As required by the text alternative computation, user agents give precedence to aria-labelledby over aria-label when computing the accessible name property.
                 * 
                 * The aria-labelledby attribute is similar to aria-describedby in that both reference other elements to calculate a text alternative, but a label should be concise, where a description is intended to provide more verbose information.
                 */
                "aria-labelledby"?: undefined | string;

                /**
                 * **Property**
                 * 
                 * Defines the hierarchical level of an element within a structure.
                 * 
                 * This can be applied inside trees to tree items, to headings inside a document, to nested grids, nested tablists and to other structural items that may appear inside a container or participate in an ownership hierarchy. The value for aria-level is an integer greater than or equal to 1.
                 * 
                 * Levels increase with depth. If the DOM ancestry does not accurately represent the level, authors SHOULD explicitly define the aria-level attribute.
                 * 
                 * This attribute is applied to elements that act as leaf nodes within the orientation of the set, for example, on elements with role treeitem rather than elements with role group. This means that multiple elements in a set may have the same value for this attribute. Although it would be less repetitive to provide a single value on the container, restricting this to leaf nodes ensures that there is a single way for assistive technologies to use the attribute.
                 * 
                 * If the DOM ancestry accurately represents the level, the user agent can calculate the level of an item from the document structure. This attribute can be used to provide an explicit indication of the level when that is not possible to calculate from the document structure or the aria-owns attribute. User agent support for automatic calculation of level may vary; authors SHOULD test with user agents and assistive technologies to determine whether this attribute is needed. If the author intends for the user agent to calculate the level, the author SHOULD omit this attribute.
                 * 
                 * **Note**:  In the case of a treegrid, aria-level is supported on elements with the role row, not elements with role gridcell. At first glance, this may seem inconsistent with the application of aria-level on treeitem elements, but it is consistent in that the row acts as the leaf node within the vertical orientation of the grid, whereas the gridcell is a leaf node within the horizontal orientation of each row. Level is not supported on sets of cells within rows, so the aria-level attribute is applied to the element with the role row.
                 * 
                 */
                "aria-level"?: undefined | string;

                /**
                 * **Property**
                 * 
                 * Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.
                 * 
                 * The values of this attribute are expressed in degrees of importance. When regions are specified as polite, assistive technologies will notify users of updates but generally do not interrupt the current task, and updates take low priority. When regions are specified as assertive, assistive technologies will immediately notify the user, and could potentially clear the speech queue of previous updates.
                 * 
                 * Politeness levels are essentially an ordering mechanism for updates and serve as a strong suggestion to user agents or assistive technologies. The value may be overridden by user agents, assistive technologies, or the user. For example, if assistive technologies can determine that a change occurred in response to a key press or a mouse click, the assistive technologies may present that change immediately even if the value of the aria-live attribute states otherwise.
                 * 
                 * Since different users have different needs, it is up to the user to tweak his or her assistive technologies' response to a live region with a certain politeness level from the commonly defined baseline. Assistive technologies may choose to implement increasing and decreasing levels of granularity so that the user can exercise control over queues and interruptions.
                 * 
                 * When the property is not set on an object that needs to send updates, the politeness level is the value of the nearest ancestor that sets the aria-live attribute.
                 * 
                 * The aria-live attribute is the primary determination for the order of presentation of changes to live regions. Implementations will also consider the default level of politeness in a role when the aria-live attribute is not set in the ancestor chain (e.g., log changes are polite by default). Items which are assertive will be presented immediately, followed by polite items. User agents or assistive technologies MAY choose to clear queued changes when an assertive change occurs. (e.g., changes in an assertive region may remove all currently queued changes)
                 * 
                 * When live regions are marked as polite, assistive technologies SHOULD announce updates at the next graceful opportunity, such as at the end of speaking the current sentence or when the user pauses typing. When live regions are marked as assertive, assistive technologies SHOULD notify the user immediately. Because an interruption may disorient users or cause them to not complete their current task, authors SHOULD NOT use the assertive value unless the interruption is imperative.
                 * 
                 */
                "aria-live"?: undefined | "assertive" | "off" | "polite";
                /**
                 * **Property**
                 * 
                 * Indicates whether an element is modal when displayed.
                 * 
                 * The aria-modal attribute is used to indicate that the presence of a "modal" element precludes usage of other content on the page. For example, when a modal dialog is displayed, it is expected that the user's interaction is limited to the contents of the dialog, until the modal dialog loses focus or is no longer displayed.
                 * 
                 * When a modal element is displayed, assistive technologies SHOULD navigate to the element unless focus has explicitly been set elsewhere. Assistive technologies MAY limit navigation to the modal element's contents. If focus moves to an element outside the modal element, assistive technologies SHOULD NOT limit navigation to the modal element.
                 * 
                 * When a modal element is displayed, authors MUST ensure the interface can be controlled using only descendants of the modal element. In other words, if a modal dialog has a close button, the button should be a descendant of the dialog. When a modal element is displayed, authors SHOULD mark all other contents as inert (such as "inert subtrees" in HTML) if the ability to do so exists in the host language.
                 * 
                 */
                "aria-modal"?: undefined | string;

                /**
                 * **Property**
                 * 
                 * Indicates whether a text box accepts multiple lines of input or only a single line.
                 * 
                 * **Note**: In most user agent implementations, the default behavior of the ENTER or RETURN key is different between the single-line and multi-line text fields in HTML. When user has focus in a single-line <input type="text"> element, the keystroke usually submits the form. When user has focus in a multi-line <textarea> element, the keystroke inserts a line break. The WAI-ARIA textbox role differentiates these types of boxes with the aria-multiline attribute, so authors are advised to be aware of this distinction when designing the field.
                 */
                "aria-multiline"?: undefined | string;

                /**
                 * **Property**
                 * 
                 * Indicates that the user may select more than one item from the current selectable descendants.
                 * 
                 * Authors SHOULD ensure that selected descendants have the aria-selected attribute set to true, and selectable descendant have the aria-selected attribute set to false. Authors SHOULD NOT use the aria-selected attribute on descendants that are not selectable.
                 * 
                 * **Note**: Lists and trees are examples of roles that might allow users to select more than one item at a time.
                 * 
                 */
                "aria-multiselectable"?: undefined | string;

                /**
                 * **Property**
                 * 
                 * Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.
                 * 
                 * **Note**: In ARIA 1.1, the default value for aria-orientation changed from horizontal to undefined. Implicit defaults are defined on some roles (e.g., slider defaults to horizontal; scrollbar defaults to vertical) but remain undefined on roles where an expected default orientation is ambiguous (e.g., radiogroup).
                 * 
                 */
                "aria-orientation"?: undefined | string;



                /**
                 * **Property**
                 * 
                 * Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship between DOM elements where the DOM hierarchy cannot be used to represent the relationship. See related aria-controls.
                 * 
                 * The value of the aria-owns attribute is a space-separated list of IDREFS that reference one or more elements in the document by ID. The reason for adding aria-owns is to expose a parent/child contextual relationship to assistive technologies that is otherwise impossible to infer from the DOM.
                 * 
                 * If an element has both aria-owns and DOM children then the order of the child elements with respect to the parent/child relationship is the DOM children first, then the elements referenced in aria-owns. If the author intends that the DOM children are not first, then list the DOM children in aria-owns in the desired order. Authors SHOULD NOT use aria-owns as a replacement for the DOM hierarchy. If the relationship is represented in the DOM, do not use aria-owns. Authors MUST ensure that an element's ID is not specified in more than one other element's aria-owns attribute at any time. In other words, an element can have only one explicit owner.
                 * 
                 */
                "aria-owns"?: undefined | string;
                /**
                 * **Property**
                 * 
                 * Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value. A hint could be a sample value or a brief description of the expected format.
                 * 
                 * Authors SHOULD NOT use aria-placeholder instead of a label as their purposes are different: The label indicates what kind of information is expected. The placeholder text is a hint about the expected value. See related aria-labelledby and aria-label.
                 * 
                 * Authors SHOULD present this hint to the user by displaying the hint text at any time the control's value is the empty string. This includes cases where the control first receives focus, and when users remove a previously-entered value.
                 * 
                 * **Note**: As is the case with the related HTML placeholder attribute, use of placeholder text as a replacement for a displayed label can reduce the accessibility and usability of the control for a range of users including older users and users with cognitive, mobility, fine motor skill or vision impairments. While the hint given by the control's label is shown at all times, the short hint given in the placeholder attribute is only shown before the user enters a value. Furthermore, placeholder text may be mistaken for a pre-filled value, and as commonly implemented the default color of the placeholder text provides insufficient contrast and the lack of a separate visible label reduces the size of the hit region available for setting focus on the control.
                 */
                "aria-placeholder"?: undefined | string;

                /**
                 * **Property**
                 * 
                 * Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM. See related aria-setsize.
                 * 
                 * If all items in a set are present in the document structure, it is not necessary to set this attribute, as the user agent can automatically calculate the set size and position for each item. However, if only a portion of the set is present in the document structure at a given moment, this property is needed to provide an explicit indication of an element's position.
                 * 
                 * Authors MUST set the value for aria-posinset to an integer greater than or equal to 1, and less than or equal to the size of the set when that size is known. Authors SHOULD use aria-setsize.
                 * 
                 * When exposing aria-posinset on a menuitem, menuitemcheckbox, or menuitemradio, authors SHOULD set the value of aria-posinset with respect to the total number of items in the menu, excluding any separators.
                */
                "aria-posinset"?: undefined | string;

                /**
                 * **State**
                 * 
                 * Indicates the current "pressed" state of toggle buttons. See related aria-checked and aria-selected.
                 * 
                 * Toggle buttons require a full press-and-release cycle to change their value. Activating it once changes the value to true, and activating it another time changes the value back to false. A value of mixed means that the values of more than one item controlled by the button do not all share the same value. Examples of mixed-state buttons are described in WAI-ARIA Authoring Practices [wai-aria-practices-1.1]. If the attribute is not present, the button is not a toggle button.
                 * 
                 * The aria-pressed attribute is similar but not identical to the aria-checked attribute. Operating systems support pressed on buttons and checked on checkboxes.
                 * 
                 */
                "aria-pressed"?: undefined | string;


                /**
                 * **Property**
                 * 
                 * Indicates that the element is not editable, but is otherwise operable. See related aria-disabled.
                 * 
                 * This means the user can read but not set the value of the widget. Readonly elements are relevant to the user, and application authors SHOULD NOT restrict navigation to the element or its focusable descendants. Other actions such as copying the value of the element are also supported. This is in contrast to disabled elements, to which applications might not allow user navigation to descendants.
                 * 
                 * Examples include:
                 * 
                 * * A form element which represents a constant.
                 * * Row or column headers in a spreadsheet grid.
                 * * The result of a calculation such as a shopping cart total.
                 * 
                 * 
                 */
                "aria-readonly"?: undefined | string;

                /**
                 * **Property**
                 * 
                 * Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified. See related aria-atomic.
                 * 
                 * The attribute is represented as a space delimited list of the following values: additions, removals, text; or a single catch-all value all.
                 * 
                 * This is used to describe semantically meaningful changes, as opposed to merely presentational ones. For example, nodes that are removed from the top of a log are merely removed for purposes of creating room for other entries, and the removal of them does not have meaning. However, in the case of a buddy list, removal of a buddy name indicates that they are no longer online, and this is a meaningful event. In that case aria-relevant will be set to all. When the aria-relevant attribute is not provided, the default value, additions text, indicates that text modifications and node additions are relevant, but that node removals are irrelevant.
                 * 
                 * **Note**: aria-relevant values of removals or all are to be used sparingly. Assistive technologies only need to be informed of content removal when its removal represents an important change, such as a buddy leaving a chat room.
                 * 
                 * **Note**: Text removals should only be considered relevant if one of the specified values is 'removals' or 'all'. For example, for a text change from 'foo' to 'bar' in a live region with a default aria-relevant value, the text addition ('bar') would be spoken, but the text removal ('foo') would not.
                 * 
                 * aria-relevant is an optional attribute of live regions. This is a suggestion to assistive technologies, but assistive technologies are not required to present changes of all the relevant types.
                 * 
                 * When aria-relevant is not defined, an element's value is inherited from the nearest ancestor with a defined value. Although the value is a token list, inherited values are not additive; the value provided on a descendant element completely overrides any inherited value from an ancestor element.
                 * 
                 * When text changes are denoted as relevant, user agents MUST monitor any descendant node change that affects the text alternative computation of the live region as if the accessible name were determined from contents (nameFrom: contents). For example, a text change would be triggered if the HTML alt attribute of a contained image changed. However, no change would be triggered if there was a text change to a node outside the live region, even if that node was referenced (via aria-labelledby) by an element contained in the live region.
                 * 
                 */
                "aria-relevant"?: undefined | string;

                /**
                 * **Property**
                 * 
                 * Indicates that user input is required on the element before a form may be submitted.
                 * 
                 * For example, if the user needs to fill in an address field, the author will need to set the field's aria-required attribute to true.
                 * 
                 * **Note**: The fact that the element is required is often presented visually (such as a sign or symbol after the widget). Using the aria-required attribute allows the author to explicitly convey to assistive technologies that an element is required.
                 * 
                 * Unless an exactly equivalent native attribute is available, host languages SHOULD allow authors to use the aria-required attribute on host language form elements that require input or selection by the user.
                 * 
                 */
                "aria-required"?: undefined | string;

                /**
                 * **Property**
                 * 
                 * Defines a human-readable, author-localized description for the role of an element.
                 * 
                 * Some assistive technologies, such as screen readers, present the role of an element as part of the user experience. Such assistive technologies typically localize the name of the role, and they may customize it as well. Users of these assistive technologies depend on the presentation of the role name, such as "region," "button," or "slider," for an understanding of the purpose of the element and, if it is a widget, how to interact with it.
                 * 
                 * The aria-roledescription property gives authors the ability to override how assistive technologies localize and express the name of a role. Thus inappropriately using aria-roledescription may inhibit users' ability to understand or interact with an element. Authors SHOULD limit use of aria-roledescription to clarifying the purpose of non-interactive container roles like group or region, or to providing a more specific description of a widget.
                 * 
                 * When using aria-roledescription, authors SHOULD also ensure that:
                 * 
                 * 1. The element to which aria-roledescription is applied has a valid WAI-ARIA role or has an implicit WAI-ARIA role semantic.
                 * 1. The value of aria-roledescription is not empty or does not contain only whitespace characters.
                 * 
                 * User agents MUST NOT expose the aria-roledescription property if any of the following conditions exist:
                 * 
                 * 1. The element to which aria-roledescription is applied does not have a valid WAI-ARIA role or does not have an implicit WAI-ARIA role semantic.
                 * 1. The value of aria-roledescription is empty or contains only whitespace characters.
                 * 
                 * Assistive technologies SHOULD use the value of aria-roledescription when presenting the role of an element, but SHOULD NOT change other functionality based on the role of an element that has a value for aria-roledescription. For example, an assistive technology that provides functions for navigating to the next region or button SHOULD allow those functions to navigate to regions and buttons that have an aria-roledescription.
                 */
                "aria-roledescription"?: undefined | string;

                /**
                 * **Property**
                 * 
                 * Defines the total number of rows in a table, grid, or treegrid. See related aria-rowindex.
                 * 
                 * If all of the rows are present in the DOM, it is not necessary to set this attribute as the user agent can automatically calculate the total number of rows. However, if only a portion of the rows is present in the DOM at a given moment, this attribute is needed to provide an explicit indication of the number of rows in the full table.
                 * 
                 * Authors MUST set the value of aria-rowcount to an integer equal to the number of rows in the full table. If the total number of rows is unknown, authors MUST set the value of aria-rowcount to -1 to indicate that the value should not be calculated by the user agent.
                 */
                "aria-rowcount"?: undefined | string;


                /**
                 * **Property**
                 * 
                 * Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid. See related aria-rowcount and aria-rowspan.
                 * 
                 * If all of the rows are present in the DOM, it is not necessary to set this attribute as the user agent can automatically calculate the index of each row. However, if only a portion of the rows is present in the DOM at a given moment, this attribute is needed to provide an explicit indication of each row's position with respect to the full table.
                 * 
                 * Authors MUST set the value for aria-rowindex to an integer greater than or equal to 1, greater than the aria-rowindex value of any previous rows, and less than or equal to the number of rows in the full table. For a cell or gridcell which spans multiple rows, authors MUST set the value of aria-rowindex to the start of the span.
                 * 
                 * Authors SHOULD place aria-rowindex on each row. Authors MAY also place aria-rowindex on all of the children or owned elements of each row.
                 */
                "aria-rowindex"?: undefined | string;

                /**
                 * **Property**
                 * 
                 * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid. See related aria-rowindex and aria-colspan.
                 * 
                 * This attribute is intended for cells and gridcells which are not contained in a native table. When defining the row span of cells or gridcells in a native table, authors SHOULD use the host language's attribute instead of aria-rowspan. If aria-rowspan is used on an element for which the host language provides an equivalent attribute, user agents MUST ignore the value of aria-rowspan and instead expose the value of the host language's attribute to assistive technologies.
                 * 
                 * Authors MUST set the value of aria-rowspan to an integer greater than or equal to 0 and less than the value which would cause the cell or gridcell to overlap the next cell or gridcell in the same column. Setting the value to 0 indicates that the cell or gridcell is to span all the remaining rows in the row group.
                 * 
                 */
                "aria-rowspan"?: undefined | string;


                /**
                 * **State**
                 * 
                 * Indicates the current "selected" state of various widgets. See related aria-checked and aria-pressed.
                 * 
                 * This attribute is used with single-selection and multiple-selection widgets:
                 * 
                 * 1. Single-selection containers where the currently focused item is not selected. The selection normally follows the focus, and is managed by the user agent.
                 * 1. Multiple-selection containers. Authors SHOULD ensure that any selectable descendant of a container in which the aria-multiselectable attribute is true specifies a value of either true or false for the aria-selected attribute.
                 * 
                 * Any explicit assignment of aria-selected takes precedence over the implicit selection based on focus. If no DOM element in the widget is explicitly marked as selected, assistive technologies MAY convey implicit selection which follows the keyboard focus of the managed focus widget. If any DOM element in the widget is explicitly marked as selected, the user agent MUST NOT convey implicit selection for the widget.
                 * 
                 */
                "aria-selected"?: undefined | string;

                /**
                 * ****
                 */
                "aria-activedescendant"?: undefined | string;

                /**
                 * **Property**
                 * 
                 * Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM. See related aria-posinset.
                 * 
                 * This property is marked on the members of a set, not the container element that collects the members of the set. To orient the user by saying an element is "item X out of Y," the assistive technologies would use X equal to the aria-posinset attribute and Y equal to the aria-setsize attribute.
                 * 
                 * If all items in a set are present in the document structure, it is not necessary to set this property, as the user agent can automatically calculate the set size and position for each item. However, if only a portion of the set is present in the document structure at a given moment (in order to reduce document size), this property is needed to provide an explicit indication of set size.
                 * 
                 * Authors MUST set the value of aria-setsize to an integer equal to the number of items in the set. If the total number of items is unknown, authors SHOULD set the value of aria-setsize to -1.
                 * 
                 * When exposing aria-setsize on a menuitem, menuitemcheckbox, or menuitemradio, authors SHOULD set the value of aria-setsize based on the total number of items in the menu, excluding any separators.
                 */
                "aria-setsize"?: undefined | string;
                /**
                 * **Property**
                 * 
                 * Indicates if items in a table or grid are sorted in ascending or descending order.
                 * 
                 * Authors SHOULD only apply this property to table headers or grid headers. If the property is not provided, there is no defined sort order. For each table or grid, authors SHOULD apply aria-sort to only one header at a time.
                 * 
                 */
                "aria-sort"?: undefined | string;

                /**
                 * **Property**
                 * 
                 * Defines the maximum allowed value for a range widget.
                 * 
                 * Authors MUST ensure the value of aria-valuemax is greater than or equal to the value of aria-valuemin. If the aria-valuenow has a known maximum and minimum, the author SHOULD provide properties for aria-valuemax and aria-valuemin.
                 * 
                 * **Note**: A range widget starts with a given value, which can be increased until reaching the maximum value, defined by this property. Declaring the minimum and maximum values allows assistive technology to convey the size of the range to users.
                 * 
                 */
                "aria-valuemax"?: undefined | string;

                /**
                 * **Property**
                 * 
                 * Defines the minimum allowed value for a range widget.
                 * 
                 * Authors MUST ensure the value of aria-valuemin is less than or equal to the value of aria-valuemax. If the aria-valuenow has a known maximum and minimum, the author SHOULD provide properties for aria-valuemax and aria-valuemin.
                 * 
                 * **Note**: A range widget starts with a given value, which can be decreased until reaching the minimum value, defined by this property. Declaring the minimum and maximum values allows assistive technology to convey the size of the range to users.
                 */
                "aria-valuemin"?: undefined | string;

                /**
                 * **Property**
                 *  
                 * Defines the current value for a range widget. See related aria-valuetext.
                 * 
                 * This property is used, for example, on a range widget such as a slider or progress bar.
                 * 
                 * If the current value is not known (for example, an indeterminate progress bar), the author SHOULD NOT set the aria-valuenow attribute. If the aria-valuenow attribute is absent, no information is implied about the current value. If the aria-valuenow has a known maximum and minimum, the author SHOULD provide properties for aria-valuemax and aria-valuemin.
                 * 
                 * The value of aria-valuenow is a decimal number. If the range is a set of numeric values, then aria-valuenow is one of those values. For example, if the range is [0, 1], a valid aria-valuenow is 0.5. A value outside the range, such as -2.5 or 1.1, is invalid.
                 * 
                 * For progressbar elements and scrollbar elements, assistive technologies SHOULD render the value to users as a percent, calculated as a position on the range from aria-valuemin to aria-valuemax if both are defined, otherwise the actual value with a percent indicator. For elements with role slider and spinbutton, assistive technologies SHOULD render the actual value to users.
                 * 
                 * When the rendered value cannot be accurately represented as a number, authors SHOULD use the aria-valuetext attribute in conjunction with aria-valuenow to provide a user-friendly representation of the range's current value. For example, a slider may have rendered values of small, medium, and large. In this case, the values of aria-valuetext would be one of the strings: small, medium, or large.
                 * 
                 * **Note**: If aria-valuetext is specified, assistive technologies render that instead of the value of aria-valuenow.
                 */
                "aria-valuenow"?: undefined | string;


                /**
                 * **Property**
                 * 
                 * Defines the human readable text alternative of aria-valuenow for a range widget.
                 * 
                 * This property is used, for example, on a range widget such as a slider or progress bar.
                 * 
                 * If the aria-valuetext attribute is set, authors SHOULD also set the aria-valuenow attribute, unless that value is unknown (for example, on an indeterminate progressbar).
                 * 
                 * Authors SHOULD only set the aria-valuetext attribute when the rendered value cannot be meaningfully represented as a number. For example, a slider may have rendered values of small, medium, and large. In this case, the values of aria-valuenow could range from 1 through 3, which indicate the position of each value in the value space, but the aria-valuetext would be one of the strings: small, medium, or large. If the aria-valuetext attribute is absent, the assistive technologies will rely solely on the aria-valuenow attribute for the current value.
                 * 
                 * If aria-valuetext is specified, assistive technologies SHOULD render that value instead of the value of aria-valuenow.
                 * 
                 */
                "aria-valuetext"?: undefined | string;



                inert?: undefined | boolean;

            }
        }
    }
}
