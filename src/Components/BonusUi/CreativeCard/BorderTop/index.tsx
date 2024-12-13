import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { BorderTopTitle } from '../../../../Utils/Constants'
import { borderTopSubTitle } from '../../../../Data/BonusUi/CreativeCard'
import { P } from '../../../../AbstractElements'

export default function BorderTop() {
    return (
        <Col md={6} xs={12}>
            <Card>
                <CommonCardHeader title={BorderTopTitle} subTitle={borderTopSubTitle} headClass='border-t-danger' />
                <CardBody>
                    <P className="mb-0">
                        {'Tabs have long been used to show alternative views of the same group of information tabs in software. Known as'}
                        <em className="text-danger">{' “module tabs” '}</em>
                        {', these are still used today in web sites. For instance, airline companies such as Ryanair, easyJet and AirMalta use module tabs to enable the user to switch between bookings for flights, hotels and car hire.'}
                    </P>
                </CardBody>
            </Card>
        </Col>
    )
}
