import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import SignInForm from './SignInForm'

export default function SignIn() {
    return (
        <Container className="p-0" fluid>
            <Row className="m-0">
                <Col xs={12} className="p-0">
                    <div className="login-card login-dark">
                        <SignInForm />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}