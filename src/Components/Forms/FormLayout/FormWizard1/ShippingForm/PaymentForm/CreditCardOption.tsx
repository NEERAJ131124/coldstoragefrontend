import React from 'react'
import { PaymentFormProps } from '../../../../../../Types/Forms.type';
import { Col, FormGroup, Input, Label } from 'reactstrap';
import { Image } from '../../../../../../AbstractElements';
import { dynamicImage } from '../../../../../../Utils';
import CreditCardForm from './CreditCardForm';

export default function CreditCardOption({ payMethod, updateFormData }: PaymentFormProps) {
    return (
        <Col xs={12}>
            <div className="card-wrapper border rounded-3 pay-info">
                <div>
                    <div>
                        <FormGroup check className="radio radio-primary">
                            <Input id="shipping-choose6" type="radio" name="paymentMethodName" value="creditCard" defaultChecked={payMethod === "creditCard" ? true : false} onChange={updateFormData} />
                            <Label className="mb-0 f-w-600" htmlFor="shipping-choose6" check>{'Credit Card'}</Label>
                        </FormGroup>
                        <p>{"Transferring money securely through your bank account. Mastercard, Visa, Discover, and Stripe are all accepted"}</p>
                    </div>
                    <div>
                        <Image src={dynamicImage(`forms/credit-card.png`)} alt="card" />
                    </div>
                </div>
                <CreditCardForm />
            </div>
        </Col>
    );
}
