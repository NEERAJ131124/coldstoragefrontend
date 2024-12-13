import React, { useState } from 'react'
import { Range, getTrackBackground } from 'react-range';

export default function PointFormatedDemo() {
    const [values4, setValues4] = useState([10.00]);

    return (
        <div className="range-container">
            <Range
                values={values4} step={1.00}
                min={0.00} max={20.00}
                onChange={(values4) => setValues4(values4)}
                renderTrack={({ props, children }) => (
                    <div
                        onMouseDown={props.onMouseDown}
                        onTouchStart={props.onTouchStart}
                        className="range-track"
                    >
                        <output className="range-output">0.00</output>
                        <div
                            ref={props.ref}
                            className="range-track-bar"
                            style={{
                                background: getTrackBackground({
                                    values: values4,
                                    colors: ['#308e87', '#ccc'],
                                    min: 0,
                                    max: 20
                                }),
                            }}
                        >{children} </div>
                        <output className="range-output">20.00</output>
                    </div>
                )}
                renderThumb={({ props, isDragged }) => (
                    <div {...props} className="range-thumb" >
                        <div className={`range-thumb-bar ${isDragged ? 'range-thumb-bar-dragged' : ''}`} />
                    </div>
                )}
            />
            <output className="range-output" id='output'>
                {values4[0]}.00
            </output>
        </div>
    )
}

