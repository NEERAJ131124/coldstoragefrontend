import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import RegisterForm from '../Common/RegisterForm'

export default function RegisterSimple() {
    return (
        <Container fluid className="p-0">
            <Row className="m-0">
                <Col xs={12} className="p-0">
                    <div className="login-card login-dark">
                        <RegisterForm logoClass='text-center' />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}