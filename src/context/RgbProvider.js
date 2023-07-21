import {createContext, useContext, useState} from "react";

export const RgbContext = createContext({});

const RgbProvider = ({children}) => {
    const [colors, setColors] = useState({red:0, green:0, blue:0});

    const handleColorsValue = (e) => {
        const {name, value} = e.currentTarget
        setColors(prevState => ({
            ...prevState, [name]: value
        }));
    }

    return (
        <RgbContext.Provider value={{colors, setColors, handleColorsValue}}>
            {children}
        </RgbContext.Provider>
    )
}

export const useHandleColorsValue = () => useContext(RgbContext).handleColorsValue;
export default RgbProvider;
