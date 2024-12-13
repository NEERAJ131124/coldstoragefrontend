import React from 'react'
import { useSelector } from 'react-redux';
import { Col, Input, Label } from 'reactstrap';
import { RootState } from '../../../../../ReduxToolkit/Store';
import { ProductDataTypes } from '../../../../../Types/ECommerce.type';
import { H3, LI, UL } from '../../../../../AbstractElements';
import { Dollar } from '../../../../../Utils/Constants';
import PaymentRadioOptions from './PaymentRadioOptions';

export default function CheckoutDetails() {
    const { cartData } = useSelector((state: RootState) => state.product);
    const getCartTotal = (item: ProductDataTypes) => {
        if (item.quantity) {
            return item.quantity * item.price;
        }
        return 0;
    };
    return (
        <Col xl={6} sm={12}>
            <div className="checkout-details">
                <div className="order-box">
                    <div className="title-box">
                        <div className="checkbox-title">
                            <H3>{'Product '}</H3>
                            <span>{'Total'}</span>
                        </div>
                    </div>
                    {cartData &&
                        cartData.map((item) => (
                            <UL className="qty simple-list" key={item.id}>
                                <LI>{item.name} x {item.quantity}<span>{Dollar}{item.price}</span></LI>
                            </UL>
                        ))}
                    <UL className="sub-total simple-list">
                        <LI>{'Subtotal '}<span className="count">{Dollar}{cartData.reduce((total, item) => total + getCartTotal(item), 0)}</span></LI>
                        <LI className="shipping-class">{'Shipping'}
                            <div className="shopping-checkout-option">
                                <Label className="d-block" htmlFor="chk-ani">
                                    <Input className="checkbox_animated" id="chk-ani" type="checkbox" defaultChecked />{'Option 1'}
                                </Label>
                                <Label className="d-block" htmlFor="chk-ani1">
                                    <Input className="checkbox_animated" id="chk-ani1" type="checkbox" />{'Option 2'}
                                </Label>
                            </div>
                        </LI>
                    </UL>
                    <UL className="sub-total total simple-list">
                        <LI>{'Total '}<span className="count">{Dollar}{cartData.reduce((total, item) => total + getCartTotal(item), 0)}</span></LI>
                    </UL>
                    <PaymentRadioOptions />
                </div>
            </div>
        </Col>
    )
}