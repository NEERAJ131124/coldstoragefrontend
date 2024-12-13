import React from 'react'
import { Col } from 'reactstrap'
import { H5 } from '../../../../AbstractElements'
import { LightBackgroundsTitle } from '../../../../Utils/Constants'
import { borderColorData } from '../../../../Data/UiKits/HelperClasses'

export default function LightBackground() {
    return (
        <Col xl={4} sm={6}>
            <div className='border-wrapper h-100 border'>
                <H5 className="f-w-600 mb-3">{LightBackgroundsTitle}</H5>
                {borderColorData && borderColorData.slice(0, 7).map((item, index) => (
                    <div className="d-flex align-items-center mb-2 gap-2" key={index}>
                        <div className={`helper-box alert-light-${item}`} />
                        <span>{`.alert-light-${item}`}</span>
                    </div>
                ))}
            </div>
        </Col>
    )
}
