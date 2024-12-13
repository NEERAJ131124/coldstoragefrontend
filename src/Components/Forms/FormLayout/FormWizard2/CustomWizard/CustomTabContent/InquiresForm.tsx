import React, { ChangeEvent, useState } from 'react'
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { toast } from 'react-toastify';
import { ActiveCallbackProp } from '../../../../../../Types/Forms.type';
import { Btn, P } from '../../../../../../AbstractElements';
import { itemsNameList } from '../../../../../../Data/Forms/FormLayout';
import { ContactNumber, Continue, Email, Previous } from '../../../../../../Utils/Constants';

export default function InquiresForm({ activeCallBack }: ActiveCallbackProp) {
    const [formData, setFormData] = useState({ notifications: "", email: "", contactNumber: "", describeIssue: "", });
    const { notifications, email, contactNumber, describeIssue } = formData;

    const updateFormData = (event: ChangeEvent<HTMLInputElement>) => {
        let name = event.target.name;
        let value = name === "rememberNextTime" ? event.target.checked : event.target.value;
        setFormData({ ...formData, [name]: value });
    };
    const handleNextButton = () => {
        if (notifications !== "" && email !== "" && contactNumber !== "" && describeIssue !== "") {
            activeCallBack(4);
        } else {
            return toast.error("please fill out all the fields before moving on to the next step");
        }
    };
    return (
        <Form onSubmit={(event) => event.preventDefault()} className="needs-validation" noValidate>
            <Row className='g-3'>
                <Col xs={12} className="inquiries-form">
                    <Row>
                        <Col md={6}>
                            <P className="f-w-500">{"Select the option how you want to receive important notifications."}</P>
                            <div className="choose-option">
                                {itemsNameList.map((data, index) => (
                                    <FormGroup check inline key={index}>
                                        <Input className="me-2" id={data} type="radio" name="notifications" onChange={updateFormData} defaultChecked={notifications === data ? true : false} value={data} />
                                        <Label htmlFor={data} check>{data}</Label>
                                    </FormGroup>
                                ))}
                            </div>
                        </Col>
                        <Col md={6}>
                            <Row className="g-3 basic-form">
                                <Col xs={12}>
                                    <Label>{Email}<span className="text-danger">*</span></Label>
                                    <Input type="text" placeholder="org@support.com" value={email} name="email" onChange={updateFormData} />
                                </Col>
                                <Col xs={12}>
                                    <Label>{ContactNumber}</Label>
                                    <Input type="number" placeholder="Enter number" value={contactNumber} name="contactNumber" onChange={updateFormData} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12}>
                    <Label className="f-w-500">{'If no, could you please describe?'}</Label>
                    <Input type="textarea" rows={3} value={describeIssue} name="describeIssue" onChange={updateFormData} />
                </Col>
                <Col xs={12} className="text-end">
                    <Btn color="primary" className='me-2' onClick={() => activeCallBack(2)}>{Previous}</Btn>
                    <Btn color="primary" onClick={handleNextButton}>{Continue}</Btn>
                </Col>
            </Row>
        </Form>
    )
}