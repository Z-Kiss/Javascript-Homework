import {useContext} from "react";
import {RgbContext, useHandleColorsValue,} from "../../context/RgbProvider";

export default function RangeInputForBlue(){
    const {colors} = useContext(RgbContext);
    const handleColorsValue = useHandleColorsValue();

    return(
        <>
        <label htmlFor="input-blue"> Blue </label>
        <input id={"input-blue"} type="range" name={"blue"}  min={-250} max={250} value={colors.blue} step={25}  onChange={(e) => handleColorsValue(e)}/>
        </>
    )
}
