import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { defaultStyleSubTitle } from '../../../../../Data/Forms/FormControls'
import { DefaultStyleTitle } from '../../../../../Utils/Constants'
import CommonCardFooter from '../../Common/CommonCardFooter'
import DefaultStyleForm from './DefaultStyleForm'

export default function DefaultStyle() {
    return (
        <Col sm={12} xxl={6} className="box-col-6">
            <Card>
                <CommonCardHeader title={DefaultStyleTitle} subTitle={defaultStyleSubTitle} />
                <CardBody className="megaoptions-border-space-sm">
                    <DefaultStyleForm />
                </CardBody>
                <CommonCardFooter footerClass='text-end' color1='primary' color2='light' btn2Class='text-dark' />
            </Card>
        </Col>
    )
}
