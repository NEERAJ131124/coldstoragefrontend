import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Input, InputGroup, InputGroupText } from 'reactstrap';
import { Link } from 'react-router-dom';
import { ProductQuantityProp } from '../../../../../../Types/ECommerce.type';
import { addCartData } from '../../../../../../ReduxToolkit/Reducers/ECommerce/ProductReducer';
import { Btn, H6 } from '../../../../../../AbstractElements';

export default function ProductQuantity({ dataId, modelData }: ProductQuantityProp) {
    const [cartCount, setCartCount] = useState(1);
    const dispatch = useDispatch();
    const incrementCount = () => {
        setCartCount(cartCount + 1);
    };
    const decrementCount = () => {
        if (cartCount === 1) {
            return;
        } else {
            setCartCount(cartCount - 1);
        }
    };
    const handleAddToCart = () => {
        dispatch(addCartData({ id: dataId, item: modelData, increment: cartCount }));
    };
    return (
        <div className="product-qnty">
            <H6 className='f-w-600'>{'Quantity'}</H6>
            <fieldset>
                <InputGroup>
                    <Btn color="primary" className="btn-square bootstrap-touchspin-down" onClick={decrementCount}>
                        <i className="fa-solid fa-minus" />
                    </Btn>
                    <InputGroupText className="bootstrap-touchspin-prefix d-none"></InputGroupText>
                    <Input className="touchspin text-center" type="text" name="quantity" value={cartCount} readOnly />
                    <Btn color="primary" className="btn-square bootstrap-touchspin-up" onClick={incrementCount}>
                        <i className="fa-solid fa-plus" />
                    </Btn>
                </InputGroup>
            </fieldset>
            <div className="addcart-btn">
                <Link to={`${process.env.PUBLIC_URL}/ecommerce/cart`} className='btn btn-primary me-2' onClick={handleAddToCart}>
                    {'Add to Cart'}
                </Link>
                <Link to={`${process.env.PUBLIC_URL}/ecommerce/product_page`} className='btn btn-primary ms-2'>
                    {'View Details'}
                </Link>
            </div>
        </div>
    )
}