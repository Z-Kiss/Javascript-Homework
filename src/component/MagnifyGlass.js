import React, {useContext} from 'react';
import {MagnifyGlassPropContext} from "../context/MagnifyGlassPropProvider";

const MagnifyGlass = ({canvasImageUrl}) => {

    const {cursorPosition, zoomLevel} = useContext(MagnifyGlassPropContext);
    let topPosition;
    let leftPosition;

    if (cursorPosition.y < 50) {
        topPosition = 0;
    } else if (cursorPosition.y > 382) {
        topPosition = 332;
    } else {
        topPosition = cursorPosition.y - 50;
    }
    if (cursorPosition.x < 50) {
        leftPosition = 0;
    } else if (cursorPosition.x > 718) {
        leftPosition = 668;
    } else {
        leftPosition = cursorPosition.x - 50;
    }

    return (<>
            <div
                style={{
                    position: 'absolute',
                    top: topPosition,
                    left: leftPosition,
                    width: '100px',
                    height: '100px',
                    borderRadius: '50px',
                    pointerEvents: 'none',
                    backgroundRepeat: "no-repeat",
                    backgroundImage: `url(${canvasImageUrl})`,
                    backgroundPositionX: 100 / 768 * cursorPosition.x + '%',
                    backgroundPositionY: 100 / 432 * cursorPosition.y + '%',
                    backgroundSize: 768 * zoomLevel + "px " + 432 * zoomLevel + "px",
                }}
            >
            </div>
        </>
    );
};

export default MagnifyGlass;
