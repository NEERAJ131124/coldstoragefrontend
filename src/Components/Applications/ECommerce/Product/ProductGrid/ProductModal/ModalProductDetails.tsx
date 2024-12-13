import React from 'react'
import { ModalProductDetailsProp } from '../../../../../../Types/ECommerce.type'
import { Btn, H4, H6, LI, P, UL } from '../../../../../../AbstractElements'
import { Dollar } from '../../../../../../Utils/Constants'
import { productSize } from '../../../../../../Data/Applications/ECommerce/Product'

export default function ModalProductDetails({ modelData }: ModalProductDetailsProp) {
    return (
        <>
            <H4>{modelData?.name}</H4>
            <div className="product-price">
                {Dollar}{modelData?.discountPrice}
                <del>
                    {Dollar}{modelData?.price}
                </del>
            </div>
            <div className="product-view">
                <H6 className="f-w-700">{'Product Details'}</H6>
                <P className="mb-0">{modelData?.discription}</P>
            </div>
            <div className="product-size">
                <UL className="simple-list flex-row">
                    {productSize.map((items: string, i: number) => (
                        <LI key={i} className="me-2">
                            <Btn color="light" outline>{items}</Btn>
                        </LI>
                    ))}
                </UL>
            </div>
        </>
    )
}