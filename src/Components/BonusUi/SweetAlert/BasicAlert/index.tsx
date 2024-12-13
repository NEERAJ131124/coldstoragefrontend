import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import Swal from 'sweetalert2'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { BasicAlertTitle } from '../../../../Utils/Constants'
import { basicAlertSubTitle, alertOptions } from '../../../../Data/BonusUi/SweetAlert'
import { Btn } from '../../../../AbstractElements'
import { AlertOptions } from '../../../../Types/BonusUi.type'

export default function BasicAlert() {
    const showAlert = (title: string, text: string, type: keyof AlertOptions) => {
        Swal.fire({ title, text, ...alertOptions[type] }).then((result) => {
            if (result.isConfirmed && type === 'warning') {
                Swal.fire({ title: 'Deleted!', text: 'Your file has been deleted.', icon: 'success' });
            }
        });
    };
    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader title={BasicAlertTitle} subTitle={basicAlertSubTitle} />
                <CardBody>
                    <Btn color='primary' className="sweet-1 me-2" onClick={() => showAlert("Good job!", 'You clicked the button!', 'success')}>
                        {'Click it!'}
                    </Btn>
                    <Btn color='secondary' className="sweet-2 me-2" onClick={() => showAlert("It's Magic!", 'Thank you for visiting Admiro theme', 'success')}>
                        {'Title with text!'}
                    </Btn>
                    <Btn color='info' className="sweet-4 me-2" onClick={() => showAlert("The Internet?", 'That thing is still around?', 'question')}>
                        {'Informational'}
                    </Btn>
                    <Btn color='warning' className="sweet-1" onClick={() => showAlert('Are you sure?', "You won't be able to revert this!", 'warning')}>
                        {'Warning alert!'}
                    </Btn>
                </CardBody>
            </Card>
        </Col>
    )
}