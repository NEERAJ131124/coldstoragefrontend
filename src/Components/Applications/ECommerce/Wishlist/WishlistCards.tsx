import React, { useEffect } from 'react'
import { Col, Row } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch, RootState } from '../../../../ReduxToolkit/Store';
import { ProductDataTypes } from '../../../../Types/ECommerce.type';
import { addCartData, fetchProductData } from '../../../../ReduxToolkit/Reducers/ECommerce/ProductReducer';
import { Btn, H6, Image } from '../../../../AbstractElements';
import { dynamicImage } from '../../../../Utils';
import { Dollar, Href } from '../../../../Utils/Constants';

export default function WishlistCards() {
    const navigate = useNavigate();
    const productItem = useSelector((state: RootState) => state.product.productItem);
    const dispatch = useDispatch<AppDispatch>();
    const moveToCart = (product: ProductDataTypes) => {
        dispatch(addCartData({ id: product.id, item: product, increment: 1 }));
        navigate(`${process.env.PUBLIC_URL}/ecommerce/cart`);
    };
    useEffect(() => {
        dispatch(fetchProductData());
    }, [dispatch]);

    return (
        <Row className='g-sm-4 g-3'>
            {productItem.map((item) => (
                <Col xl={4} md={6} key={item.id}>
                    <div className="prooduct-details-box">
                        <div className="d-flex">
                            <Image className="align-self-center img-fluid img-60" src={dynamicImage(item.image)} alt="#" />
                            <div className="flex-grow-1 ms-3">
                                <div className="product-name">
                                    <H6><a href={Href}>{item.name}</a></H6>
                                </div>
                                <div className="rating">
                                    <i className="fa-solid fa-star" />
                                    <i className="fa-solid fa-star" />
                                    <i className="fa-solid fa-star" />
                                    <i className="fa-solid fa-star" />
                                    <i className="fa-solid fa-star" />
                                </div>
                                <div className="price d-flex p-0 border-0">
                                    <div className="text-muted me-2">{'Price'}</div>
                                    : {item.price}{Dollar}
                                </div>
                                <div className="avaiabilty">
                                    <div className="text-success">{item.stock}</div>
                                </div>
                                <Btn color="primary" size="xs" onClick={() => moveToCart(item)}>
                                    {'Move to Cart'}
                                </Btn>
                            </div>
                        </div>
                    </div>
                </Col>
            ))}
        </Row>
    )
}