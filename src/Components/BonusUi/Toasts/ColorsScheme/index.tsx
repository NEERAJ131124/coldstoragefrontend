import React, { useState } from 'react'
import { Card, CardBody, CloseButton, Col, Toast, ToastBody } from 'reactstrap';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { ColorsSchemesTitle } from '../../../../Utils/Constants';
import { colorsSchemeSubTitle } from '../../../../Data/BonusUi/Toasts';

export default function ColorsScheme() {
    const [open, setOpen] = useState(true);
    const toggle = () => setOpen(!open);
    return (
        <Col md={6}>
            <Card>
                <CommonCardHeader title={ColorsSchemesTitle} subTitle={colorsSchemeSubTitle} />
                <CardBody className='toast-rtl'>
                    <Toast fade className='default-show-toast align-items-center text-light border-0 bg-warning' isOpen={open}>
                        <div className='d-flex justify-content-between'>
                            <ToastBody>{"Your time over after 5 minute."}</ToastBody>
                            <CloseButton variant='white' className='me-2 m-auto' onClick={toggle} />
                        </div>
                    </Toast>
                </CardBody>
            </Card>
        </Col>
    );
}

