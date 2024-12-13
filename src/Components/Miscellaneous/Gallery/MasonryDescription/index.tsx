import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import MasonryDescription from './MasonryDescription'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { GalleryTitle, MasonaryDiscTitle } from '../../../../Utils/Constants'

export default function MasonryDescriptionContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={MasonaryDiscTitle} parent={GalleryTitle} title={MasonaryDiscTitle} />
            <Container fluid>
                <Row>
                    <Col sm={12}>
                        <MasonryDescription />
                    </Col>
                </Row>
            </Container>
        </>
    )
}