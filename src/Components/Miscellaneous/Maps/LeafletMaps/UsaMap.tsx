import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { MapContainer, TileLayer } from 'react-leaflet'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { UsaMapTitle } from '../../../../Utils/Constants'
import { usaMapProps, usaMapSubHeading } from '../../../../Data/Miscellaneous/Maps'

export default function UsaMap() {
    return (
        <Col sm={6}>
            <Card>
                <CommonCardHeader title={UsaMapTitle} subTitle={usaMapSubHeading} />
                <CardBody className="map-z-index">
                    <MapContainer className='jvector-map-height custom-map'
                        {...usaMapProps} >
                        <TileLayer url='http://{s}.tile.osm.org/{z}/{x}/{y}.png' />
                    </MapContainer>
                </CardBody>
            </Card>
        </Col>
    )
}
