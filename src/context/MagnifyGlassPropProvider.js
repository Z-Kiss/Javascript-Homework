import {createContext, useContext, useState} from "react";

export const MagnifyGlassPropContext = createContext({});


const MagnifyGlassPropProvider = ({children}) =>{
    const [cursorPosition, setCursorPosition] = useState({x: 0, y: 0});
    const [zoomLevel, setZoomLevel] = useState(2);
    const [saturationLevel, setSaturationLevel] = useState(50);
    const handleCursorPosition = (e) => {
        if (e.target.id === "baseImage") {
            setCursorPosition({x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY});
        }
    }
    const handleZoomLevel=(e)=>{
        setZoomLevel(e.currentTarget.value);
    }
    const handleSaturationLevel = (e) => {
        setSaturationLevel(e.currentTarget.value);
    }
    return(
        <MagnifyGlassPropContext.Provider value={{zoomLevel, setZoomLevel, cursorPosition,saturationLevel,
            setSaturationLevel,handleCursorPosition, handleSaturationLevel, handleZoomLevel}}>
            {children}
        </MagnifyGlassPropContext.Provider>
    )
}

export const useHandleCursorPosition = () => useContext(MagnifyGlassPropContext).handleCursorPosition;
export const useHandleZoomLevel = () => useContext(MagnifyGlassPropContext).handleZoomLevel;
export const useHandleSaturationLevel = () => useContext(MagnifyGlassPropContext).handleSaturationLevel;
export default MagnifyGlassPropProvider;