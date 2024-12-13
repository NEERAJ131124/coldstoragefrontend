import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import { Image } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'
import EmailVerificationContent from './EmailVerificationContent'
import VerificationCode from './VerificationCode'

export default function EmailVerification() {
    return (
        <Col sm={12}>
            <Card>
                <CardBody className="email-verify">
                    <Row>
                        <Col md={6}>
                            <div className="card-wrapper border rounded-3 h-100">
                                <Row className="g-1">
                                    <Col xxl={4} className="box-col-5">
                                        <div className="authenticate">
                                            <Image src={dynamicImage(`forms/email.png`)} alt="image" />
                                        </div>
                                    </Col>
                                    <EmailVerificationContent />
                                </Row>
                            </div>
                        </Col>
                        <VerificationCode />
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}