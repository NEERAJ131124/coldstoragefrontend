/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Col, Row } from 'reactstrap'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { Link } from 'react-router-dom'
import { H4, H6, P } from '../../../../../AbstractElements'
import { imageTabData } from '../../../../../Data/Applications/SearchResult'
import { dynamicImage } from '../../../../../Utils'
import { Href } from '../../../../../Utils/Constants'
import PaginationCard from '../Common/PaginationCard'

export default function ImageTab() {
    return (
        <div>
            <H6 className="mb-2 f-w-700">{'About 12,120 results (0.50 seconds)'}</H6>
            <Row className="my-gallery gallery-with-description">
                <Gallery withCaption>
                    {imageTabData.map((item, index) => (
                        <Col xl={3} sm={6} key={index}>
                            <figure>
                                <Item original={dynamicImage(`big-lightgallry/${item}.jpg`)} width={908} height={539} caption="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.">
                                    {({ ref, open }) => (
                                        <Link to={Href} onClick={open}>
                                            <img className="img-thumbnail border-bottom-0 p-2 rounded-0 rounded-top-1" ref={ref} src={dynamicImage(`big-lightgallry/${item}.jpg`)} alt="Image description" />
                                            <div className="caption border-top-0 p-2">
                                                <H4>{'Portfolio Title'}</H4>
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
            <PaginationCard />
        </div>
    )
}