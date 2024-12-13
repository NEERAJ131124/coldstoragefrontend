import React from 'react'
import { Link } from 'react-router-dom'
import { ProductDetailsProps } from '../../../../../Types/ECommerce.type'
import { H4, P } from '../../../../../AbstractElements'
import { Dollar } from '../../../../../Utils/Constants'

export default function ProductDetails({ item }: ProductDetailsProps) {
    return (
        <div className="product-details">
            <div className="rating">
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
            </div>
            <Link to={`${process.env.PUBLIC_URL}/ecommerce/product_page/${item.id}`}>
                <H4>{item.name}</H4>
            </Link>
            <P>{item.note}</P>
            <div className="product-price">
                {Dollar}{item.price } 
                <del>
                     {Dollar}{item.discountPrice}
                </del>
            </div>
        </div>
    )
}