import React from 'react'
import { Col, Row } from 'reactstrap'
import { H5, LI, UL } from '../../../../../AbstractElements'
import { productIconList } from '../../../../../Data/Applications/ECommerce/Product'
import { Link } from 'react-router-dom'

export default function SocialIcons() {
    return (
        <Row>
            <Col md={4}>
                <H5 className="f-w-700 product-title">{'Share it'}</H5>
            </Col>
            <Col md={8}>
                <div className="product-icon">
                    <UL className="simple-list flex-row product-social">
                        {productIconList.map((item) => (
                            <LI className="d-inline-block" key={item.id}>
                                <Link to={item.link} target='_blank'>
                                    <i className={item.icon} />
                                </Link>
                            </LI>
                        ))}
                    </UL>
                </div>
            </Col>
        </Row>
    )
}