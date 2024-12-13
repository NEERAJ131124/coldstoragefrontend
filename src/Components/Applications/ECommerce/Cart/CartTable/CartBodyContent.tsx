import React from 'react'
import { Input, InputGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Btn, H6 } from '../../../../../AbstractElements';
import { Dollar } from '../../../../../Utils/Constants';
import { RootState } from '../../../../../ReduxToolkit/Store';
import { ProductDataTypes } from '../../../../../Types/ECommerce.type';

export default function CartBodyContent() {
    const { cartData } = useSelector((state: RootState) => state.product);
    const getCartTotal = (item: ProductDataTypes) => {
        if (item.quantity) {
            return item.quantity * item.price;
        }
        return 0;
    };
    return (
        <>
            <tr>
                <td colSpan={4}>
                    <InputGroup>
                        <Input className="me-2" type="text" placeholder="Enter coupon code" />
                        <Btn color="primary"> {'Apply'}</Btn>
                    </InputGroup>
                </td>
                <td className="total-amount">
                    <H6 className="m-0 text-end">
                        <span className="f-w-600">{'Total Price'} :</span>
                    </H6>
                </td>
                <td><span>{Dollar} {cartData.reduce((total, item) => total + getCartTotal(item), 0)}</span></td>
            </tr>
            <tr>
                <td className="text-end" colSpan={5}>
                    <Link to={`${process.env.PUBLIC_URL}/ecommerce/product`} className="btn btn-secondary cart-btn-transform">
                        {'Continue Shopping'}
                    </Link>
                </td>
                <td>
                    <Link className="btn btn-success cart-btn-transform" to={`${process.env.PUBLIC_URL}/ecommerce/checkout`}>
                        {'Check Out'}
                    </Link>
                </td>
            </tr>
        </>
    )
}