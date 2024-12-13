import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { MapContainer, TileLayer } from 'react-leaflet'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { IndiaMapTitle } from '../../../../Utils/Constants'
import { indiaMapProps, indiaMapSubHeading } from '../../../../Data/Miscellaneous/Maps'

export default function IndiaMap() {
    return (
        <Col sm={6}>
            <Card>
                <CommonCardHeader title={IndiaMapTitle} subTitle={indiaMapSubHeading} />
                <CardBody className="map-z-index">
                    <MapContainer className='jvector-map-height custom-map'
                        {...indiaMapProps} >
                        <TileLayer url='http://{s}.tile.osm.org/{z}/{x}/{y}.png' />
                    </MapContainer>
                </CardBody>
            </Card>
        </Col>
    )
}
