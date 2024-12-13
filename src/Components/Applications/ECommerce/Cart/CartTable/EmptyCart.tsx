import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { H3, H4 } from '../../../../../AbstractElements'

export default function EmptyCart() {
    return (
        <section className="cart-section section-b-space">
            <Container fluid>
                <Row>
                    <Col sm={12}>
                        <div>
                            <Col sm={12} className="empty-cart-cls text-center">
                                <H3>
                                    <strong>{'Your Cart is Empty'}</strong>
                                </H3>
                                <H4>{'Explore more and shortlist some items.'}</H4>
                            </Col>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}