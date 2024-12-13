import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { MapContainer, TileLayer } from 'react-leaflet'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { australiaMapProps, australiaMapSubHeading } from '../../../../Data/Miscellaneous/Maps'
import { AustraliaMapTitle } from '../../../../Utils/Constants'

export default function AustraliaMap() {
    return (
        <Col sm={6}>
            <Card>
                <CommonCardHeader title={AustraliaMapTitle} subTitle={australiaMapSubHeading} />
                <CardBody>
                    <MapContainer className="jvector-map-height custom-map"  {...australiaMapProps}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    </MapContainer>
                </CardBody>
            </Card>
        </Col>
    )
}