import React, {useState} from 'react';

const MagnifyGlass = ({image, cursorPosition, zoomLevel}) => {

    return (
        <div
            style={{

                position: 'absolute',
                top: cursorPosition.y-50,
                left: cursorPosition.x-50,
                width: '100px',
                height: '100px',
                borderRadius: '50px',
                pointerEvents:'none',
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${image})`,
                backgroundPositionX: 100/768*cursorPosition.x + '%',
                backgroundPositionY: 100/432*cursorPosition.y + '%',
                backgroundSize:768*zoomLevel+"px"+" "+432*zoomLevel+"px",

            }}
        >

        </div>
    );

};

export default MagnifyGlass;