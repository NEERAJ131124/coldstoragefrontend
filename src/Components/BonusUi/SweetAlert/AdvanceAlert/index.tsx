import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import Swal from 'sweetalert2'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { AdvanceAlertTitle } from '../../../../Utils/Constants'
import { titleWithTextSubTitle, advanceOptions } from '../../../../Data/BonusUi/SweetAlert'
import { Btn } from '../../../../AbstractElements'
import { AlertOptions } from '../../../../Types/BonusUi.type'

export default function AdvanceAlert() {
    const showAlert = (title: string, type: keyof AlertOptions) => {
        Swal.fire({ title, ...advanceOptions[type] }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({ icon: 'success', title: 'Saved!' });
            } else if (result.isDenied) {
                Swal.fire({ title: 'Changes are not saved', icon: 'info' });
            }
        });
    };
    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader title={AdvanceAlertTitle} subTitle={titleWithTextSubTitle} />
                <CardBody>
                    <div className="common-flex">
                        <Btn color='warning' className='text-light sweet-12' onClick={() => showAlert("Do you want to save the changes?", 'question')}>{'Questions state'}</Btn>
                        <Btn color='secondary' className='sweet-13' onClick={() => showAlert("Signed in successfully!", 'toast')}>{'Toast Alert'}</Btn>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}