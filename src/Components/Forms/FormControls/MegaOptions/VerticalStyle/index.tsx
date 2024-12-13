import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { VerticalStyleTitle } from '../../../../../Utils/Constants'
import { verticalStyleSubTitle } from '../../../../../Data/Forms/FormControls'
import CommonCardFooter from '../../Common/CommonCardFooter'
import VerticalStyleForm from './VerticalStyleForm'

export default function VerticalStyle() {
    return (
        <Col sm={12} xxl={6} className="box-col-12">
            <Card className="height-equal">
                <CommonCardHeader title={VerticalStyleTitle} subTitle={verticalStyleSubTitle} />
                <CardBody>
                    <VerticalStyleForm />
                </CardBody>
                <CommonCardFooter footerClass="text-end" color1="primary" color2="light" btn2Class='text-dark' />
            </Card>
        </Col>
    )
}
