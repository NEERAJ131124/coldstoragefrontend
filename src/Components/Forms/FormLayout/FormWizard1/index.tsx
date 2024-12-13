import React from 'react'
import { Container, Row } from 'reactstrap'
import NumberingWizard from './NumberingWizard'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { FormLayoutTitle, FormWizardTitle } from '../../../../Utils/Constants'
import StudentValidationForm from './StudentValidationForm'
import VerticalValidationWizard from './VerticalValidationWizard'
import ShippingForm from './ShippingForm'

export default function FormWizard1Container() {
    return (
        <>
            <Breadcrumbs pageTitle={`${FormWizardTitle}1`} parent={FormLayoutTitle} title={`${FormWizardTitle}1`} />
            <Container fluid>
                <Row>
                    <NumberingWizard />
                    <StudentValidationForm />
                    <VerticalValidationWizard />
                    <ShippingForm />
                </Row>
            </Container>
        </>
    )
}