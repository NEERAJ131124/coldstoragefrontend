import React from 'react'
import { Col } from 'reactstrap'
import { H5 } from '../../../../AbstractElements'
import { SubtractiveBorderTitle } from '../../../../Utils/Constants'
import { subtractiveData } from '../../../../Data/UiKits/HelperClasses'

export default function SubtractiveBorder() {
    return (
        <Col md={4} sm={6}>
            <div className='border-wrapper h-100 border'>
                <H5 className='f-w-600 mb-3'>{SubtractiveBorderTitle}</H5>
                {subtractiveData && subtractiveData.map((item, index) => (
                    <div className={`d-flex align-items-center gap-2 ${index !== subtractiveData.length - 1 ? 'mb-2' : ''}`} key={index}>
                        <div className={`helper-box bg-light border border-${item}`} /><span>{`.border-${item}`}</span>
                    </div>
                ))}
            </div>
        </Col>
    )
}
