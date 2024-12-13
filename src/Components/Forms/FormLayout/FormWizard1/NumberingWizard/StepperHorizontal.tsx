import React from 'react'
import { stepperHorizontalData } from '../../../../../Data/Forms/FormLayout'
import { StepperHorizontalProp } from '../../../../../Types/Forms.type'

export default function StepperHorizontal({ step, finishClicked }: StepperHorizontalProp) {
    return (
        <>
            {stepperHorizontalData.map((data, index) => (
                <div key={index} className={`stepper-${data.class} step ${step > index + 1 || finishClicked === true ? "done active " : ""}`}>
                    <div className="step-circle">
                        <span>{index + 1}</span>
                    </div>
                    <div className="step-title">{data.text}</div>
                    <div className="step-bar-left" />
                    <div className="step-bar-right" />
                </div>
            ))}
        </>
    )
}