import React, { useState } from 'react'
import { GoogleMap, InfoWindow, useJsApiLoader } from '@react-google-maps/api';
import { Card, CardBody, Col } from 'reactstrap';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { MarkerMapTitle } from '../../../../Utils/Constants';
import { containerStyle, defaultCenter } from '../../../../Data/Miscellaneous/Maps';

export default function MarkerMaps() {
    const [location] = useState({
        address: false,
        mapPosition: { lat: 18.5204, lng: 73.8567, },
        markerPosition: { lat: 18.5204, lng: 73.8567, },
    });
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAjeJEPREBQFvAIqDSZliF0WjQrCld-Mh0",
    });

    return (
        <Col sm={6}>
            <Card>
                <CommonCardHeader title={MarkerMapTitle} />
                <CardBody className='z-1'>
                    <div className="map-js-height">
                        <div id="gmap-simple" className="map-block">
                            {isLoaded ? (
                                <GoogleMap mapContainerStyle={containerStyle} center={defaultCenter} zoom={10}>
                                    {location.address ? (
                                        <InfoWindow position={{ lat: location.markerPosition.lat + 0.0018, lng: location.markerPosition.lng }}>
                                            <div>
                                                <span style={{ padding: 0, margin: 0 }}>{'Current Location'}</span>
                                            </div>
                                        </InfoWindow>
                                    ) : ("")
                                    }
                                </GoogleMap>
                            ) : ("")
                            }
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}