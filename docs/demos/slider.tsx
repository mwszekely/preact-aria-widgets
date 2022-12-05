
import { useState } from "preact-prop-helpers";
import { Slider, SliderThumb } from "../../component/slider";
import { EventDetail } from "../../index";

function DemoSliderThumb({ index }: { index: number }) {
    const [value, setValue] = useState(0);

    return (
        <SliderThumb<HTMLInputElement>
            index={index}
            tag="input"
            label={`Slider thumb #${index}`}
            value={value}
            onValueChange={e => setValue(e[EventDetail].value)}
            min={0}
            max={10}
            render={info => {
                return (
                    <input {...info.propsSliderThumb} />
                )
            }}/>
    )
}


export function Blurb() {
    return (
        <>
            <p><a href="https://www.w3.org/WAI/ARIA/apg/patterns/listbox/">In accordance with the ARIA guidelines for Listbox patterns,</a> this widget supports the following:</p>
            <ul>
                <li>The children are treated as a composite component with list navigation; see <code>AiraSingleSelectList</code> for more information</li>
                <li>When opened, the menu will focus the first element within it. When closed (by pressing escape, pressing the button again, or tabbing out of the menu), the button that opened it will have focus restored to it.</li>
                <li>When the menu is closed because another element on the page was focused instead, focus will not be modified.</li>
            </ul>
            <p><strong>Things <em>not</em> handled:</strong></p>
            <ul>
                <li>TODO</li>
            </ul>
        </>
    )
}

export function Code() {
    return (<code>{``}</code>)
}

export function Demo() {
    const [count, setCount] = useState(5);


    return (
        <>
            <Blurb />
            <Code />
            <label><input type="number" min={0} value={count} onInput={e => setCount(e.currentTarget.valueAsNumber)} /> # of slider thumbs</label>
            <div>
                <Slider
                    min={0}
                    max={10}
                    children={<>{Array.from((function* () {
                        for (let i = 0; i < count; ++i) {
                            yield <div><DemoSliderThumb index={i} key={i} /></div>
                        }
                    })())}
                    </>} />
            </div>
        </>
    )
}