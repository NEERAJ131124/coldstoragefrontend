import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ProductDataTypes } from '../../../../../Types/ECommerce.type';
import { addCartData } from '../../../../../ReduxToolkit/Reducers/ECommerce/ProductReducer';
import { Btn } from '../../../../../AbstractElements';

export default function ButtonLinks({ product }: { product: ProductDataTypes }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const addToCart = () => {
        dispatch(addCartData({ id: product.id, item: product, increment: 1 }));
    };
    return (
        <div className="m-t-15 btn-showcase">
            <Link to={`${process.env.PUBLIC_URL}/ecommerce/cart`} onClick={addToCart}>
                <Btn color="primary">
                    <i className="fa-solid fa-basket-shopping me-1" /> {'Add To Cart'}
                </Btn>
            </Link>
            <Link to={`${process.env.PUBLIC_URL}/ecommerce/checkout`}>
                <Btn color="success">
                    <i className="fa-solid fa-cart-shopping me-1" /> {'Buy Now'}
                </Btn>
            </Link>
            <Btn color="secondary" onClick={() => navigate(`/ecommerce/wishlist`)}>
                <i className="fa-solid fa-heart me-1" /> {'Add To WishList'}
            </Btn>
        </div>
    )
}