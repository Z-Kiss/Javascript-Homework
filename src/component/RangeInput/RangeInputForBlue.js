import {useContext} from "react";
import {RgbContext, useHandleBlue} from "../../context/RgbProvider";


export default function RangeInputForBlue(){
    const {blue} = useContext(RgbContext);
    const handleBlue = useHandleBlue();

    return(
        <>
        <label htmlFor="input-blue"> Blue </label>
        <input id={"input-blue"} type="range"  min={-250} max={250} value={blue} step={25}  onChange={(e) => handleBlue(e)}/>
        </>
    )
}