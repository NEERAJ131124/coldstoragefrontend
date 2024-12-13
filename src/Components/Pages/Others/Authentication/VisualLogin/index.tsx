import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Image } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'
import LoginForm from '../Common/LoginForm'

export default function VisualLogin() {
    return (
        <Container fluid>
            <Row>
                <Col xl={7} className='login_one_image'>
                    <Image className="bg-img-cover bg-center" src={dynamicImage(`login/2.jpg`)} alt="looginpage" />
                </Col>
                <Col xl={5} className="p-0">
                    <div className="login-card login-dark login-bg">
                        <LoginForm />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}