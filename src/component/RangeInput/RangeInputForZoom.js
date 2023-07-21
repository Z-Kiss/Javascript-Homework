import {useContext} from "react";
import {MagnifyGlassPropContext, useHandleZoomLevel} from "../../context/MagnifyGlassPropProvider";

export default function RangeInputForZoom(){
    const {zoomLevel} = useContext(MagnifyGlassPropContext);
    const handleZoomLevel = useHandleZoomLevel();

    return(
        <>
            <input id={"input-zoom"} type="range" style={{transform: "rotate(270deg)",pointerEvents:'none',}} min={1} max={10} value={zoomLevel} step={1}  onChange={(e) => handleZoomLevel(e)}/>
        </>
    )
}