import React from 'react'
import { Col, FormGroup, Input, Label } from 'reactstrap'
import { H6, LI, UL } from '../../../../../AbstractElements'
import { IconCheckboxTitle } from '../../../../../Utils/Constants'
import { iconCheckboxData } from '../../../../../Data/Forms/FormControls'

export default function IconCheckbox() {
    return (
        <Col xl={4} sm={12} className="order-xl-0 order-sm-1">
            <div className="card-wrapper border rounded-3 h-100">
                <H6 className="sub-title">{IconCheckboxTitle}</H6>
                <FormGroup className="checkbox checkbox-primary ps-0 main-icon-checkbox" check>
                    <UL className='simple-list flex-row checkbox-wrapper'>
                        {iconCheckboxData.map((data) => (
                            <LI key={data.id}>
                                <Input className="checkbox-shadow" id={data.id} type="checkbox" defaultChecked={data.check ? true : false} />
                                <Label htmlFor={data.id} check><i className={data.icon} /><span>{data.text}</span></Label>
                            </LI>
                        ))}
                    </UL>
                </FormGroup>
            </div>
        </Col>
    )
}