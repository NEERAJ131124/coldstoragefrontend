import React from 'react'
import { useSelector } from 'react-redux';
import { Table } from 'reactstrap';
import { RootState } from '../../../../../ReduxToolkit/Store';
import { ProductDataTypes } from '../../../../../Types/ECommerce.type';
import { Dollar } from '../../../../../Utils/Constants';
import { H2, H6 } from '../../../../../AbstractElements';

export default function InvoiceContent() {
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
        <td>
            <Table className="bill-content w-100" borderless>
                <tbody>
                    <tr>
                        <td style={{ width: "36%" }}>
                            <span style={{ opacity: "0.8" }}>{'Billed To'}</span>
                            <H6 style={{ width: "46%" }}>{'Admiro Matchett Vandelay Group LTD'}</H6>
                        </td>
                        <td style={{ width: "21%" }}>
                            <span style={{ opacity: "0.8" }}>{'Invoice Date'}</span>
                            <H6>09/03/2024</H6>
                        </td>
                        <td>
                            <span style={{ opacity: "0.8" }}>{'Invoice Number'}</span>
                            <H6>#VL25000365</H6>
                        </td>
                        <td style={{ textAlign: "right" }}>
                            <span style={{ opacity: "0.8" }}>{'Amount Dus (USD)'}</span>
                            <H2>{Dollar} {getallCardTotal(cartData) + getallCardTotal(cartData) * tax / 100}</H2>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ width: "36%" }}>
                            <H6 style={{ width: "63%", paddingTop: 20 }}>{'2118 Thornridge Cir. Syracuse, Connecticut 35624, United State'}</H6>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </td>
    )
}