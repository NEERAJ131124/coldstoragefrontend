import React from 'react'
import { H5, Image } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'
import { SuccessfullyCompleted } from '../../../../../Utils/Constants'

export default function CompletedForm() {
    return (
        <div className="form-completed">
            <Image src={dynamicImage(`gif/success/successful.gif`)} alt="successful" />
            <H5 className="f-w-700">{SuccessfullyCompleted}</H5>
        </div>
    )
}