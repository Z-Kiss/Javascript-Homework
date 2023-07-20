import {useContext} from "react";
import {PropContext, useHandleSaturationLevel, useHandleZoomLevel} from "../../context/PropProvider";

export default function RangeInputForSaturation(){
    const {saturationLevel} = useContext(PropContext)
    const handleSaturationLevel = useHandleSaturationLevel();

    return(
        <input type="range"  min={0} max={100} value={saturationLevel} step={1}  onChange={(e) => handleSaturationLevel(e)}/>
    )
}