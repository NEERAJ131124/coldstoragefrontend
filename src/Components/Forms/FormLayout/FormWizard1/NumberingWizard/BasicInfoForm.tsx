import React from 'react'
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { BasicInfoFormProps } from '../../../../../Types/Forms.type'
import { AgreeTerms, ConfirmPassword, EmailAddress, FirstName, Password } from '../../../../../Utils/Constants'

export default function BasicInfoForm({ formData, updateFormData }: BasicInfoFormProps) {
    return (
        <Form className="stepper-one needs-validation custom-input" noValidate>
            <Row className="g-3">
                <Col sm={6}>
                    <Label>{EmailAddress}<span className="text-danger">{'*'}</span></Label>
                    <Input onChange={updateFormData} value={formData.email} name="email" type="email" placeholder="admiro@gmail.com" />
                </Col>
                <Col sm={6}>
                    <Label>{FirstName}<span className="text-danger">{'*'}</span></Label>
                    <Input onChange={updateFormData} value={formData.firstName} name="firstName" type="text" placeholder="Enter your name" />
                </Col>
                <Col xs={12}>
                    <Col sm={12}><Label>{Password}<span className="text-danger">{'*'}</span></Label></Col>
                    <Input onChange={updateFormData} value={formData.password} name="password" type="password" placeholder="Enter password" autoComplete='' />
                </Col>
                <Col xs={12}>
                    <Col sm={12}><Label>{ConfirmPassword}<span className="text-danger">{'*'}</span></Label></Col>
                    <Input onChange={updateFormData} value={formData.confirmPassword} name="confirmPassword" type="password" placeholder="Enter confirm password" autoComplete='' />
                </Col>
                <Col xs={12}>
                    <FormGroup check>
                        <Input id="inputCheckWizard" name="agreeTerms" onChange={updateFormData} type="checkbox" required />
                        <Label className="mb-0" htmlFor="inputcheckwizard" check>{AgreeTerms}</Label>
                    </FormGroup>
                </Col>
            </Row>
        </Form>
    )
}
