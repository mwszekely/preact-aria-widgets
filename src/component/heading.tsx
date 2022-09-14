import { ComponentChildren, createContext, createElement, h } from "preact";
import { useContext } from "preact/hooks";
import { warnOnOverwrite } from "../props";

const HeadingLevelContext = createContext(0);

export function Heading({ children, heading, ...props }: { heading: ComponentChildren } & h.JSX.HTMLAttributes<HTMLHeadingElement>) {
    const headingLevelBeforeUs = useContext(HeadingLevelContext);
    const newHeadingLevel = headingLevelBeforeUs + 1;
    let tag: string;
    if (newHeadingLevel <= 6) {
        tag = `h${newHeadingLevel}`;
    }
    else {
        tag = 'div';
        props["aria-level"] = warnOnOverwrite("Heading", "aria-level", props["aria-level"], `${newHeadingLevel}`);
    }
    
    return (
        <>
        <HeadingReset newLevel={headingLevelBeforeUs + 1}>
            {createElement(tag as any, props, heading)}
            {children}
        </HeadingReset>
        </>
    )
}

export function HeadingReset({ newLevel, children }: { newLevel: number, children: ComponentChildren }){    
    return (
        <HeadingLevelContext.Provider value={newLevel}>
            {children}
        </HeadingLevelContext.Provider>
    )
}
