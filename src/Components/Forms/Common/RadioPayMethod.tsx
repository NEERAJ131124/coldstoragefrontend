import React from 'react'
import { FormGroup, Input, Label } from 'reactstrap'
import { H6 } from '../../../AbstractElements'
import { PayMethodTitle } from '../../../Utils/Constants'
import { RadioPayMethodProps } from '../../../Types/Forms.type'

export default function RadioPayMethod({ colClass }:RadioPayMethodProps) {
    return (
        <div className={colClass}>
            <div className="card-wrapper border rounded-3 checkbox-checked">
                <H6 className="sub-title">{PayMethodTitle}</H6>
                <div className="radio-form">
                    <FormGroup check>
                        <Input type="radio" name="flexRadioDefault" id="flexRadioDefault1" required />
                        <Label htmlFor="flexRadioDefault1" check>{'Visa'}</Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input type="radio" name="flexRadioDefault" id="flexRadioDefault2" required />
                        <Label htmlFor="flexRadioDefault2" check>{'MasterCard'}</Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input type="radio" name="flexRadioDefault" id="flexRadioDefault3" defaultChecked required />
                        <Label htmlFor="flexRadioDefault3" check>{'Paypal'}</Label>
                    </FormGroup>
                </div>
            </div>
        </div>
    )
}
