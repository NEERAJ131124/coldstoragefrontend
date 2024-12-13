import React from 'react'
import { PaymentFormProps } from '../../../../../../Types/Forms.type'
import { Col, FormGroup, Input, Label } from 'reactstrap'
import { Image, P } from '../../../../../../AbstractElements'
import { dynamicImage } from '../../../../../../Utils'

export default function PayPalOption({ payMethod, updateFormData }: PaymentFormProps) {
    return (
        <Col xs={12}>
            <div className="card-wrapper border rounded-3">
                <div>
                    <FormGroup check className="radio radio-primary">
                        <Input id="shipping-choose5" type="radio" name="paymentMethodName" value="Paypal" defaultChecked={payMethod === "Paypal" ? true : false} onChange={updateFormData} />
                        <Label className="mb-0 f-w-500" htmlFor="shipping-choose5" check>{'Paypal'}</Label>
                    </FormGroup>
                    <P>{"You will be taken to the paypal website to finish your transaction safely"}</P>
                </div>
                <div>
                    <Image src={dynamicImage(`ecommerce/paypal.png`)} alt="paypal" />
                </div>
            </div>
        </Col>
    )
}