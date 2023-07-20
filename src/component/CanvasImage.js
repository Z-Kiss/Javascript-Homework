import React, { useEffect, useRef } from 'react';

const CanvasImage = ({ imageUrl }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const image = new Image();

        image.onload = () => {
            context.drawImage(image, 0, 0, 768, 432);
        };

        image.src = imageUrl;
    }, [imageUrl]);

    return <canvas ref={canvasRef} />;
};

export default CanvasImage;