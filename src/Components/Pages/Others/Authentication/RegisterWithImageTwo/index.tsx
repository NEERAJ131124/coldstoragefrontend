import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Image } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'
import RegisterForm from '../Common/RegisterForm'

export default function RegisterWithImageTwo() {
    return (
        <Container fluid className="p-0">
            <Row className="m-0">
                <Col xl={7} className="login_bs_validation p-0">
                    <Image src={dynamicImage(`login/1.jpg`)} alt='looginpage' className='bg-img-cover bg-center' />
                </Col>
                <Col xl={5} className="p-0">
                    <div className="login-card login-dark login-bg">
                        <RegisterForm logoClass='text-center' />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}