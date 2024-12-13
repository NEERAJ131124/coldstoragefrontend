import React from 'react'
import { Col } from 'reactstrap'
import { H5 } from '../../../../AbstractElements'
import { ExtendedBackgroundTitle } from '../../../../Utils/Constants'

export default function ExtendedBackground() {
    return (
        <Col xl={4} sm={12}>
            <div className='border-wrapper h-100 border'>
                <H5 className="f-w-600 mb-3">{ExtendedBackgroundTitle}</H5>
                <div className="d-flex align-items-center mb-2 gap-2">
                    <div className="helper-box light-card" /><span>{'.light-card'}</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                    <div className="helper-box light-background border" /><span>{'.light-background'}</span>
                </div>
            </div>
        </Col>
    )
}
