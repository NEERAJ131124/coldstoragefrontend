import React from 'react'
import { CommonProductSlideProp } from '../../../../../../../Types/ECommerce.type'
import { Col, Row } from 'reactstrap'
import { Image, P } from '../../../../../../../AbstractElements'
import { dynamicImage, dynamicNumber } from '../../../../../../../Utils'

export default function CommonProductSlide({ data }: CommonProductSlideProp) {
    return (
        <Row className='product-box mb-3'>
            <Col md={4} className="product-img">
                <Image className="img-fluid img-100" src={dynamicImage(`ecommerce/${data.image}`)} alt="product" />
            </Col>
            <Col md={8} className="product-details text-start">
                <span>
                    {dynamicNumber(5).map((index) => (
                        <i className="fa-solid fa-star font-warning me-1" key={index} />
                    ))}
                </span>
                <P className="mb-0">{data.title}</P>
                <div className="product-price">{data.text}</div>
            </Col>
        </Row>
    )
}