import React from 'react'
import { RegisterWizardForm } from '../../../../../Types/Others.type'
import { Col, FormGroup, FormText, Input, Label } from 'reactstrap'
import { ConfirmPassword, EmailAddress, Password } from '../../../../../Utils/Constants'

export default function AddressForm({ formValue, updateUserData }: RegisterWizardForm) {
    return (
        <div id="addrescont" className='d-block'>
            <FormGroup>
                <Col><Label>{EmailAddress}</Label></Col>
                <Input name="email" onChange={updateUserData} value={formValue.email} type="email" placeholder="name@example.com" />
                <FormText className="text-muted" id="emailHelp">{"We'll never share your email with anyone else."}</FormText>
            </FormGroup>
            <FormGroup>
                <Col><Label>{Password}</Label></Col>
                <Input name="password" onChange={updateUserData} value={formValue.password} type="password" placeholder="Password" autoComplete='' />
            </FormGroup>
            <FormGroup>
                <Col><Label>{ConfirmPassword}</Label></Col>
                <Input name="confirmPassword" onChange={updateUserData} value={formValue.confirmPassword} type="password" placeholder="Enter confirm password" autoComplete='' />
            </FormGroup>
        </div>
    )
}
