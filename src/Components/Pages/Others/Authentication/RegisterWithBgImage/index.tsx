import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import RegisterForm from '../Common/RegisterForm'

export default function RegisterWithBgImage() {
    return (
        <Container fluid className="p-0">
            <Row className="m-0">
                <Col xl={5} className='login_two_image' />
                <Col xl={7} className="p-0">
                    <div className="login-card login-dark login-bg">
                        <RegisterForm logoClass='text-center' />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}