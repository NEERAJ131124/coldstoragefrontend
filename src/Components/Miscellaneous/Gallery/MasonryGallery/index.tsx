import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import MasonryGallery from './MasonryGallery'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { GalleryTitle, MasonaryTitle } from '../../../../Utils/Constants'

export default function MasonryGalleryContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={MasonaryTitle} parent={GalleryTitle} title={MasonaryTitle} />
            <Container fluid>
                <Row>
                    <Col sm={12} className='box-col-12'>
                        <MasonryGallery />
                    </Col>
                </Row>
            </Container>
        </>
    )
}