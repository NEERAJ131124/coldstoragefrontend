import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import Swal from 'sweetalert2'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { Btn } from '../../../../AbstractElements'
import { DangerAlertTitle } from '../../../../Utils/Constants'
import { dangerAlertSubTitle } from '../../../../Data/BonusUi/SweetAlert'

export default function DangerAlert() {
    const handleAlert = () => {
        Swal.fire({
            title: 'Sweet!',
            text: 'Modal with a custom image.',
            imageUrl: 'https://unsplash.it/400/200',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
            showClass: {
                popup: 'animate__animated animate__zoomIn'
            },
        })
    }
    return (
        <Col xl={3}>
            <Card>
                <CommonCardHeader title={DangerAlertTitle} subTitle={dangerAlertSubTitle} />
                <CardBody>
                    <div className="common-flex">
                        <Btn color='info' className="text-light sweet-21" onClick={handleAlert}>{'Message Timer'}</Btn>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
