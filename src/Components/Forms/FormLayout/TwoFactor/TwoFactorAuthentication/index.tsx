import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import { Btn, H2, Image, P } from '../../../../../AbstractElements';
import { dynamicImage } from '../../../../../Utils';
import { FactorAuthentication, TwoFactorAuthenticationTitle } from '../../../../../Utils/Constants';
import FirstModal from './FirstModal';

export default function TwoFactorAuthentication() {
    const [modalOne, setModalOne] = useState(false);
    const toggle = () => setModalOne(!modalOne);
    return (
        <Col sm={12}>
            <Card>
                <CardBody className="authentication-body">
                    <div className="authentication-wrapper">
                        <H2>{TwoFactorAuthenticationTitle}</H2>
                        <P>{"Click on the authentication button below and scan the QR code"}</P>
                        <Image className="img-fluid" src={dynamicImage(`forms/qr-scan.png`)} alt="qr-scan" />
                    </div>
                    <Btn color='primary' className="mt-5" onClick={toggle}>{FactorAuthentication}</Btn>
                    <FirstModal toggle={toggle} modalOne={modalOne} />
                </CardBody>
            </Card>
        </Col>
    );
};