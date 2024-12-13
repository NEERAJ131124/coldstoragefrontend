import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { HorizontalStyleTitle } from '../../../../../Utils/Constants'
import { horizontalStyleSubTitle } from '../../../../../Data/Forms/FormControls'
import CommonCardFooter from '../../Common/CommonCardFooter'
import HorizontalStyleForm from './HorizontalStyleForm'

export default function HorizontalStyle() {
    return (
        <Col sm={12} xxl={6} className="box-col-12">
            <Card className="height-equal">
                <CommonCardHeader title={HorizontalStyleTitle} subTitle={horizontalStyleSubTitle} />
                <CardBody>
                    <HorizontalStyleForm />
                </CardBody>
                <CommonCardFooter footerClass="text-end" color1="primary" color2="light" btn2Class='text-dark' />
            </Card>
        </Col>
    )
}
