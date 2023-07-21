import {useContext} from "react";
import {RgbContext, useHandleGreen} from "../../context/RgbProvider";


export default function RangeInputForGreen() {
    const {green} = useContext(RgbContext);
    const handleGreen = useHandleGreen();



return (
    <>
        <label htmlFor="input-green"> Green </label>
        <input id={"input-green"} type="range" min={-250} max={250} value={green} step={25} onChange={(e) => handleGreen(e)}/>
    </>
)
}