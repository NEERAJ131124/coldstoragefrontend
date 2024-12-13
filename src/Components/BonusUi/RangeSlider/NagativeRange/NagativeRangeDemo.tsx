import React, { useState } from 'react'
import { Range, getTrackBackground } from 'react-range';

export default function NagativeRangeDemo() {
    const [values2, setValues2] = useState([-10]);

    return (
        <div className="range-container">
            <Range
                values={values2} step={-1}
                min={-20} max={0}
                onChange={(values2) => setValues2(values2)}
                renderTrack={({ props, children }) => (
                    <div
                        onMouseDown={props.onMouseDown}
                        onTouchStart={props.onTouchStart}
                        className="range-track"
                    >
                        <output className='range-output'>0</output>
                        <div
                            ref={props.ref}
                            className="range-track-bar"
                            style={{
                                background: getTrackBackground({
                                    values: values2,
                                    colors: ['#308e87', '#ccc'],
                                    min: -20, max: -0
                                })
                            }}
                        >{children}</div>
                        <output className='range-output'>-20</output>
                    </div>
                )}
                renderThumb={({ props, isDragged }) => (
                    <div {...props} className="range-thumb">
                        <div className={`range-thumb-bar ${isDragged ? 'range-thumb-bar-dragged' : ''}`} />
                    </div>
                )}
            />
            <output className='range-output' id='output'>
                {values2[0]}
            </output>
        </div>
    )
}