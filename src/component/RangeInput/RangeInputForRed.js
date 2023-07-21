import {useContext} from "react";
import {RgbContext, useHandleRed} from "../../context/RgbProvider";


export default function RangeInputForRed({activeRangeInput,handleRangeInputValue}){
    const {red} = useContext(RgbContext);
    const handleRed = useHandleRed();


    return(
        <>
            <label htmlFor="input-red">Red</label>
            <input id={"input-red"} type="range"  min={-250} max={250} value={red} step={25} onChange={(e) => handleRed(e)}/>
        </>

    )
}