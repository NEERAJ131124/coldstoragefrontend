import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { LiveToastTitle } from '../../../../Utils/Constants'
import { liveToastSubTitle } from '../../../../Data/BonusUi/Toasts'
import TopRightToast from './TopRightToast'
import BottomRightToast from './BottomRightToast'
import TopLeftToast from './TopLeftToast'
import BottomLeftToast from './BottomLeftToast'

export default function LiveToast() {
    return (
        <Col md={6}>
            <Card>
                <CommonCardHeader title={LiveToastTitle} subTitle={liveToastSubTitle} />
                <CardBody className='position-relative common-flex'>
                    <TopRightToast />
                    <BottomRightToast />
                    <TopLeftToast />
                    <BottomLeftToast />
                </CardBody>
            </Card>
        </Col>
    )
}
