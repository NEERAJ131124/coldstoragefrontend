import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { WithoutBordersStyleTitle } from '../../../../../Utils/Constants'
import { withoutBordersStyleSubTitle } from '../../../../../Data/Forms/FormControls'
import CommonCardFooter from '../../Common/CommonCardFooter'
import WithoutBordersStyleForm from './WithoutBordersStyleForm'

export default function WithoutBordersStyle() {
    return (
        <Col sm={12} xxl={6} className="box-col-6">
            <Card>
                <CommonCardHeader title={WithoutBordersStyleTitle} subTitle={withoutBordersStyleSubTitle} />
                <CardBody>
                    <WithoutBordersStyleForm />
                </CardBody>
                <CommonCardFooter footerClass="text-end" color1="warning" color2="transparent" btn2Class="list-light-warning" />
            </Card>
        </Col>
    )
}
