import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { OfferStyleBorderTitle } from '../../../../../Utils/Constants'
import { offerStyleBorderSubTitle } from '../../../../../Data/Forms/FormControls'
import CommonCardFooter from '../../Common/CommonCardFooter'
import OfferStyleBorderForm from './OfferStyleBorderForm'

export default function OfferStyleBorder() {
    return (
        <Col sm={12} xxl={6} className="box-col-6">
            <Card>
                <CommonCardHeader title={OfferStyleBorderTitle} subTitle={offerStyleBorderSubTitle} />
                <CardBody className="megaoptions-border-space-sm">
                    <OfferStyleBorderForm />
                </CardBody>
                <CommonCardFooter footerClass="text-end" color1="success" color2="transparent" btn2Class='list-light-success' />
            </Card>
        </Col>
    )
}
