import React from 'react'
import { Col } from 'reactstrap'
import { H5 } from '../../../../AbstractElements'
import { CustomBorderTitle } from '../../../../Utils/Constants'
import { customBorderData } from '../../../../Data/UiKits/HelperClasses'

export default function CustomBorder() {
    return (
        <Col xxl={3} sm={6}>
            <div className='border-wrapper h-100 bg-light font-dark dark-helper border'>
                <H5 className="f-w-600 mb-3">{CustomBorderTitle}</H5>
                {customBorderData && customBorderData.map((item, index) => (
                    <div className="d-flex align-items-center mb-2 gap-2" key={index}>
                        <div className={`helper-box bg-light border rounded-${item}`} />
                        <span>{`.rounded-${item}`}</span>
                    </div>
                ))}
            </div>
        </Col>
    )
}
