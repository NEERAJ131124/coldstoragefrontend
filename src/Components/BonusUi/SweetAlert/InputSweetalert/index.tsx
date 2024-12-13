import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import Swal from 'sweetalert2'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { InputSweetalertTitle } from '../../../../Utils/Constants'
import { pikachuAlertSubTitle, inputOptions, inputConfirmOptions } from '../../../../Data/BonusUi/SweetAlert'
import { Btn } from '../../../../AbstractElements'
import { AlertOptions } from '../../../../Types/BonusUi.type'

export default function InputSweetalert() {
    const showAlert = (type: keyof AlertOptions) => {
        Swal.fire({ ...inputOptions[type] }).then((result) => {
            if (result.isConfirmed) {
                const matchedOption = inputConfirmOptions.find(option => option.includes(String(type)));
                const title = matchedOption ? `${matchedOption} ${result.value}` : result.value;
                Swal.fire({ title });
            }
        });
    };
    return (
        <Col xl={12}>
            <Card>
                <CommonCardHeader title={InputSweetalertTitle} subTitle={pikachuAlertSubTitle} />
                <CardBody>
                    <div className="common-flex">
                        <Btn color='success' className='sweet-22' onClick={() => showAlert('text')}>{'Text Input'}</Btn>
                        <Btn color='warning' className='text-light sweet-8' onClick={() => showAlert('email')}>{'Login Email'}</Btn>
                        <Btn color='info' className='text-light sweet-23' onClick={() => showAlert('url')}>{'URL'}</Btn>
                        <Btn color='danger' className='sweet-24' onClick={() => showAlert('password')}>{'Password'}</Btn>
                        <Btn color='warning' className='text-light sweet-25' onClick={() => showAlert('message')}>{'Textarea'}</Btn>
                        <Btn color='primary' className='sweet-26' onClick={() => showAlert('select')}>{'Select Input'}</Btn>
                        <Btn color='secondary' className='sweet-27' onClick={() => showAlert('color')}>{'Radio Input'}</Btn>
                        <Btn color='dark' className='sweet-28' onClick={() => showAlert('terms')}>{'Checkbox Input'}</Btn>
                        <Btn color='light' className='font-dark sweet-29' onClick={() => showAlert('range')}>{'Range'}</Btn>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}