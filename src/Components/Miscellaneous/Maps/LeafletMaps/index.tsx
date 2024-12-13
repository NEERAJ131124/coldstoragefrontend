import React from 'react'
import { Container, Row } from 'reactstrap'
import WorldMap from './WorldMap'
import UsaMap from './UsaMap'
import IndiaMap from './IndiaMap'
import AustraliaMap from './AustraliaMap'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { LeafletMapTitle, MapTitle } from '../../../../Utils/Constants'

export default function LeafletMapsContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={LeafletMapTitle} parent={MapTitle} title={LeafletMapTitle} />
            <Container fluid>
                <Row>
                    <WorldMap />
                    <UsaMap />
                    <IndiaMap />
                    <AustraliaMap />
                </Row>
            </Container>
        </>
    )
}