
import { render, h } from "preact";
import { Heading } from "../component/heading";
import * as Accordion from "./demos/accordion"
import * as Button from "./demos/button"
import * as Checkbox from "./demos/checkbox"
import * as CheckboxGroup from "./demos/checkbox-group"
import * as ListboxMulti from "./demos/listbox-multi"
import * as ListboxSingle from "./demos/listbox-single"
import * as Menu from "./demos/menu"
import * as Radio from "./demos/radio"
import * as Slider from "./demos/slider"
import * as Dialog from "./demos/dialog"
import * as Tabs from "./demos/tabs"
import * as Tooltip from "./demos/tooltip"
import * as Toast from "./demos/toast"
import * as Table from "./demos/table"
import * as Gridlist from "./demos/gridlist"
import * as Toolbar from "./demos/toolbar"
import { setDebugLogging } from "../props";

//import { options } from "preact";
//options.debounceRendering = queueMicrotask;

//const RandomWords = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".split(" ");

setDebugLogging(true)

const Component = () => {
    
    return (
        <Heading heading="Demos">
            <Heading heading="Accordion"><Accordion.Demo /></Heading>
            <Heading heading="Button"><Button.Demo /></Heading>
            <Heading heading="Checkbox"><Checkbox.Demo /></Heading>
            <Heading heading="Checkbox Group"><CheckboxGroup.Demo /></Heading>
            <Heading heading="Dialog"><Dialog.Demo /></Heading>
            <Heading heading="Gridlist"><Gridlist.Demo /></Heading>
            <Heading heading="Single-select Listbox"><ListboxSingle.Demo /></Heading>
            <Heading heading="Multi-select Listbox"><ListboxMulti.Demo /></Heading>
            <Heading heading="Menu"><Menu.Demo /></Heading>
            <Heading heading="Radio"><Radio.Demo /></Heading>
            <Heading heading="Slider"><Slider.Demo /></Heading>
            <Heading heading="Toolbar"><Toolbar.Demo /></Heading>
            <Heading heading="Toast"><Toast.Demo /></Heading>
            <Heading heading="Tooltip"><Tooltip.Demo /></Heading>
            <Heading heading="Tabs"><Tabs.Demo /></Heading>
            <Heading heading="Table"><Table.Demo /></Heading>
            {/*
            
            */}
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
