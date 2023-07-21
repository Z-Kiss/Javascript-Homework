import {useContext, useState} from "react";
import {MagnifyGlassPropContext, useHandleCursorPosition} from "../context/MagnifyGlassPropProvider";
import MagnifyGlass from "./MagnifyGlass";


export default function BaseImage() {
    const [showCircle, setShowCircle] = useState(true);
    const handleCursorPosition = useHandleCursorPosition();
    const {saturationLevel, cursorPosition, zoomLevel} = useContext(MagnifyGlassPropContext);


    return (
        <>
            <img
                onMouseMove={(e) => handleCursorPosition(e)}
                onMouseEnter={() => setShowCircle(true)}
                onMouseLeave={() => setShowCircle(false)}
                id={"baseImage"}
                src={"./images/pic.jpg"}
                alt=""
                style={{width: "768px", height: "432px", filter: `saturate(${saturationLevel}%)`}}
            />
            {showCircle &&
                <MagnifyGlass image={"./images/pic.jpg"} cursorPosition={cursorPosition} zoomLevel={zoomLevel}/>}
        </>
    )
}