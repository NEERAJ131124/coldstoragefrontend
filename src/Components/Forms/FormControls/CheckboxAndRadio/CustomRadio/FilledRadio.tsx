import React from 'react'
import { Col, Form, Input, Label } from 'reactstrap'
import { H6 } from '../../../../../AbstractElements'
import { FilledRadioTitle } from '../../../../../Utils/Constants'
import { filledRadioData } from '../../../../../Data/Forms/FormControls'

export default function FilledRadio() {
    return (
        <Col xl={4} sm={6}>
            <div className="card-wrapper border rounded-3 fill-radio custom-fill-radio">
                <H6 className="sub-title fw-bold">{FilledRadioTitle}</H6>
                {filledRadioData.map((data) => (
                    <Form key={data.id}>
                        <Label className="d-block" htmlFor={`radio-ani${data.id}`}>
                            <Input id={`radio-ani${data.id}`} className={`radio radio-${data.color} radio-border-${data.color}`} type="radio" name="radio-animation" value="option3" defaultChecked={data.check ? true : false} />
                            {data.text}
                        </Label>
                    </Form>
                ))}
            </div>
        </Col>
    )
}