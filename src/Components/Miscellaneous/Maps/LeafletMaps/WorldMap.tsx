import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { MapContainer, TileLayer } from 'react-leaflet'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { WorldMapTitle } from '../../../../Utils/Constants'
import { worldMapProps, worldMapSubheading } from '../../../../Data/Miscellaneous/Maps'

export default function WorldMap() {
    return (
        <Col sm={6}>
            <Card>
                <CommonCardHeader title={WorldMapTitle} subTitle={worldMapSubheading} />
                <CardBody>
                    <MapContainer
                        className="jvector-map-height custom-map"
                        {...worldMapProps}>
                        <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
                    </MapContainer>
                </CardBody>
            </Card>
        </Col>
    )
}