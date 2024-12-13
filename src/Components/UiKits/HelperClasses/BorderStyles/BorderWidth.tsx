import React from 'react'
import { Col } from 'reactstrap'
import { H5 } from '../../../../AbstractElements'
import { BorderWidthTitle } from '../../../../Utils/Constants'
import { dynamicNumber } from '../../../../Utils'

export default function BorderWidth() {
    return (
        <Col xxl={3} sm={6}>
            <div className='border-wrapper h-100 bg-light font-dark dark-helper border'>
                <H5 className="f-w-600 mb-3">{BorderWidthTitle}</H5>
                {dynamicNumber(5).map((item, index) => (
                    <div className="d-flex align-items-center mb-2 gap-2" key={index}>
                        <div className={`helper-box border border-${item}`} />
                        <span>{`.border-${item}`}</span>
                    </div>
                ))}
            </div>
        </Col>
    )
}
