import React, { useState } from 'react'
import { Range, getTrackBackground } from 'react-range';

export default function DefaultRangeDemo() {
    const [values1, setValues1] = useState([10]);
    return (
        <div className="range-container">
            <Range values={values1} step={1} min={0} max={20}
                onChange={(values1) => setValues1(values1)}
                renderTrack={({ props, children }) => (
                    <div onMouseDown={props.onMouseDown}
                        onTouchStart={props.onTouchStart}
                        className="range-track"
                    >
                        <output className="range-output">0</output>
                        <div ref={props.ref}
                            className="range-track-bar"
                            style={{
                                background: getTrackBackground({
                                    values: values1,
                                    colors: ['#308e87', '#ccc'],
                                    min: 0,
                                    max: 20
                                })
                            }} >{children}</div>
                        <output className="range-output">20</output>
                    </div>
                )}
                renderThumb={({ props, isDragged }) => (
                    <div {...props} className="range-thumb" >
                        <div className={`range-thumb-bar ${isDragged ? 'range-thumb-bar-dragged' : ''}`} />
                    </div>)}
            />
            <output className="range-output" id='output'>
                {values1[0]}
            </output>
        </div>
    )
}