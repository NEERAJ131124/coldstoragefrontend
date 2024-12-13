import React from 'react'
import { Col, FormGroup, Input, Label } from 'reactstrap'
import { H6 } from '../../../../../AbstractElements'
import { BorderedRadioTitle } from '../../../../../Utils/Constants'
import { borderedRadioData } from '../../../../../Data/Forms/FormControls'

export default function BorderedRadio() {
    return (
        <Col xl={4} sm={6}>
            <div className="card-wrapper border rounded-3 h-100 custom-radio">
                <H6 className="sub-title">{BorderedRadioTitle}</H6>
                {borderedRadioData.map((data) => (
                    <FormGroup key={data.id} className={`radio radio-${data.color}`} check>
                        <Input id={`radio${data.id}`} type="radio" name="radio1" value="option1" defaultChecked={data.check ? true : false} />
                        <Label htmlFor={`radio${data.id}`} check>{data.text}</Label>
                    </FormGroup>
                ))}
            </div>
        </Col>
    )
}