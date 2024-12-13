import React from 'react'
import { Col, Row } from 'reactstrap'
import { H6 } from '../../../../../AbstractElements'

export default function ProfileMail() {
    return (
        <Col sm={6} xl={4} className="order-sm-1 order-xl-0">
            <Row className="g-3">
                <Col md={6}>
                    <div className="ttl-info text-start">
                        <H6>
                            <i className="fa-solid fa-envelope" />  {'Email'}
                        </H6>
                        <span>{'William@jourrapide.com'}</span>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="ttl-info text-start">
                        <H6>
                            <i className="fa-regular fa-calendar-days" />  {'BOD'}
                        </H6>
                        <span>{'02 January 1988'}</span>
                    </div>
                </Col>
            </Row>
        </Col>
    )
}
