import React from 'react'
import { Input } from 'reactstrap'
import { CustomFormSelectProps } from '../../../../../Types/Forms.type'

export default function CustomFormSelect({ inputId, options, title }: CustomFormSelectProps) {
    return (
        <Input type="select" id={inputId}>
            <option>{title}</option>
            {options.map((item, i) => (
                <option key={i} value={i}>{item}</option>
            ))}
        </Input>
    )
}
