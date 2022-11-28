import { createContext, createElement, h, Ref, VNode } from "preact";
import { useMergedProps } from "preact-prop-helpers";
import { useContext, useEffect, useImperativeHandle } from "preact/hooks";
import { ElementToTag, PropModifier } from "../props";
import { useAccordion, UseAccordionParameters, UseAccordionReturnType, UseAccordionSectionInfo, UseAccordionSectionParameters, UseAccordionSectionReturnType, UseAccordionContext, useAccordionSection } from "../use-accordion";
import { Heading } from "./heading";
import { memoForwardRef, PartialExcept, useDefault } from "./util";

type Get<T, K extends keyof T> = T[K];

interface AccordionPropsBase extends
    Get<UseAccordionParameters<UseAccordionSectionInfo>, "accordionParameters">,
    Get<UseAccordionParameters<UseAccordionSectionInfo>, "linearNavigationParameters">,
    Get<UseAccordionParameters<UseAccordionSectionInfo>, "managedChildrenParameters"> {
    ref?: Ref<UseAccordionReturnType<UseAccordionSectionInfo>>;
}

interface AccordionSectionPropsBase<HeaderElement extends Element, HeaderButtonElement extends Element, BodyElement extends Element> extends
    Get<UseAccordionSectionParameters<HeaderButtonElement, UseAccordionSectionInfo>, "accordionSectionParameters">,
    Get<UseAccordionSectionParameters<HeaderButtonElement, UseAccordionSectionInfo>, "managedChildParameters">,
    Get<UseAccordionSectionParameters<HeaderButtonElement, UseAccordionSectionInfo>, "buttonParameters">,
    Get<UseAccordionSectionParameters<HeaderButtonElement, UseAccordionSectionInfo>, "rovingTabIndexChildParameters">,
    Get<UseAccordionSectionParameters<HeaderButtonElement, UseAccordionSectionInfo>, "pressParameters"> {
    ref?: Ref<UseAccordionSectionReturnType<HeaderElement, HeaderButtonElement, BodyElement>>;
}


export interface AccordionProps extends PartialExcept<AccordionPropsBase, "navigationDirection"> {
    render(info: UseAccordionReturnType<UseAccordionSectionInfo>): VNode<any>;
}

export interface AccordionSectionProps<HeaderElement extends Element, HeaderButtonElement extends Element, BodyElement extends Element> extends PartialExcept<AccordionSectionPropsBase<HeaderElement, HeaderButtonElement, BodyElement>, "index" | "tagButton"> {
    render(info: UseAccordionSectionReturnType<HeaderElement, HeaderButtonElement, BodyElement>): VNode<any>;
}


const AccordionSectionContext = createContext<UseAccordionContext<any>>(null!);
export const Accordion = memoForwardRef(function Accordion({
    disableArrowKeys,
    disableHomeEndKeys,
    initialIndex,
    navigationDirection,
    onAfterChildLayoutEffect,
    onChildrenMountChange,
    navigatePastEnd,
    navigatePastStart,
    pageNavigationSize,
    render,
    ..._rest
}: AccordionProps, ref?: Ref<any>) {

    const info = useAccordion<UseAccordionSectionInfo>({
        accordionParameters: { initialIndex },
        linearNavigationParameters: {
            disableArrowKeys: useDefault("disableArrowKeys", disableArrowKeys),
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            navigationDirection,
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap",
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
        },
        managedChildrenParameters: { onAfterChildLayoutEffect, onChildrenMountChange }
    });
    useImperativeHandle(ref!, () => info);

    return (
        <AccordionSectionContext.Provider value={info.context}>{render(info)}</AccordionSectionContext.Provider>
    )
})
/*
export function defaultRenderAccordionSection<HeaderContainerElement extends Element, HeaderButtonElement extends Element, BodyElement extends Element>({ makePropsHeadingContainer, makePropsHeadingButton, makePropsBody, tagBody, tagHeadingButton }: { tagHeadingButton: ElementToTag<HeaderButtonElement>; tagBody: ElementToTag<BodyElement>; makePropsHeadingContainer(info: UseAccordionSectionReturnType<HeaderButtonElement, BodyElement>): h.JSX.HTMLAttributes<HeaderContainerElement>, makePropsHeadingButton(info: UseAccordionSectionReturnType<HeaderButtonElement, BodyElement>): h.JSX.HTMLAttributes<HeaderButtonElement>, makePropsBody(info: UseAccordionSectionReturnType<HeaderButtonElement, BodyElement>): h.JSX.HTMLAttributes<BodyElement> }) {
    return function (info: UseAccordionSectionReturnType<HeaderButtonElement, BodyElement>): VNode<any> {
        return (
            <>
                <Heading<HeaderContainerElement> {...makePropsHeadingContainer(info)} heading={createElement(tagHeadingButton as never, (makePropsHeadingButton(info)))}>
                    {createElement(tagBody as never, (makePropsBody(info)))}
                </Heading>
            </>
        )
    }
}*/

export const AccordionSection = memoForwardRef(function AccordionSection<HeaderContainerElement extends Element, HeaderButtonElement extends Element, BodyElement extends Element>({
    open,
    index,
    tagButton,
    disabled,
    bodyRole,
    onPress,
    exclude,
    hidden,
    render,
}: AccordionSectionProps<HeaderContainerElement, HeaderButtonElement, BodyElement>, ref?: Ref<any>) {
    const context = useContext(AccordionSectionContext) as UseAccordionContext<UseAccordionSectionInfo>;
    const info = useAccordionSection<HeaderContainerElement, HeaderButtonElement, BodyElement>({
        buttonParameters: { disabled: disabled ?? false, tagButton, onPress: onPress ?? null },
        accordionSectionParameters: { open, bodyRole: bodyRole ?? "region" },
        managedChildParameters: { index, },
        rovingTabIndexChildParameters: { hidden: hidden ?? false },
        pressParameters: { exclude },
        refElementParameters: {},
        context
    });

    useImperativeHandle(ref!, () => info);

    return render(info);
})

export function AccordionDemo() {
    return (
        <Accordion
            disableArrowKeys={false}
            disableHomeEndKeys={false}
            navigationDirection="vertical"
            pageNavigationSize={0.1}
            render={info =>
                <div>
                    {Array.from((function* () {
                        for (let i = 0; i < 10; ++i) {
                            yield <AccordionSectionDemo index={0} />;
                        }
                    })())}
                </div>
            }
            navigatePastEnd="wrap"
            navigatePastStart="wrap" />
    );
}

export function AccordionSectionDemo({ index }: { index: number }) {
    return (
        <AccordionSection<any, HTMLButtonElement, HTMLParagraphElement>
            bodyRole="region"
            disabled={false}
            exclude={undefined}
            hidden={false}
            index={index}
            onPress={null}
            open={undefined}
            render={info => (
                <Heading heading={<><span>Accordion section ${index}</span><button {...info.propsHeaderButton}>Toggle open</button></>}>
                    <p {...info.propsBody} hidden={info.accordionSectionReturn.expanded}>
                        Accordion body content
                    </p>
                </Heading>
            )}
            tagButton="button"
        />
    )
}
