import React from 'react'
import { ShippingInformationProps } from '../../../../../../Types/Forms.type';
import { Col, FormGroup, Input, Label, Row } from 'reactstrap';
import { shippingMethodsData } from '../../../../../../Data/Forms/FormLayout';
import { Btn, P } from '../../../../../../AbstractElements';
import { ProceedToBack, ProceedToNext } from '../../../../../../Utils/Constants';

export default function ShippingMethods({ radioBoxValues, updateFormData, handleNextButton, handleBackButton }: ShippingInformationProps) {
    const { shippingMethod } = radioBoxValues;
    return (
        <Row className="shipping-method g-3">
            {shippingMethodsData.map((data, index) => (
                <Col sm={6} key={index}>
                    <div className="card-wrapper border rounded-3 h-100">
                        <FormGroup check className="radio radio-primary">
                            <Input id={data.value} type="radio" name="shippingMethod" value={data.value} defaultChecked={shippingMethod === data.value ? true : false} onChange={updateFormData} />
                            <Label className="mb-0" htmlFor={data.value} check>{data.label}</Label>
                        </FormGroup>
                        <P>{data.details}</P>
                    </div>
                </Col>
            ))}
            <Col xs={12} className="text-end">
                <Btn onClick={handleBackButton} color="primary" className='me-1'>
                    <i className="fa-solid fa-truck proceed-prev pe-2" />{ProceedToBack}
                </Btn>
                <Btn onClick={handleNextButton} color="primary">{ProceedToNext}
                    <i className="fa-solid fa-truck proceed-next pe-2" />
                </Btn>
            </Col>
        </Row>
    )
}

