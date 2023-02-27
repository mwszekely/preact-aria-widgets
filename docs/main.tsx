import "core-js"
import { render } from "preact";
import { NotificationProviderContext, setDebugLogging, useNotificationProvider, Heading } from "../dist/index.js";
import * as Accordion from "./demos/accordion.js";
import * as Button from "./demos/button.js";
import * as CheckboxGroup from "./demos/checkbox-group.js";
import * as Checkbox from "./demos/checkbox.js";
import * as Dialog from "./demos/dialog.js";
import * as Gridlist from "./demos/gridlist.js";
import * as ListboxMulti from "./demos/listbox-multi.js";
import * as ListboxSingle from "./demos/listbox-single.js";
import * as Menu from "./demos/menu.js";
import * as Radio from "./demos/radio.js";
import * as Slider from "./demos/slider.js";
import * as Table from "./demos/table.js";
import * as Tabs from "./demos/tabs.js";
import * as Toast from "./demos/toast.js";
import * as Toolbar from "./demos/toolbar.js";
import * as Tooltip from "./demos/tooltip.js";

//import { options } from "preact";
//options.debounceRendering = queueMicrotask;

//const RandomWords = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".split(" ");

setDebugLogging(true)

const Component = () => {
    const { children, context } = useNotificationProvider({ targetAssertive: "aria-notifications-assertive", targetPolite: "aria-notifications-polite" })
    return (
        <NotificationProviderContext.Provider value={context}>
            {children}
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
            </Heading>
        </NotificationProviderContext.Provider>)
}

requestAnimationFrame(() => {
    render(<Component />, document.getElementById("root")!);
})
