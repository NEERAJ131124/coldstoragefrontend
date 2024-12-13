/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { Link } from 'react-router-dom'
import { dynamicImage } from '../../../../../Utils'
import { Href } from '../../../../../Utils/Constants'
import { H4, P } from '../../../../../AbstractElements'
import { socialPhotosData } from '../../../../../Data/Applications/SocialApp'

export default function Photos() {
    return (
        <Row>
            <Col sm={12}>
                <Card>
                    <CardBody className="my-gallery gallery-with-description">
                        <Row>
                            <Gallery withCaption>
                                {socialPhotosData.map((item) => (
                                    <Col xl={3} sm={6} key={item.id}>
                                        <figure>
                                            <Item original={dynamicImage(`big-lightgallry/${item.image}`)} width={881} height={523} caption="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.">
                                                {({ ref, open }) => (
                                                    <Link to={Href} onClick={open}>
                                                        <img className="img-thumbnail border-bottom-0 p-2 rounded-0 rounded-top-1" ref={ref} src={dynamicImage(`big-lightgallry/${item.image}`)} alt="Image description" />
                                                        <div className="caption border-top-0 p-2">
                                                            <H4>{item.title}</H4>
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
            </Col>
        </Row>
    )
}