import React from 'react'
import { Col, FormGroup, Input, Label, Row } from 'reactstrap';
import { ShippingInformationProps } from '../../../../../../Types/Forms.type';
import { homeAndOfficeAddressData } from '../../../../../../Data/Forms/FormLayout';
import { H5 } from '../../../../../../AbstractElements';

export default function HomeAndOfficeAddress({ radioBoxValues, updateFormData }: ShippingInformationProps) {
    const { address } = radioBoxValues;

    return (
        <Row className="g-3">
            {homeAndOfficeAddressData.map((data, index) => (
                <Col xxl={4} sm={6} key={index}>
                    <div className="card-wrapper border rounded-3 h-100">
                        <div className="collect-address">
                            <div className="d-flex gap-2 align-items-center">
                                <FormGroup check className="radio radio-primary">
                                    <Input id={data.value} type="radio" name="address" value={data.value} defaultChecked={address === data.value ? true : false} onChange={updateFormData} />
                                    <Label className="mb-0" htmlFor={data.value} check>
                                        {data.label}
                                    </Label>
                                </FormGroup>
                            </div>
                            <div className="card-icon">
                                <i className="fa-solid fa-pencil" />
                                <i className="fa-solid fa-trash" />
                            </div>
                        </div>
                        <div className="shipping-address">
                            <H5 className="f-w-600">{data.name}</H5>
                            <span>{'Address: '}{data.adress}</span>
                            <span>{'Contact: '}{data.contact}</span>
                        </div>
                    </div>
                </Col>
            ))}
        </Row>
    )
}