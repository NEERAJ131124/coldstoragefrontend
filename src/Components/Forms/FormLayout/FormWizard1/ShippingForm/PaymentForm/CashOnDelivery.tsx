import React from 'react'
import { PaymentFormProps } from '../../../../../../Types/Forms.type'
import { Col, FormGroup, Input, Label } from 'reactstrap'
import { Image } from '../../../../../../AbstractElements'
import { dynamicImage } from '../../../../../../Utils'

export default function CashOnDelivery({ payMethod, updateFormData }: PaymentFormProps) {
    return (
        <Col xs={12}>
            <div className="card-wrapper border rounded-3">
                <div>
                    <FormGroup check className="radio radio-primary">
                        <Input id="shipping-choose7" type="radio" name="paymentMethodName" value="cashOnDelivery" checked={payMethod === "cashOnDelivery" ? true : false} onChange={updateFormData} />
                        <Label className="mb-0 f-w-500" htmlFor="shipping-choose7" check>{'Cash On Delivery'}</Label>
                    </FormGroup>
                    <p>{"After your order is delivered, make a cash payment"}</p>
                </div>
                <div>
                    <Image src={dynamicImage(`forms/delivery.png`)} alt="delivery" />
                </div>
            </div>
        </Col>
    )
}
