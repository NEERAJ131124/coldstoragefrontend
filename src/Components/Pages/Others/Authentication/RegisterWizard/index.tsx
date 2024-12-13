import React, { useState } from 'react'
import { Col, Container, Row } from 'reactstrap';
import RegisterWizardList from './RegisterWizardList';
import { H2, H5, ProgressBar } from '../../../../../AbstractElements';
import RegisterWizardForm from './RegisterWizardForm';
import { SignUpAccount } from '../../../../../Utils/Constants';

export default function RegisterWizard() {
    const [level, setLevel] = useState(1);
    const calculateProgressBarValue = () => level === 1 ? 15 : (level - 1) * 35;

    return (
        <Container className='wizard-4' fluid>
            <Row>
                <Col lg={3} md={4} className="position-relative bg-color">
                    <RegisterWizardList level={level} />
                </Col>
                <Col lg={9} md={8} className="p-0">
                    <div className="step-container login-card">
                        <div>
                            <div className="wizard-title text-center">
                                <H2>{SignUpAccount}</H2>
                                <H5 className="text-muted mb-4">{'Enter your email & password to login'}</H5>
                            </div>
                            <div className="login-main">
                                <ProgressBar value={calculateProgressBarValue()} />
                                <RegisterWizardForm setLevel={setLevel} level={level} />
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};