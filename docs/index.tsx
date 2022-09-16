
import { render, h } from "preact";
import { Heading } from "../component/heading";
import * as Accordion from "./demos/accordion"
import * as Button from "./demos/button"
import * as Checkbox from "./demos/checkbox"
import * as CheckboxGroup from "./demos/checkbox-group"
import * as ListboxMulti from "./demos/listbox-multi"

//import { options } from "preact";
//options.debounceRendering = queueMicrotask;

//const RandomWords = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".split(" ");


const Component = () => {
    return (
        <Heading heading="Demos">
            <Heading heading="Accordion"><Accordion.Demo /></Heading>
            <Heading heading="Button"><Button.Demo /></Heading>
            <Heading heading="Checkbox"><Checkbox.Demo /></Heading>
            <Heading heading="Checkbox Group"><CheckboxGroup.Demo /></Heading>
            <Heading heading="Multi-select Listbox"><ListboxMulti.Demo /></Heading>
            {/*
       
        <DemoTable />


        <DemoUseFocusTrap />
        <DemoUseDroppable />
        <DemoUseDraggable />
        <input />*/}
        </Heading>)
}

requestAnimationFrame(() => {
    render(<Component />, document.getElementById("root")!);
})
