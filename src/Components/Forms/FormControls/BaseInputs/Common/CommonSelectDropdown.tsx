import React from 'react'
import { Col, FormGroup, Input, Label } from 'reactstrap'
import { CommonSelectDropdownProps } from '../../../../../Types/Forms.type'

export default function CommonSelectDropdown({options, title, multiple}:CommonSelectDropdownProps) {
    return (
        <Col>
            <FormGroup>
                <Label>{title}</Label>
                <Input type="select" multiple={multiple}>
                    {options.map((item, i) => (
                        <option key={i}>{item}</option>
                    ))}
                </Input>
            </FormGroup>
        </Col>
    )
}
