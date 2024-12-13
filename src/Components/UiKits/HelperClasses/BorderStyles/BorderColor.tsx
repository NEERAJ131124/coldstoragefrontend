import React from 'react'
import { Col } from 'reactstrap'
import { H5 } from '../../../../AbstractElements'
import { BorderColorTitle } from '../../../../Utils/Constants'
import { borderColorData } from '../../../../Data/UiKits/HelperClasses'

export default function BorderColor() {
    return (
        <Col xxl={3} sm={6}>
            <div className='border-wrapper h-100 bg-light font-dark dark-helper border'>
                <H5 className="f-w-600 mb-3">{BorderColorTitle}</H5>
                {borderColorData && borderColorData.slice(0, 7).map((item, index) => (
                    <div className={`d-flex align-items-center gap-2 ${index !== borderColorData.length - 1 ? 'mb-2' : ''}`} key={index}>
                        <div className={`helper-box border border-${item}`} />
                        <span>{`.border-${item}`}</span>
                    </div>
                ))}
            </div>
        </Col>
    )
}
