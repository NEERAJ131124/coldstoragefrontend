import React from 'react'
import { Col } from 'reactstrap'
import { H6, LI, UL } from '../../../../AbstractElements'
import { UnorderListTitle } from '../../../../Utils/Constants'
import { unorderListData } from '../../../../Data/UiKits/Typography'

export default function UnorderList() {
    return (
        <Col md={6} xxl={4}>
            <div className='card-wrapper border rounded-3 h-100 bg-light-primary'>
                <H6 className='sub-title f-w-600'>{UnorderListTitle}</H6>
                <UL className='simple-list'>
                    {unorderListData && unorderListData.map((item, index) => (
                        <LI key={index}>{item}</LI>
                    ))}
                </UL>
            </div>
        </Col>
    )
}
