import React from 'react'
import { Col, Row } from 'reactstrap'
import { H6 } from '../../../../../AbstractElements'

export default function ProfileContact() {
    return (
        <Col sm={6} xl={4} className="order-sm-2 order-xl-2">
            <Row className="g-3">
                <Col md={6} className="mt-0 mt-sm-3">
                    <div className="ttl-info text-start">
                        <H6>
                            <i className="fa-solid fa-phone" /> {'Contact Us'}
                        </H6>
                        <span>{'US 310-273-0666'}</span>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="ttl-info text-start">
                        <H6>
                            <i className="fa-solid fa-location-arrow" /> {'Location'}
                        </H6>
                        <span>{'4377 Libby Street Beverly Hills'}</span>
                    </div>
                </Col>
            </Row>
        </Col>
    )
}
