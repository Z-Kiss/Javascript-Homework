import React, {useRef, useEffect, useContext, useState} from 'react';
import {RgbContext} from "../context/RgbProvider";
import MagnifyGlass from "./MagnifyGlass";
import {useHandleCursorPosition} from "../context/MagnifyGlassPropProvider";

const CanvasImage = ({imageUrl}) => {
    const canvasRef = useRef(null)
    const {red, blue, green} = useContext(RgbContext)
    const [canvasImagUrl, setCanvasImageUrl] = useState("")
    const [showCircle, setShowCircle] = useState(false);
    const handleCursorPosition = useHandleCursorPosition();

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const image = new Image();
        image.src = imageUrl;
        image.onload = () => {
            ctx.drawImage(image, 0, 0, 768, 432);
            const imageData = ctx.getImageData(0, 0, 768, 432);
            const data = imageData.data
            for (let i = 0; i < data.length; i += 4) {
                // red
                data[i] = data[i] + red * 1;
                // green
                data[i + 1] = data[i + 1] + green * 1;
                // blue
                data[i + 2] = data[i + 2] + blue * 1;
            }
            ctx.putImageData(imageData, 0, 0);
            setCanvasImageUrl(canvas.toDataURL());
        };
    }, [imageUrl, red, green, blue]);

    return (
        <div
            onMouseMove={(e) => handleCursorPosition(e)}
            id={"baseImage"}
            onMouseEnter={() => setShowCircle(true)}
            onMouseLeave={() => setShowCircle(false)}
        >
            <canvas style={{pointerEvents: 'none'}} ref={canvasRef} width={768} height={432}/>
            {showCircle && <MagnifyGlass canvasImageUrl={canvasImagUrl}/>}
        </div>
    );
};

export default CanvasImage;
