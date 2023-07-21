import {useContext} from "react";
import {MagnifyGlassPropContext, useHandleSaturationLevel} from "../../context/MagnifyGlassPropProvider";

export default function RangeInputForSaturation(){
    const {saturationLevel} = useContext(MagnifyGlassPropContext);
    const handleSaturationLevel = useHandleSaturationLevel();

    return(
        <input type="range"  min={0} max={100} value={saturationLevel} step={1}  onChange={(e) => handleSaturationLevel(e)}/>
    )
}