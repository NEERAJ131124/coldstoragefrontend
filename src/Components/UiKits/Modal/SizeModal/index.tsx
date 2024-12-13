import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { SizeModalTitle } from '../../../../Utils/Constants'
import { sizeModalSubTitle } from '../../../../Data/UiKits/Modal'
import FullScreen from './FullScreen'
import ExtraLarge from './ExtraLarge'
import LargeModal from './LargeModal'
import SmallModal from './SmallModal'

export default function SizeModal() {
    return (
        <Col lg={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={SizeModalTitle} subTitle={sizeModalSubTitle} />
                <CardBody className='badge-spacing'>
                    <FullScreen />
                    <ExtraLarge />
                    <LargeModal />
                    <SmallModal />
                </CardBody>
            </Card>
        </Col>
    )
}
