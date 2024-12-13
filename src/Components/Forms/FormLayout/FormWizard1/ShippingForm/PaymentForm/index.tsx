import React, { ChangeEvent, useState } from 'react'
import { toast } from 'react-toastify';
import { ActiveCallbackProp } from '../../../../../../Types/Forms.type';
import { Btn, H5, P } from '../../../../../../AbstractElements';
import { PaymentInformation, ProceedToBack, ProceedToNext } from '../../../../../../Utils/Constants';
import { Col, Row } from 'reactstrap';
import PayPalOption from './PayPalOption';
import CreditCardOption from './CreditCardOption';
import CashOnDelivery from './CashOnDelivery';

export default function PaymentForm({ activeCallBack }: ActiveCallbackProp) {
    const [payMethod, setPayMethod] = useState("");
    const updateFormData = (event: ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;
        setPayMethod(value);
    };
    const handleBackButton = () => {
        activeCallBack(2);
    };
    const handleNextButton = () => {
        if (payMethod !== "") {
            activeCallBack(4);
        } else {
            return toast.error("please fill out all the fields before moving on to the next step");
        }
    };
    return (
        <>
            <H5 className="f-w-600">{PaymentInformation}</H5>
            <P>{"Fill up the following information to send you the order"}</P>
            <div className="payment-info-wrapper">
                <Row className="shipping-method g-3">
                    <PayPalOption payMethod={payMethod} updateFormData={updateFormData} />
                    <CreditCardOption payMethod={payMethod} updateFormData={updateFormData} />
                    <CashOnDelivery payMethod={payMethod} updateFormData={updateFormData} />
                    <Col xs={12} className="text-end">
                        <Btn onClick={handleBackButton} color="primary" className='me-1'>
                            <i className="fa-solid fa-truck proceed-prev pe-2" />{ProceedToBack}
                        </Btn>
                        <Btn color="primary" onClick={handleNextButton}>
                            {ProceedToNext}
                            <i className="fa-solid fa-truck proceed-next pe-2" />
                        </Btn>
                    </Col>
                </Row>
            </div>
        </>
    );
};