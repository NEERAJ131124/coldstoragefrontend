import React from 'react'
import { Container, Row } from 'reactstrap'
import TooltipFormValidation from './TooltipFormValidation'
import BrowserDefaults from './BrowserDefaults'
import ValidationForm from './ValidationForm'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { FormControlsTitle, FormValidationTitle } from '../../../../Utils/Constants'

export default function FormValidationContainer() {
  return (
    <>
      <Breadcrumbs pageTitle={FormValidationTitle} parent={FormControlsTitle} title={FormValidationTitle} />
      <Container fluid>
        <Row>
          <TooltipFormValidation />
          <BrowserDefaults />
          <ValidationForm />
        </Row>
      </Container>
    </>
  )
}