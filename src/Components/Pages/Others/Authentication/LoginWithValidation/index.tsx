import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Image } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'
import LoginForm from '../Common/LoginForm'

export default function LoginWithValidation() {
    return (
        <Container fluid>
            <Row>
                <Col xl={7} className='login_bs_validation'>
                    <Image src={dynamicImage(`login/1.jpg`)} alt='looginpage' className='bg-img-cover bg-center' />
                </Col>
                <Col xl={5} className="p-0">
                    <div className="login-card login-dark login-bg">
                        <LoginForm logoClass='text-center' />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}