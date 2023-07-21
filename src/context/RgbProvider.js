import {createContext, useContext, useState} from "react";

export const RgbContext = createContext({});

const RgbProvider = ({children}) => {
    const [red, setRed] = useState(0);
    const [blue, setBlue] = useState(0);
    const [green, setGreen] = useState(0);

    const handleBlue = (e) => {
        setBlue(e.currentTarget.value);
    }
    const handleGreen = (e) => {
        setGreen(e.currentTarget.value);
    }
    const handleRed = (e) => {
        setRed(e.currentTarget.value);
    }

    return (
        <RgbContext.Provider value={{red, setRed, green, setGreen, blue, setBlue, handleRed, handleGreen, handleBlue}}>
            {children}
        </RgbContext.Provider>
    )
}

export const useHandleRed = () => useContext(RgbContext).handleRed;
export const useHandleGreen = () => useContext(RgbContext).handleGreen;
export const useHandleBlue = () => useContext(RgbContext).handleBlue;
export default RgbProvider;