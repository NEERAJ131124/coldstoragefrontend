import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ProductDataTypes, ProductHoverProps } from '../../../../../Types/ECommerce.type';
import { addCartData } from '../../../../../ReduxToolkit/Reducers/ECommerce/ProductReducer';
import { Btn, LI, UL } from '../../../../../AbstractElements';

export default function ProductHover({ onClickHandle, item }: ProductHoverProps) {
    const dispatch = useDispatch();
    const addToCart = (product: ProductDataTypes) => {
        dispatch(addCartData({ id: product.id, item: product, increment: 1 }));
    };
    return (
        <div className="product-hover">
            <UL className="simple-list flex-row">
                <LI>
                    <Link to={`${process.env.PUBLIC_URL}/ecommerce/cart`} onClick={() => addToCart(item)}>
                        <i className="icon-shopping-cart" />
                    </Link>
                </LI>
                <LI>
                    <Btn color="transparent" onClick={() => onClickHandle(item)}>
                        <i className="icon-eye" />
                    </Btn>
                </LI>
            </UL>
        </div>
    )
}