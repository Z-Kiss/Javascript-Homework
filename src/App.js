import React, {useContext, useEffect} from "react";
import {MagnifyGlassPropContext} from "./context/MagnifyGlassPropProvider";
import RangeInputForZoom from "./component/RangeInput/RangeInputForZoom";
import RangeInputForRed from "./component/RangeInput/RangeInputForRed";
import RangeInputForGreen from "./component/RangeInput/RangeInputForGreen";
import RangeInputForBlue from "./component/RangeInput/RangeInputForBlue";
import CanvasImage from "./component/CanvasImage";
import {RgbContext} from "./context/RgbProvider";


export default function App() {
    const {zoomLevel, setZoomLevel} = useContext(MagnifyGlassPropContext);
    const {colors, setColors} = useContext(RgbContext);
    let activeInputName;

    document.addEventListener('wheel', (e) => handleMouseWheelEvent(e));
    useEffect(() => {
        document.addEventListener('keyup', (e) => handleKeyUp(e));
        return () => {
            document.removeEventListener('keyup', (e) => handleKeyUp(e));
        };
    }, []);



    const switchActiveRangeInput = (e) => {
        switch (e.key) {
            case "r" :
                activeInputName = "red";
                break;
            case "g" :
                activeInputName = "green";
                break;
            case "b" :
                activeInputName = "blue";
                break;
            default:
                break;
        }
    }

    const handleKeyUp = (e) => {
        e.preventDefault();
        switchActiveRangeInput(e);
        handleColorValues(e);
    }

    const handleColorValues = (e) => {
        e.preventDefault();
        if (e.key === "ArrowLeft") {
            if (colors[activeInputName] > -225) {
                setColors(prevState => ({
                    ...prevState, [activeInputName]: prevState[activeInputName] - 25
                }));
            }
        } else if (e.key === "ArrowRight") {
            if (colors[activeInputName] < 225) {
                setColors(prevState => ({
                    ...prevState, [activeInputName]: prevState[activeInputName] + 25
                }));
            }
        }
    }

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
                <RangeInputForRed/>
                <RangeInputForGreen/>
                <RangeInputForBlue/>
            </div>
        </div>

    )
};
