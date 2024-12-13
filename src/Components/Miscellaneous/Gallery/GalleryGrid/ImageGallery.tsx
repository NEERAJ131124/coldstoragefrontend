import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { Link } from 'react-router-dom'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { Href, ImageGalleryTitle } from '../../../../Utils/Constants'
import { dynamicImage } from '../../../../Utils'
import { galleryData } from '../../../../Data/Miscellaneous/Gallery'

export default function ImageGallery() {
    return (
        <Card>
            <CommonCardHeader title={ImageGalleryTitle} />
            <CardBody className="gallery my-gallery ">
                <Row>
                    <Gallery>
                        {galleryData.map((item, i) => (
                            <Col xl={3} md={4} xs={6} key={i}>
                                <figure>
                                    <Item original={dynamicImage(`big-lightgallry/${item}`)} width="600" height="500">
                                        {({ ref, open }) => (
                                            <Link to={Href} onClick={open}>
                                                <img className='img-thumbnail' ref={ref} src={dynamicImage(`lightgallry/${item}`)} alt='Image_description' />
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