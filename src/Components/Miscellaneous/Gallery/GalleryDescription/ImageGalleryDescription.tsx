import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { Link } from 'react-router-dom'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { Href, ImageGalleryDescriptionTitle } from '../../../../Utils/Constants'
import { galleryData } from '../../../../Data/Miscellaneous/Gallery'
import { dynamicImage } from '../../../../Utils'
import { H4, P } from '../../../../AbstractElements'

export default function ImageGalleryDescription() {
    return (
        <Card>
            <CommonCardHeader title={ImageGalleryDescriptionTitle} />
            <CardBody className="my-gallery gallery-with-description">
                <Row>
                    <Gallery withCaption>
                        {galleryData.map((item, i) => (
                            <Col xl={3} sm={6} key={i}>
                                <figure>
                                    <Item original={dynamicImage(`big-lightgallry/${item}`)} caption="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy." width="802" height="476">
                                        {({ ref, open }) => (
                                            <Link to={Href} onClick={open}>
                                                <img className='img-thumbnail' ref={ref} src={dynamicImage(`lightgallry/${item}`)} alt='Image_description' />
                                                <div className='caption border-top-0'>
                                                    <H4 className='mt-0'>{'Portfolio Title'}</H4>
                                                    <P>{"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}</P>
                                                </div>
                                            </Link>
                                        )}
                                    </Item>
                                </figure>
                            </Col>
                        ))}
                    </Gallery>
                </Row>
            </CardBody>
        </Card>
    )
}