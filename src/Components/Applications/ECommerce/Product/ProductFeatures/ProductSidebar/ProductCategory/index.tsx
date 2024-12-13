import React from 'react'
import { H6 } from '../../../../../../../AbstractElements'
import CategoryFilter from './CategoryFilter'
import BrandFilter from './BrandFilter'
import ColorsFilter from './ColorsFilter'
import PriceRange from './PriceRange'

export default function ProductCategory() {
    return (
        <>
            <div className="product-filter">
                <H6 className="f-w-700">{'Category'}</H6>
                <CategoryFilter />
            </div>
            <div className="product-filter">
                <H6 className="f-w-700">{'Brand'}</H6>
                <BrandFilter />
            </div>
            <div className="product-filter slider-product">
                <H6 className="f-w-700">{'Colors'}</H6>
                <ColorsFilter />
            </div>
            <div className="product-filter pb-0">
                <H6 className="f-w-700">{'Price'}</H6>
                <PriceRange />
            </div>
        </>
    )
}