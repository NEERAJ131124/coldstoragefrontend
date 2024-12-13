import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../ReduxToolkit/Store';
import { Row, Table } from 'reactstrap';
import { cartTableHead } from '../../../../../Data/Applications/ECommerce/Product';
import CartTableBody from './CartTableBody';
import EmptyCart from './EmptyCart';

export default function CartTable() {
    const { cartData } = useSelector((state: RootState) => state.product);

    return (
        <Row>
            {cartData && cartData.length > 0 ? (
                <div className="order-history table-responsive wishlist">
                    <Table bordered>
                        <thead>
                            <tr>
                                {cartTableHead.map((items, i) => (
                                    <th key={i}>{items}</th>
                                ))}
                            </tr>
                        </thead>
                        <CartTableBody />
                    </Table>
                </div>
            ) :
                (<EmptyCart />)
            }
        </Row>
    )
}