import React from 'react'
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { VerticalWizardFormProps } from '../../../../../Types/Forms.type'
import { AgreeTerms, ContactNumber, Email, FirstName, LastName, State, ZipCode } from '../../../../../Utils/Constants'

export default function YourInfoForm({ formData, updateFormData }: VerticalWizardFormProps) {
    return (
        <Form className="needs-validation custom-input" noValidate>
            <Row className='g-3'>
                <Col md={4} sm={6}>
                    <Label>{FirstName}<span className="text-danger">*</span></Label>
                    <Input type="text" placeholder="Enter first name" name="firstName" value={formData.firstName} onChange={updateFormData} />
                </Col>
                <Col md={4} sm={6}>
                    <Label>{LastName}<span className="text-danger">*</span></Label>
                    <Input type="text" placeholder="Enter last name" name="lastName" value={formData.lastName} onChange={updateFormData} />
                </Col>
                <Col md={4} sm={6}>
                    <Label>{Email}<span className="text-danger">*</span></Label>
                    <Input name="email" type="email" placeholder="admiro@example.com" value={formData.email} onChange={updateFormData} />
                </Col>
                <Col md={5} sm={6}>
                    <Label>{State}</Label>
                    <Input type="select" name="state" value={formData.state} onChange={updateFormData}>
                        <option value={""}>{'Choose...'}</option>
                        <option value={"USA"}>{'USA '}</option>
                        <option value={"U.K "}>{'U.K '}</option>
                        <option value={"U.S"}>{'U.S'}</option>
                    </Input>
                </Col>
                <Col md={3} sm={6}>
                    <Label>{ZipCode}</Label>
                    <Input name="zip" type="text" value={formData.zip} onChange={updateFormData} />
                </Col>
                <Col md={4} sm={6}>
                    <Label>{ContactNumber}</Label>
                    <Input type="number" placeholder="Enter number" name="contact" value={formData.contact} onChange={updateFormData} />
                </Col>
                <Col xs={12}>
                    <FormGroup check>
                        <Input id="invalidCheck-n" type="checkbox" required />
                        <Label htmlFor="invalidCheck-n" check>{AgreeTerms}</Label>
                    </FormGroup>
                </Col>
            </Row>
        </Form>
    )
}