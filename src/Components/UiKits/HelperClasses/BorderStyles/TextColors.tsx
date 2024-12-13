import React from 'react'
import { Col } from 'reactstrap'
import { H5 } from '../../../../AbstractElements'
import { TextColorsTitle } from '../../../../Utils/Constants'
import { borderColorData } from '../../../../Data/UiKits/HelperClasses'

export default function TextColors() {
    return (
        <Col xxl={3} sm={6}>
            <div className='border-wrapper bg-light font-dark h-100 dark-helper border'>
                <H5 className="f-w-600 mb-3">{TextColorsTitle}</H5>
                {borderColorData && borderColorData.map((item, index) => (
                    <div className="d-flex align-items-center mb-2 gap-2" key={index}>
                        <div className={`helper-box helper-text border text-${item} ${index === borderColorData.length - 1 ? 'bg-dark' : ''}`} >
                            {'A '}
                        </div>
                        <span>{`.text-${item}`}</span>
                    </div>
                ))}
            </div>
        </Col>
    )
}
