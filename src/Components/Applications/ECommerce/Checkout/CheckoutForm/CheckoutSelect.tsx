import React from 'react'
import { FormGroup, Input, Label } from 'reactstrap'
import { Country } from '../../../../../Utils/Constants'
import { countryMenu } from '../../../../../Data/Applications/ECommerce/Product'

export default function CheckoutSelect() {
    return (
        <FormGroup>
            <Label>{Country}</Label>
            <Input type="select">
                {countryMenu.map((items, i) => (
                    <option key={i}>{items}</option>
                ))}
            </Input>
        </FormGroup>
    )
}