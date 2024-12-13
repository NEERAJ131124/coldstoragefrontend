import React, { ChangeEvent, useState } from 'react'
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { toast } from 'react-toastify';
import { ActiveCallbackProp } from '../../../../../../Types/Forms.type';
import { AgreeTerms, ContactNumber, Continue, Email, FirstName, LastName, State, ZipCode } from '../../../../../../Utils/Constants';
import { Btn } from '../../../../../../AbstractElements';

export default function PersonalInfoForm({ activeCallBack }: ActiveCallbackProp) {
    const [formData, setFormData] = useState({ firstName: "", lastName: "", contact: "", email: "", state: "", zip: "", });
    const { firstName, lastName, contact, email, state, zip } = formData;

    const updateFormData = (event: ChangeEvent<HTMLInputElement>) => {
        let name = event.target.name;
        let value = name === "rememberNextTime" ? event.target.checked : event.target.value;
        setFormData({ ...formData, [name]: value });
    };
    const handleNextButton = () => {
        if (firstName !== "" && lastName !== "" && contact !== "" && email !== "" && state !== "" && zip !== "") {
            activeCallBack(2);
        } else {
            return toast.error("please fill out all the fields before moving on to the next step");
        }
    };
    return (
        <Form onSubmit={(e) => e.preventDefault()} className="needs-validation basic-form" noValidate>
            <Row className='g-3'>
                <Col xl={4} sm={6}>
                    <Label>{FirstName}<span className="text-danger">*</span></Label>
                    <Input type="text" placeholder="Enter first name" value={firstName} name="firstName" onChange={updateFormData} />
                </Col>
                <Col xl={4} sm={6}>
                    <Label>{LastName}<span className="text-danger">*</span></Label>
                    <Input type="text" placeholder="Enter last name" value={lastName} name="lastName" onChange={updateFormData} />
                </Col>
                <Col xl={4} xs={12}>
                    <Label>{Email}<span className="text-danger">*</span></Label>
                    <Input type="email" placeholder="admiro@example.com" value={email} name="email" onChange={updateFormData} />
                </Col>
                <Col xl={5} sm={4}>
                    <Label>{State}</Label>
                    <Input type="select" value={state} name="state" onChange={updateFormData}>
                        <option value={""}>{'Choose...'}</option>
                        <option value={"USA"}>{'USA '}</option>
                        <option value={"U.K"}>{'U.K '}</option>
                        <option value={"U.S"}>{'U.S'}</option>
                    </Input>
                </Col>
                <Col lg={3} md={6}>
                    <Label>{ZipCode}</Label>
                    <Input type="number" value={zip} name="zip" onChange={updateFormData} />
                </Col>
                <Col lg={4} md={6}>
                    <Label>{ContactNumber}</Label>
                    <Input type="number" placeholder="Enter number" onChange={updateFormData} name="contact" value={contact} />
                </Col>
                <Col xs={12}>
                    <FormGroup check>
                        <Input id="invalid-check-wizard" type="checkbox" required />
                        <Label className="mb-0 d-block" htmlFor="invalid-check-wizard" check>{AgreeTerms}</Label>
                    </FormGroup>
                </Col>
                <Col xs={12} className="text-end">
                    <Btn color="primary" onClick={handleNextButton}>{Continue}</Btn>
                </Col>
            </Row>
        </Form>
    );
};