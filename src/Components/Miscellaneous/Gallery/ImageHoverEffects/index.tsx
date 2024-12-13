/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { dynamicImage, dynamicNumber } from '../../../../Utils'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { GalleryTitle, HoverEffect, Href, ImageHoverEffects } from '../../../../Utils/Constants'
import { hoverImageData } from '../../../../Data/Miscellaneous/Gallery'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'

export default function ImageHoverContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={ImageHoverEffects} parent={GalleryTitle} title={ImageHoverEffects} />
            <Container fluid>
                {dynamicNumber(15).map((item, i) => (
                    <Row key={i}>
                        <Col sm={12}>
                            <Card>
                                <CommonCardHeader title={`${HoverEffect} ${item}`} />
                                <CardBody>
                                    <Row id="aniimated-thumbnials" className="my-gallery gallery">
                                        <Gallery>
                                            {hoverImageData.map((image, index) => (
                                                <Col xs={6} md={3} key={index}>
                                                    <figure className={`img-hover hover-${item}`} key={i}>
                                                        <Item original={dynamicImage(`big-lightgallry/${image}`)}>
                                                            {({ ref, open }) => (
                                                                <Link to={Href} onClick={open}>
                                                                    <div>
                                                                        <img ref={ref} className='img-fluid' src={dynamicImage(`lightgallry/${image}`)} alt="Image description" />
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
                        </Col>
                    </Row>
                ))}
            </Container>
        </>
    )
}