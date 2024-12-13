import React from 'react'
import { Card, CardBody, CardFooter, Col, Row } from 'reactstrap'
import { Rating } from 'react-simple-star-rating'
import { H3, H5, Image, LI, P, UL } from '../../../AbstractElements'
import { FeaturedTutorialsTitle } from '../../../Utils/Constants'
import { dynamicImage } from '../../../Utils'
import { featuredTutorialsProp } from '../../../Types/Miscellaneous.type'

export default function FeaturedTutorials({ data, titleClass, colClass }: featuredTutorialsProp) {
    return (
        <Col lg={12}>
            <div className="header-faq"><H3 className={`mb-0 ${titleClass}`}>{FeaturedTutorialsTitle}</H3></div>
            <Row>
                {data.map((item) => (
                    <Col md={6} className={`box-col-6 ${colClass}`} key={item.id}>
                        <Card className="features-faq product-box">
                            <div className="faq-image product-img">
                                <Image className="img-fluid" src={dynamicImage(`faq/${item.image}`)} alt="featured image" />
                                <div className="product-hover">
                                    <UL className='simple-list flex-row'>
                                        <LI><i className={item.linkIcon} /></LI>
                                        <LI><i className={item.downloadIcon} /></LI>
                                    </UL>
                                </div>
                            </div>
                            <CardBody>
                                <H5 className={titleClass}>{item.title}</H5>
                                <P>{item.description}</P>
                            </CardBody>
                            <CardFooter>
                                <span className="f-w-600">{item.date}</span>
                                <span className="pull-right"><Rating fillColor="#7366ff" initialValue={Math.random() * 5} size={14} /></span>
                            </CardFooter>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Col>
    )
}