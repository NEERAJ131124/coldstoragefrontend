import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { FullscreenModalTitle } from '../../../../Utils/Constants'
import { fullscreenModalSubTitle } from '../../../../Data/UiKits/Modal'
import FullScreenOutline from './FullScreenOutline'
import FullScreenBelowSm from './FullScreenBelowSm'
import BelowMd from './BelowMd'
import BelowLg from './BelowLg'
import BelowXl from './BelowXl'
import BelowXxl from './BelowXxl'

export default function FullscreenModal() {
    return (
        <Col xl={12}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={FullscreenModalTitle} subTitle={fullscreenModalSubTitle} />
                <CardBody className='badge-spacing'>
                    <FullScreenOutline />
                    <FullScreenBelowSm />
                    <BelowMd />
                    <BelowLg />
                    <BelowXl />
                    <BelowXxl />
                </CardBody>
            </Card>
        </Col>
    )
}
