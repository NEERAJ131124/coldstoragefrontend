import React, { useState } from 'react'
import { Btn } from '../../../../../AbstractElements';
import { TouchspinProp } from '../../../../../Types/Forms.type';
import { Input } from 'reactstrap';

export default function CommonTouchspin({ color, arrowIcon, outline, btnClass }: TouchspinProp) {
    const [touchspinValue, setTouchspinValue] = useState(Math.floor(Math.random() * 10));

    const decrementHandle = () => {
        if (touchspinValue > 0) {
            setTouchspinValue(touchspinValue - 1);
        }
    }
    const incrementHandle = () => {
        setTouchspinValue(touchspinValue + 1)
    }

    return (
        <div className="touchspin-wrapper">
            <Btn onClick={decrementHandle} color='transparent' outline={outline} className={`decrement-touchspin btn-touchspin ${btnClass ? btnClass : ''}`}>
                {arrowIcon ? <i className="fa-solid fa-angle-left" /> : <i className="fa-solid fa-minus" />}
            </Btn>
            <Input className={`mx-1 input-touchspin spin-outline-${color}`} type="number" value={touchspinValue} readOnly />
            <Btn onClick={incrementHandle} color='transparent' outline={outline} className={`increment-touchspin btn-touchspin ${btnClass ? btnClass : ''}`}>
                {arrowIcon ? <i className="fa-solid fa-angle-right" /> : <i className="fa-solid fa-plus" />}
            </Btn>
        </div>
    )
}
