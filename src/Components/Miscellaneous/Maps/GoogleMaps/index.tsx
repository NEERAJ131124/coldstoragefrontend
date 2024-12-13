import React from 'react'
import { Container, Row } from 'reactstrap'
import BasicMap from './BasicMap'
import MarkerMaps from './MarkerMaps'
import PolygonsMap from './PolygonsMap'
import PolylineMaps from './PolylineMaps'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { GoogleMapTitle, MapTitle } from '../../../../Utils/Constants'

export default function GoogleMapsContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={GoogleMapTitle} parent={MapTitle} title={GoogleMapTitle} />
            <Container fluid>
                <Row>
                    <BasicMap />
                    <MarkerMaps />
                    <PolygonsMap />
                    <PolylineMaps />
                </Row>
            </Container>
        </>
    )
}