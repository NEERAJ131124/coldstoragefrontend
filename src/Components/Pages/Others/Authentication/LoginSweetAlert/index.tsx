import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import LoginForm from '../Common/LoginForm'

export default function LoginSweetAlert() {
    return (
        <Container fluid>
            <Row>
                <Col xs={12} className="p-0">
                    <div className="login-card login-dark">
                        <LoginForm logoClass='text-center' />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
