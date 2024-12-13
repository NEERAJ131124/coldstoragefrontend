import React from 'react'
import { Col, Container, Row } from 'reactstrap';
import CommonLogo from '../Common/CommonLogo';
import UnlockUserForm from './UnlockUserForm';

export default function UnlockUser() {

    return (
        <div className="page-wrapper">
            <Container fluid className="p-0">
                <div className="authentication-main mt-0">
                    <Row>
                        <Col xs={12}>
                            <div className="login-card login-dark">
                                <div>
                                    <div><CommonLogo /></div>
                                    <div className="login-main">
                                        <UnlockUserForm />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}