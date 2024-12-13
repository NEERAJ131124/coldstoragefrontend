import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { BecomeMemberTitle, Dollar, SignUp } from '../../../../../Utils/Constants'
import { Btn, H3, LI, UL } from '../../../../../AbstractElements'
import { becomeMemberData, pricingContentList } from '../../../../../Data/Applications/ECommerce/Product'

export default function BecomeMember() {
    return (
        <Card>
            <CommonCardHeader title={BecomeMemberTitle} />
            <CardBody className="pricing-block">
                <Row>
                    {becomeMemberData.map((data) => (
                        <Col lg={3} md={6} key={data.id}>
                            <div className="pricingtable">
                                <div className="pricingtable-header">
                                    <H3 className="title">{data.title}</H3>
                                </div>
                                <div className="price-value">
                                    <span className="currency">{Dollar}</span>
                                    <span className="amount">{data.amount}</span>
                                    <span className="duration">{"/mo"}</span>
                                </div>
                                <UL className="pricing-content simple-list">
                                    <LI>{data.content}</LI>
                                    {pricingContentList.map((item, index) => (
                                        <LI key={index}>{item}</LI>
                                    ))}
                                </UL>
                                <div className="pricingtable-signup">
                                    <Link to={`${process.env.PUBLIC_URL}/authentication/register_simple`}>
                                        <Btn color="primary" size="lg">
                                            {SignUp}
                                        </Btn>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </CardBody>
        </Card>
    )
}