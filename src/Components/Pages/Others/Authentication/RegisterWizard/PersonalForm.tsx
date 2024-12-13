import React from 'react'
import { Col, FormGroup, Input, Label } from 'reactstrap'
import { FirstName, LastName, Phone } from '../../../../../Utils/Constants'
import { RegisterWizardForm } from '../../../../../Types/Others.type'

export default function PersonalForm({ formValue, updateUserData }: RegisterWizardForm) {
    return (
        <div id="aboutcont" className='d-block'>
            <FormGroup>
                <Col><Label htmlFor="firstname">{FirstName}</Label></Col>
                <Input value={formValue.firstName} name="firstName" onChange={updateUserData} id="firstname" type="text" placeholder="Johan" />
            </FormGroup>
            <FormGroup>
                <Col><Label htmlFor="lastname">{LastName}</Label></Col>
                <Input value={formValue.lastName} name="lastName" onChange={updateUserData} id="lastname" type="text" placeholder="Deo" />
            </FormGroup>
            <FormGroup>
                <Col><Label htmlFor="phone">{Phone}</Label></Col>
                <Input value={formValue.contactNumber} name="contactNumber" onChange={updateUserData} id="phone" type="number" placeholder="123456745" />
            </FormGroup>
        </div>
    )
}