import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import ImageGallery from './ImageGallery'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { GalleryTitle } from '../../../../Utils/Constants'

export default function GalleryGridContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={GalleryTitle} parent={GalleryTitle} title={GalleryTitle} />
            <Container fluid>
                <Row>
                    <Col sm={12}>
                        <ImageGallery />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
