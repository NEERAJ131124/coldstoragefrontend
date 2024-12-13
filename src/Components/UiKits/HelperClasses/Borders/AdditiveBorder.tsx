import React from 'react'
import { Col } from 'reactstrap'
import { H5 } from '../../../../AbstractElements'
import { AdditiveBorderTitle } from '../../../../Utils/Constants'
import { additiveBorderData } from '../../../../Data/UiKits/HelperClasses'

export default function AdditiveBorder() {
    return (
        <Col md={4} sm={6}>
            <div className='border-wrapper h-100 border'>
                <H5 className='f-w-600 mb-3'>{AdditiveBorderTitle}</H5>
                {additiveBorderData && additiveBorderData.map((item, index) => (
                    <div className={`d-flex align-items-center gap-2 ${index !== additiveBorderData.length - 1 ? 'mb-2' : ''}`} key={index}>
                        <div className={`helper-box bg-light ${item}`} /><span>{`.${item}`}</span>
                    </div>
                ))}
            </div>
        </Col>
    )
}
