import React from 'react'
import { Col } from 'reactstrap'
import { H6, LI, OL } from '../../../../AbstractElements'
import { OrderListTitle } from '../../../../Utils/Constants'

export default function OrderList() {
    return (
        <Col md={6} xxl={4}>
            <div className='card-wrapper border rounded-3 h-100 bg-light-secondary'>
                <H6 className="sub-title f-w-600">{OrderListTitle}</H6>
                <OL className="mb-0">
                    <LI>{'Ui Kits'}</LI>
                    <LI>{'Bonus Ui'}</LI>
                    <LI>{'Animations'}</LI>
                    <LI>
                        <OL>
                            <LI>{'Typography'}</LI>
                            <LI>{'Avatars'}</LI>
                            <LI>{'Grid'}</LI>
                            <LI>{'Tag & pills'}</LI>
                            <LI>{'Alert'}</LI>
                        </OL>
                    </LI>
                    <LI>{'Dropdown'}</LI>
                    <LI>{'Tabs'}</LI>
                    <LI>{'Accordion'}</LI>
                </OL>
            </div>
        </Col>
    )
}
