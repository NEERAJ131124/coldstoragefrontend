import React, { useState } from 'react'
import { Input, InputGroup } from 'reactstrap'
import { X } from 'react-feather'
import { Link } from 'react-router-dom'
import { Badges, Btn, H3, H6, Image, LI, UL } from '../../../AbstractElements'
import { Cart, Checkout, Dollar, GoToCart, Href } from '../../../Utils/Constants'
import { dynamicImage } from '../../../Utils'
import { cartHeaderData } from '../../../Data/Layout/RightHeader'
import SvgIcon from '../../../Utils/CommonComponents/CommonSvgIcons'

export default function CartHeader() {
    const [cartDropdown, setCartDropdown] = useState(false);
    const toggle = () => setCartDropdown((prevState) => !prevState);

    return (
        <LI className='custom-dropdown'>
            <a href={Href} onClick={toggle}><SvgIcon iconId="cart-icon" /></a>
            <Badges color='primary' pill>{'2'}</Badges>
            <div className={`custom-menu cart-dropdown py-0 overflow-hidden ${cartDropdown ? 'show' : ''}`}>
                <H3 className="title dropdown-title">{Cart}</H3>
                <UL className='simple-list pb-0'>
                    {cartHeaderData.map((item) => (
                        <LI key={item.id}>
                            <div className="d-flex">
                                <Image className="img-fluid b-r-5 me-3 img-60" src={dynamicImage(`dashboard-2/${item.src}`)} alt="" />
                                <div className="flex-grow-1">
                                    <span className="f-w-600">{item.name}</span>
                                    <div className="qty-box">
                                        <InputGroup>
                                            <span className="input-group-prepend"><Btn className="quantity-left-minus">{'-'}</Btn></span>
                                            <Input className="input-number" type="text" name="quantity" defaultValue="1" />
                                            <span className="input-group-prepend"><Btn className="quantity-right-plus">{'+'}</Btn></span>
                                        </InputGroup>
                                    </div>
                                    <H6 className="font-primary">{Dollar}{item.price}</H6>
                                </div>
                                <div className="close-circle"><a className="bg-danger" href={Href}><X /></a></div>
                            </div>
                        </LI>
                    ))}
                    <LI className="total">
                        <H6 className="mb-0">{'Order Total : '}<span className="f-w-600">{'$1000.00'}</span></H6>
                    </LI>
                    <LI className="text-center">
                        <Link className="d-block mb-3 view-cart f-w-700 text-primary" to={`${process.env.PUBLIC_URL}/applications/ecommerce/cart`}>{GoToCart}</Link>
                        <Link className="btn btn-primary view-checkout text-white" to={`${process.env.PUBLIC_URL}/applications/ecommerce/checkout`}>{Checkout}</Link>
                    </LI>
                </UL>
            </div>
        </LI>
    )
}