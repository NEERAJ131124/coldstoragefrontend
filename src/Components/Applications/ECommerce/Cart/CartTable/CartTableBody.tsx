import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Input, InputGroup } from 'reactstrap';
import { XCircle } from 'react-feather';
import { RootState } from '../../../../../ReduxToolkit/Store';
import { Btn, Image } from '../../../../../AbstractElements';
import { dynamicImage } from '../../../../../Utils';
import { Dollar, Href } from '../../../../../Utils/Constants';
import { decrementCart, incrementCart, removeFromCart } from '../../../../../ReduxToolkit/Reducers/ECommerce/ProductReducer';
import CartBodyContent from './CartBodyContent';

export default function CartTableBody() {
    const dispatch = useDispatch();
    const { cartData } = useSelector((state: RootState) => state.product);

    return (
        <tbody>
            {cartData.map((item, i) => {
                return (
                    item.quantity && (
                        <tr key={i}>
                            <td>
                                <Image className="img-fluid img-40" src={dynamicImage(item.image)} alt="#" />
                            </td>
                            <td>
                                <div className="product-name">
                                    <a href={Href}>{item.name}</a>
                                </div>
                            </td>
                            <td>{Dollar}{item.price}</td>
                            <td>
                                <fieldset className="qty-box">
                                    <InputGroup>
                                        <span className="input-group-prepend p-0">
                                            <Btn color="primary" className="btn-square bootstrap-touchspin-down" onClick={() => dispatch(decrementCart(i))}>
                                                <i className="fa-solid fa-minus" />
                                            </Btn>
                                        </span>
                                        <Input type="number" value={item.quantity} readOnly={true} className="input-touchspin text-center" />
                                        <span className="input-group-append p-0">
                                            <Btn color="primary" className="btn-square bootstrap-touchspin-up" onClick={() => dispatch(incrementCart(i))}>
                                                <i className="fa-solid fa-plus" />
                                            </Btn>
                                        </span>
                                    </InputGroup>
                                </fieldset>
                            </td>
                            <td> <a href={Href}> <XCircle onClick={() => dispatch(removeFromCart(item.id))} /></a></td>
                            <td> {Dollar}{item.price * item.quantity}</td>
                        </tr>
                    )
                );
            })}
            <CartBodyContent />
        </tbody>
    )
}