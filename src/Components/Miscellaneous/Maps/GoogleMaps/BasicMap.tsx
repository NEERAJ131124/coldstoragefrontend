import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Card, CardBody, Col } from 'reactstrap';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { BasicMapTitle } from '../../../../Utils/Constants';
import { containerStyle, defaultCenter } from '../../../../Data/Miscellaneous/Maps';

export default function BasicMap() {
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAjeJEPREBQFvAIqDSZliF0WjQrCld-Mh0",
    });

    return (
        <Col sm={6}>
            <Card>
                <CommonCardHeader title={BasicMapTitle} />
                <CardBody className='z-1'>
                    <div className="map-js-height">
                        <div id="gmap-simple" className="map-block">
                            {isLoaded ? <GoogleMap mapContainerStyle={containerStyle} center={defaultCenter} zoom={10} /> : "Loading"}
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}