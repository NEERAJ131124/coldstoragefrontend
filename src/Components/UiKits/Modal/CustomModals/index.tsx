import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { CustomModalsTitle } from '../../../../Utils/Constants'
import { customModalSubTitle } from '../../../../Data/UiKits/Modal'
import CustomModal1 from './CustomModal1'
import CustomModal2 from './CustomModal2'
import CustomModal3 from './CustomModal3'

export default function CustomModals() {
    return (
        <Col xs={12}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={CustomModalsTitle} subTitle={customModalSubTitle} />
                <CardBody>
                    <Row className='g-3'>
                        <CustomModal1 />
                        <CustomModal2 />
                        <CustomModal3 />
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
