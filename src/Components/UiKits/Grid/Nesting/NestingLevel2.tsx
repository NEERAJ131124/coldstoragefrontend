import React from 'react'
import { Col, Row } from 'reactstrap'

export default function NestingLevel2() {
    return (
        <Col xs={9}>
            <div className="pb-0 p-2 bg-light font-dark">
                <Row className="g-2">
                    <Col xs={5}>
                        <span className="border border-2">{'Level 2: .col-5'}</span>
                    </Col>
                    <Col xs={7}>
                        <span className="border border-2">{'Level 2: .col-7'}</span>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}
