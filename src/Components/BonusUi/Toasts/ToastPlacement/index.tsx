import React, { useState } from 'react'
import { Card, CardBody, Col, Form, FormGroup, Input } from 'reactstrap';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { ToastPlacementTitle } from '../../../../Utils/Constants';
import { toastPlacementOptions, toastPlacementSubTitle } from '../../../../Data/BonusUi/Toasts';
import ToastPlacementContent from './ToastPlacementContent';

export default function ToastPlacement() {
    const [selectedPosition, setSelectedPosition] = useState('');
    const handlePositionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedPosition(event.target.value);
    };
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader title={ToastPlacementTitle} subTitle={toastPlacementSubTitle} />
                <CardBody className='toast-rtl toast-dark'>
                    <Form>
                        <FormGroup>
                            <Input className='mt-2' name='toastPlacement' id='selectToastPlacement' type='select' value={selectedPosition}
                                onChange={handlePositionChange}>
                                {toastPlacementOptions.map((options, index) => (
                                    <option value={options.value} key={index}>
                                        {options.label}
                                    </option>
                                ))}
                            </Input>
                        </FormGroup>
                    </Form>
                    <ToastPlacementContent selectedPosition={selectedPosition} />
                </CardBody>
            </Card>
        </Col>
    )
}