import {useContext} from "react";
import {RgbContext, useHandleColorsValue} from "../../context/RgbProvider";

export default function RangeInputForRed() {
    const {colors} = useContext(RgbContext);
    const handleColorsValue = useHandleColorsValue()

    return (
        <>
            <label htmlFor="input-red">Red</label>
            <input id={"input-red"} type="range" name={"red"} min={-250} max={250} value={colors.red} step={25}
                   onChange={(e) => handleColorsValue(e)}/>
        </>

    )
}
