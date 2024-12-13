import React from 'react'
import { Col, FormGroup, Input } from 'reactstrap'
import { H6 } from '../../../../../AbstractElements'
import { InlineSwitchesTitle } from '../../../../../Utils/Constants'

export default function InlineSwitches() {
    return (
        <Col md={12} xl={4}>
            <div className="card-wrapper border rounded-3 checkbox-checked">
                <H6 className="sub-title">{InlineSwitchesTitle}</H6>
                <div className="form-check-size">
                    <FormGroup check inline switch>
                        <Input className="check-size" id="flexSwitchCheckDefault2" type="checkbox" defaultChecked />
                    </FormGroup>
                    <FormGroup check switch inline>
                        <Input className="check-size" id="flexSwitchCheckDefault3" type="checkbox" />
                    </FormGroup>
                    <FormGroup check switch inline>
                        <Input className="check-size" id="flexSwitchCheckDisabled3" type="checkbox" disabled />
                    </FormGroup>
                </div>
            </div>
        </Col>
    )
}