import React, {useContext} from "react";
import {PropContext} from "./context/PropProvider";
import BaseImage from "./component/BaseImage";
import RangeInputForZoom from "./component/RangeInput/RangeInputForZoom";
import RangeInputForSaturation from "./component/RangeInput/RangeInputForSaturation";


export default function App() {
    const {zoomLevel, setZoomLevel} = useContext(PropContext);
    const {saturationLevel, setSaturationLevel} = useContext(PropContext);

    document.addEventListener('keyup', (e) => handleArrowKeys(e));
    document.addEventListener('wheel', (e) => handleMouseWheelEvent(e));

    function handleArrowKeys(e) {
        e.preventDefault();
        if (e.key === "ArrowLeft") {
            if (saturationLevel > 10) {
                setSaturationLevel(saturationLevel - 10);
                e.stopPropagation();
            }
        } else if (e.key === "ArrowRight") {
            if (saturationLevel < 90) {
                setSaturationLevel(saturationLevel + 10);
                e.stopPropagation();
            }
        }
    }

    function handleMouseWheelEvent(e) {
        if (e.deltaY < 0) {
            if (zoomLevel < 10){
                setZoomLevel(zoomLevel + 1)
            }
        } else {
            if (zoomLevel > 1) {
                setZoomLevel(zoomLevel - 1)
            }
        }
    }


    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <div style={{display: "flex", flexDirection: "row"}}>
                <BaseImage/>
                <RangeInputForZoom/>
            </div>
            <div style={{display: "flex", flexDirection: "column", width: "45%", paddingTop: "20px"}}>
                <RangeInputForSaturation/>
            </div>
        </div>
    )
};

