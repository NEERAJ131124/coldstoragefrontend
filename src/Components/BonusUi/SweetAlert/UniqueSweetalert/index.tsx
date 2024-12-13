import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import Swal from 'sweetalert2'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { UniqueSweetalertTitle } from '../../../../Utils/Constants'
import { infoAlertSubTitle, uniqueOptions } from '../../../../Data/BonusUi/SweetAlert'
import { Btn } from '../../../../AbstractElements'
import { AlertOptions } from '../../../../Types/BonusUi.type'

export default function UniqueSweetalert() {
    const showAlert = (title: string, type: keyof AlertOptions) => {
        Swal.fire({ title, ...uniqueOptions[type] });
    };
    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader title={UniqueSweetalertTitle} subTitle={infoAlertSubTitle} />
                <CardBody>
                    <div className="common-flex">
                        <Btn color='danger' className='sweet-7' onClick={() => showAlert("Oops...", 'danger')}>{'Danger mode'}</Btn>
                        <Btn color='warning' className='text-light sweet-6' onClick={() => showAlert("Custom animation with Animate.css", 'animate')}>{'Animation Alert'}</Btn>
                        <Btn color='primary' className='sweet-14' onClick={() => showAlert("Timer Alert", 'timer')}>{'Timer'}</Btn>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}