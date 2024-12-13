import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import ImageGalleryDescription from './ImageGalleryDescription'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { GalleryGridDescriptionTitle, GalleryTitle } from '../../../../Utils/Constants'

export default function GalleryDescriptionContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={GalleryGridDescriptionTitle} parent={GalleryTitle} title={GalleryGridDescriptionTitle} />
            <Container fluid>
                <Row>
                    <Col sm={12}>
                        <ImageGalleryDescription />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
