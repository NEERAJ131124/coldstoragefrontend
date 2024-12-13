import React from 'react'
import { useSelector } from 'react-redux';
import { ProductDataTypes } from '../../../../../Types/ECommerce.type';
import { Dollar } from '../../../../../Utils/Constants';
import { RootState } from '../../../../../ReduxToolkit/Store';

export default function InvoiceOrderTotal() {
    const { cartData } = useSelector((state: RootState) => state.product);
    const tax = 5;
    const getallCardTotal = (cartItems: ProductDataTypes[]) => {
        let total = 0;
        for (var i = 0; i < cartItems.length; i++) {
            const itemQuantity = cartItems[i].quantity;
            const itemPrice = cartItems[i].price;
            if (itemQuantity !== undefined) {
                const items = itemQuantity * itemPrice;
                total = total + items;
            }
        }
        return total;
    };
    return (
        <>
            <tr>
                <td> </td>
                <td> </td>
                <td style={{ padding: "5px 0", paddingTop: 0 }}>
                    <span>Tax({tax}%)</span>
                </td>
                <td style={{ padding: "5px 0", textAlign: "right", paddingTop: 0 }}>
                    <span>{Dollar}{getallCardTotal(cartData) * tax / 100}</span>
                </td>
            </tr>
            <tr>
                <td> </td>
                <td> </td>
                <td style={{ padding: "10px 0" }}>
                    <span style={{ fontWeight: 600 }}>{'Amount Due (USD)'}</span>
                </td>
                <td style={{ padding: "10px 0", textAlign: "right" }}>
                    <span style={{ fontWeight: 600 }}>{Dollar}{getallCardTotal(cartData) + getallCardTotal(cartData) * tax / 100}</span>
                </td>
            </tr>
        </>
    )
}