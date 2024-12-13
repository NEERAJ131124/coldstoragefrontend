import React from 'react'
import { Col } from 'reactstrap'
import { H5 } from '../../../../AbstractElements'
import { AdditiveRadiusTitle } from '../../../../Utils/Constants'
import { additiveRadiusData } from '../../../../Data/UiKits/HelperClasses'

export default function AdditiveRadius() {
    return (
        <Col md={4} sm={12}>
            <div className='border-wrapper h-100 border'>
                <H5 className="f-w-600 mb-3">{AdditiveRadiusTitle}</H5>
                {additiveRadiusData && additiveRadiusData.map((item, index) => (
                    <div className={`d-flex align-items-center gap-2 ${index !== additiveRadiusData.length - 1 ? 'mb-2' : ''}`} key={index}>
                        <div className={`helper-radius radius-wrapper ${item}`} /><span>{`.${item}`}</span>
                    </div>
                ))}
            </div>
        </Col>
    )
}
