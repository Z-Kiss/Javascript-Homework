import React, {useContext} from "react";
import {MagnifyGlassPropContext} from "./context/MagnifyGlassPropProvider";
import RangeInputForZoom from "./component/RangeInput/RangeInputForZoom";
import RangeInputForRed from "./component/RangeInput/RangeInputForRed";
import RangeInputForGreen from "./component/RangeInput/RangeInputForGreen";
import RangeInputForBlue from "./component/RangeInput/RangeInputForBlue";
import CanvasImage from "./component/CanvasImage";


export default function App() {
    const {zoomLevel, setZoomLevel} = useContext(MagnifyGlassPropContext);

    document.addEventListener('wheel', (e) => handleMouseWheelEvent(e));

    const handleMouseWheelEvent = (e) => {
        if (e.deltaY < 0) {
            if (zoomLevel < 10) {
                setZoomLevel(zoomLevel + 1);
            }
        } else {
            if (zoomLevel > 1) {
                setZoomLevel(zoomLevel - 1);
            }
        }
    }

    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <div style={{display: "flex", flexDirection: "row"}}>
                <CanvasImage imageUrl={"./images/pic.jpg"}/>
                <RangeInputForZoom/>
            </div>
            <div style={{display: "flex", flexDirection: "column", width: "45%", paddingTop: "20px"}}>
                <RangeInputForRed  />
                <RangeInputForGreen />
                <RangeInputForBlue  />
            </div>
        </div>

    )
}
;

