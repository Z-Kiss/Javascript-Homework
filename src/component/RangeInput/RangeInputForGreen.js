import {useContext} from "react";
import {RgbContext, useHandleColorsValue} from "../../context/RgbProvider";

export default function RangeInputForGreen() {
    const {colors} = useContext(RgbContext);
    const handleColorsValue = useHandleColorsValue();

    return (
        <>
            <label htmlFor="input-green"> Green </label>
            <input id={"input-green"} type="range" name={"green"} min={-250} max={250} value={colors.green} step={25}
                   onChange={(e) => handleColorsValue(e)}/>
        </>
    )
}
