import React, { ChangeEvent, useState } from 'react'
import { toast } from 'react-toastify';
import { ActiveCallbackProp } from '../../../../../../Types/Forms.type';
import { Col, Form, Input, Label, Row } from 'reactstrap';
import { AccountName, Continue, Email, Previous } from '../../../../../../Utils/Constants';
import { Btn, H5, P } from '../../../../../../AbstractElements';
import VariationBox from './VariationBox';

export default function BusinessSettingsForm({ activeCallBack }: ActiveCallbackProp) {
    const [formData, setFormData] = useState({ accountName: "", email: "", description: "" });
    const { accountName, email, description } = formData;
    const updateFormData = (event: ChangeEvent<HTMLInputElement>) => {
        let name = event.target.name;
        let value = event.target.value;
        setFormData({ ...formData, [name]: value });
    };
    const handleNextButton = () => {
        if (accountName !== "" && email !== "" && description !== "") {
            activeCallBack(3);
        } else {
            return toast.error("please fill out all the fields before moving on to the next step");
        }
    };
    return (
        <Form onSubmit={(event) => event.preventDefault()} className="needs-validation basic-form business-horizontal" noValidate>
            <Row className='g-3'>
                <Col md={6}>
                    <Label>{AccountName}<span className="text-danger">*</span></Label>
                    <Input name="accountName" value={accountName} onChange={updateFormData} type="text" />
                </Col>
                <Col md={6}>
                    <Label>{Email}<span className="text-danger">*</span></Label>
                    <Input type="text" placeholder="org@superrito.com" name="email" value={email} onChange={updateFormData} />
                </Col>
                <Col xs={12}>
                    <Label>{'Select a project and write a description for it'}</Label>
                    <Input type="textarea" rows={3} name="description" value={description} onChange={updateFormData} />
                </Col>
                <Col xs={12}>
                    <section className="main-upgrade">
                        <div>
                            <i className="fa-solid fa-rocket mb-3" />
                            <H5 className="mb-3">{'Select team size with '}<span className="text-primary"> {"projects"}</span></H5>
                            <P className="text-muted mb-2">{" Agile teams are cross-functional and made up of 5-11 on a regular basis team member."}</P>
                        </div>
                        <VariationBox />
                    </section>
                </Col>
                <Col xs={12} className="text-end">
                    <Btn onClick={() => activeCallBack(1)} color="primary" className='me-2'>{Previous}</Btn>
                    <Btn color="primary" onClick={handleNextButton}>{Continue}</Btn>
                </Col>
            </Row>
        </Form>
    )
}