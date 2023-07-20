import {createContext, useContext, useState} from "react";

export const PropContext = createContext({});


const PropProvider = ({children}) =>{

    const [cursorPosition, setCursorPosition] = useState({x: 0, y: 0})
    const [zoomLevel, setZoomLevel] = useState(2)
    const [saturationLevel, setSaturationLevel] = useState(50)
    const handleCursorPosition = (e) => {
        if (e.target.id === "baseImage") {
            setCursorPosition({x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY})
        }
    }
    const handleZoomLevel=(e)=>{
        setZoomLevel(e.currentTarget.value)
    }

    const handleSaturationLevel = (e) => {
        setSaturationLevel(e.currentTarget.value)
    }


    return(
        <PropContext.Provider value={{zoomLevel, setZoomLevel, cursorPosition,saturationLevel,
            setSaturationLevel,handleCursorPosition, handleSaturationLevel, handleZoomLevel}}>
            {children}
        </PropContext.Provider>
    )
}

export const useHandleCursorPosition = () => useContext(PropContext).handleCursorPosition;
export const useHandleZoomLevel = () => useContext(PropContext).handleZoomLevel;
export const useHandleSaturationLevel = () => useContext(PropContext).handleSaturationLevel;
export default PropProvider;