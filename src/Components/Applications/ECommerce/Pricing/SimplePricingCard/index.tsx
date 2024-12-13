import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { Dollar, Purchase, SimplePricingTitle } from '../../../../../Utils/Constants'
import { Btn, H2, H3, H6 } from '../../../../../AbstractElements'
import { simplePricingData } from '../../../../../Data/Applications/ECommerce/Product'

export default function SimplePricingCard() {
    return (
        <Card>
            <CommonCardHeader title={SimplePricingTitle} />
            <CardBody className="pricing-content">
                <Row className="g-sm-4 g-3">
                    {simplePricingData.map((data) => (
                        <Col xl={3} sm={6} className="xl-50 box-col-6" key={data.id}>
                            <Card className="text-center pricing-simple">
                                <CardBody>
                                    <H3>{data.title}</H3>
                                    <H2>{Dollar}{data.amount}</H2>
                                    <H6 className="mb-0">{data.text}</H6>
                                </CardBody>
                                <Btn size="lg" color="primary" block>
                                    {Purchase}
                                </Btn>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </CardBody>
        </Card>
    )
}