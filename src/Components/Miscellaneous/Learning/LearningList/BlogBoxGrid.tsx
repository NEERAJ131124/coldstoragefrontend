import React from 'react'
import { Card, Col } from 'reactstrap'
import { Download, Link } from 'react-feather'
import { learningGridData } from '../../../../Data/Miscellaneous/Learning'
import { H6, Image, LI, UL } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Utils'

export default function BlogBoxGrid() {
    return (
        <>
            {learningGridData.map((item) => (
                <Col xl={4} sm={6} className="xl-50 box-col-6" key={item.id}>
                    <Card>
                        <div className="blog-box blog-grid text-center product-box">
                            <div className="product-img">
                                <Image className="img-fluid top-radius-blog" src={dynamicImage(`faq/${item.src}`)} alt="" />
                                <div className="product-hover">
                                    <UL className='simple-list flex-row'>
                                        <LI><Link /></LI>
                                        <LI><Download /></LI>
                                    </UL>
                                </div>
                            </div>
                            <div className="blog-details-main">
                                <UL className="blog-social simple-list flex-row justify-content-center">
                                    <LI>{'9 April 2024'}</LI>
                                    <LI>{'by: Admin'}</LI>
                                    <LI>{'0 Hits'}</LI>
                                </UL>
                                <hr />
                                <H6 className="blog-bottom-details">{'Perspiciatis unde omnis iste natus error sit.Dummy text'}</H6>
                            </div>
                        </div>
                    </Card>
                </Col>
            ))}
        </>
    )
}