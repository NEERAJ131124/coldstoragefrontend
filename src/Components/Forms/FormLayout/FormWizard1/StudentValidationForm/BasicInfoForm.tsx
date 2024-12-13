import React from 'react'
import { StudentValidationFormProp } from '../../../../../Types/Forms.type'
import { Col, Input, Label, Row } from 'reactstrap'
import { ConfirmPassword, Email, Name, Password } from '../../../../../Utils/Constants'

export default function BasicInfoForm({ formData, updateFormData }: StudentValidationFormProp) {
    return (
        <Row className="g-3">
            <Col sm={12}>
                <Label>{Name}</Label>
                <Input onChange={updateFormData} value={formData.name} name="name" type="text" placeholder="Enter your name" />
            </Col>
            <Col sm={12}>
                <Label>{Email}<span className="txt-danger">*</span></Label>
                <Input name="email" onChange={updateFormData} value={formData.email} type="email" placeholder="admiro@gmail.com" />
            </Col>
            <Col xs={12}>
                <Col sm={12}><Label>{Password}<span className="txt-danger">*</span></Label></Col>
                <Input name="password" onChange={updateFormData} value={formData.password} type="password" placeholder="Enter password" autoComplete='' />
            </Col>
            <Col xs={12}>
                <Col sm={12}><Label>{ConfirmPassword}<span className="txt-danger">*</span></Label></Col>
                <Input name="confirmPassWord" onChange={updateFormData} value={formData.confirmPassWord} type="password" placeholder="Enter confirm password" autoComplete='' />
            </Col>
        </Row>
    )
}