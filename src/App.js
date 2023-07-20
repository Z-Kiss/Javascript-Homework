import React, {useState} from "react";
import MagnifyGlass from "./component/MagnifyGlass";


export default function App() {
    const [cursorPos, setCursorPos] = useState({x: 0, y: 0})
    const [zoomLevel, setZoomLevel] = useState(2)
    const [showCircle, setShowCircle] = useState(true)


    const recordCursorPosition = (e) => {
        if (e.target.id === "baseImage") {
            setCursorPos({x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY})
        }
    }

    const handleZoomLevel=(e)=>{
        console.log(e.currentTarget.value)
        setZoomLevel(e.currentTarget.value)
    }
    function handleMouseWheelEvent(e) {
        if(e.deltaY < 0){
            if(zoomLevel < 10)
            setZoomLevel(zoomLevel + 1)
        }else{
            if(zoomLevel > 1){
                setZoomLevel(zoomLevel - 1)
            }
        }
        e.value = zoomLevel
    }
    return (
        <div style={{display: "flex", flexDirection:"column"}} onWheel={(e) => handleMouseWheelEvent(e)}>
            <div style={{display: "flex", flexDirection:"row"}}>
                <img
                    onMouseMove={(e) => recordCursorPosition(e)}
                    onMouseEnter={() => setShowCircle(true)}
                    onMouseLeave={() => setShowCircle(false)}
                    id={"filtered-image"}
                    src={"./images/pic.jpg"}
                    alt=""
                    style={{width: "768px", height: "432px"}}
                />
                {showCircle && <MagnifyGlass image={"./images/pic.jpg"} cursorPosition={cursorPos} zoomLevel={zoomLevel}/>}
                <input type="range" style={{transform: "rotate(270deg)"}} min={1} max={10} value={zoomLevel} step={1}  onChange={(e) => handleZoomLevel(e)}/>
            </div>
            <div style={{display: "flex", flexDirection:"column", width:"50%"}}>
                <input type="range"  min={0} max={100} value={zoomLevel} step={1}  onChange={(e) => handleZoomLevel(e)}/>
                <input type="range"  min={0} max={100} value={zoomLevel} step={1}  onChange={(e) => handleZoomLevel(e)}/>
                <input type="range"  min={0} max={100} value={zoomLevel} step={1}  onChange={(e) => handleZoomLevel(e)}/>
            </div>

        </div>
    )
};

