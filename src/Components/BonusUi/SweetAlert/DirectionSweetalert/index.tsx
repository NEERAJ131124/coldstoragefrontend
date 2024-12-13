import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import Swal from 'sweetalert2'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { DirectionSweetalertTitle } from '../../../../Utils/Constants'
import { warningAlertSubTitle, directionOptions } from '../../../../Data/BonusUi/SweetAlert'
import { Btn } from '../../../../AbstractElements'
import { AlertOptions } from '../../../../Types/BonusUi.type'

export default function DirectionSweetalert() {
    const showAlert = (type: keyof AlertOptions) => {
        Swal.fire({ ...directionOptions[type] });
    };
    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader title={DirectionSweetalertTitle} subTitle={warningAlertSubTitle} />
                <CardBody>
                    <div className="common-flex">
                        <Btn color='info' className='text-light sweet-17' onClick={() => showAlert('error')}>{'Top Left'}</Btn>
                        <Btn color='primary' className='sweet-16' onClick={() => showAlert('success')}>{'Top Right'}</Btn>
                        <Btn color='secondary' className='sweet-18' onClick={() => showAlert('info')}>{'Bottom Left'}</Btn>
                        <Btn color='warning' className='text-light sweet-19' onClick={() => showAlert('success2')}>{'Bottom Right'}</Btn>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}