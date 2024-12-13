import React from 'react'
import { Container, Row } from 'reactstrap'
import TwoFactorAuthentication from './TwoFactorAuthentication'
import EmailVerification from './EmailVerification'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { FormLayoutTitle, FormWizardTitle } from '../../../../Utils/Constants'

export default function TwoFactorContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={`${FormWizardTitle}3`} parent={FormLayoutTitle} title={`${FormWizardTitle}3`} />
            <Container fluid>
                <Row>
                    <TwoFactorAuthentication />
                    <EmailVerification />
                </Row>
            </Container>
        </>
    )
}