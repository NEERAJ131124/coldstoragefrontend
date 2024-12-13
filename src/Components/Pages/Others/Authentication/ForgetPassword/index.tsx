import React from 'react'
import { Col, Container, Row } from 'reactstrap';
import CommonLogo from '../Common/CommonLogo';
import ForgetPasswordForm from './ForgetPasswordForm';

export default function ForgetPassword() {

    return (
        <div className="page-wrapper">
            <Container fluid className="p-0">
                <Row>
                    <Col xs={12}>
                        <div className="login-card login-dark">
                            <div>
                                <div><CommonLogo /></div>
                                <div className="login-main">
                                    <ForgetPasswordForm />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}