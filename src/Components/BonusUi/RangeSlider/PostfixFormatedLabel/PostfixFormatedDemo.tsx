import React, { useState } from 'react'
import { Range, getTrackBackground } from 'react-range';

export default function PostfixFormatedDemo() {
    const [values5, setValues5] = useState([10]);

    return (
        <div className="range-container">
            <Range
                values={values5} step={1.00}
                min={0.00} max={20.00}
                onChange={(values5) => setValues5(values5)}
                renderTrack={({ props, children }) => (
                    <div
                        onMouseDown={props.onMouseDown}
                        onTouchStart={props.onTouchStart}
                        className="range-track"
                    >
                        <output className="range-output">0 kg</output>
                        <div
                            ref={props.ref}
                            className="range-track-bar"
                            style={{
                                background: getTrackBackground({
                                    values: values5,
                                    colors: ['#308e87', '#ccc'],
                                    min: 0,
                                    max: 20
                                }),
                            }}>{children}</div>
                        <output className="range-output">20 kg</output>
                    </div>
                )}
                renderThumb={({ props, isDragged }) => (
                    <div {...props} className="range-thumb" >
                        <div className={`range-thumb-bar ${isDragged ? 'range-thumb-bar-dragged' : ''}`} />
                    </div>
                )}
            />
            <output className="range-output" id='output'>
                {values5[0]} kg
            </output>
        </div>
    )
}