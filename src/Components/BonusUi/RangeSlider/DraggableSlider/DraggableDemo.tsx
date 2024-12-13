import React, { useState } from 'react'
import { Range, getTrackBackground } from 'react-range';

export default function DraggableDemo() {
    const [values, setValues] = useState([5, 10]);
    const STEP = 1;
    const MIN = 0;
    const MAX = 20;
    return (
        <Range
            values={values} step={STEP} min={MIN} max={MAX}
            onChange={values => {
                setValues(values);
            }}
            renderTrack={({ props, children }) => (
                <div
                    onMouseDown={props.onMouseDown}
                    onTouchStart={props.onTouchStart}
                    className="range-track"
                >
                    <output className="range-output">
                        {values[0]}
                    </output>
                    <div
                        ref={props.ref}
                        className="range-track-bar"
                        style={{
                            background: getTrackBackground({
                                values, colors: ['#ccc', '#308e87', '#ccc'],
                                min: MIN, max: MAX
                            }),
                        }}>{children}</div>
                    <output className="range-output">{values[1]}</output>
                </div>
            )}
            renderThumb={({ props, isDragged }) => (
                <div {...props} className="range-thumb" >
                    <div className={`range-thumb-bar ${isDragged ? 'range-thumb-bar-dragged' : ''}`} />
                </div>
            )}
        />
    )
}