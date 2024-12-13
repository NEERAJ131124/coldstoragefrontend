import React from 'react'
import { Col } from 'reactstrap'
import { H5 } from '../../../../AbstractElements'
import { DarkBackgroundTitle } from '../../../../Utils/Constants'
import { borderColorData } from '../../../../Data/UiKits/HelperClasses'

export default function DarkBackground() {
    return (
        <Col xl={4} sm={6}>
            <div className='border-wrapper h-100 border'>
                <H5 className="f-w-600 mb-3">{DarkBackgroundTitle}</H5>
                {borderColorData && borderColorData.map((item, index) => (
                    <div className={`d-flex align-items-center gap-2 ${index !== borderColorData.length - 1 ? 'mb-2' : ''}`} key={index}>
                        <div className={`helper-box bg-${item}`} /><span>{`.bg-${item}`}</span>
                    </div>
                ))}
            </div>
        </Col>
    )
}
