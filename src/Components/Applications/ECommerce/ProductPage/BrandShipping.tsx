import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { H4, H5, LI, P, UL } from '../../../../AbstractElements'
import { brandData, shippingData } from '../../../../Data/Applications/ECommerce/Product'

export default function BrandShipping() {
    return (
        <Col xxl={3} md={6} className="box-col-12">
            <Card>
                <CardBody>
                    <div className="filter-block">
                        <H4>{'Brand'}</H4>
                        <UL className='simple-list'>
                            {brandData.map((item, index) => (
                                <LI key={index}>{item}</LI>
                            ))}
                        </UL>
                    </div>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <div className="collection-filter-block">
                        <UL className="pro-services simple-list">
                            {shippingData.map((data) => (
                                <LI key={data.id}>
                                    <div className="d-flex">
                                        {data.icon}
                                        <div className="flex-grow-1">
                                            <H5>{data.title}</H5>
                                            <P>{data.subTitle}</P>
                                        </div>
                                    </div>
                                </LI>
                            ))}
                        </UL>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}