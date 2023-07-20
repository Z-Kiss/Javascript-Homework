import {useContext} from "react";
import {PropContext, useHandleZoomLevel} from "../../context/PropProvider";

export default function RangeInputForZoom(){
    const {zoomLevel} = useContext(PropContext)
    const handleZoomLevel = useHandleZoomLevel();

    return(
        <input type="range" style={{transform: "rotate(270deg)",pointerEvents:'none',}} min={1} max={10} value={zoomLevel} step={1}  onChange={(e) => handleZoomLevel(e)}/>
    )
}