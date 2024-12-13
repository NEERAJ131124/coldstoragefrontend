import React, { ChangeEvent, useState } from 'react'
import { toast } from 'react-toastify';
import { ActiveCallbackProp } from '../../../../../../Types/Forms.type';
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { Btn, H5, LI, P, UL } from '../../../../../../AbstractElements';
import { AccountType, Continue } from '../../../../../../Utils/Constants';
import { selectAccountTypeData } from '../../../../../../Data/Forms/FormLayout';

export default function ChooseAccount({ activeCallBack }: ActiveCallbackProp) {
    const [formData, setFormData] = useState("");
    const updateFormData = (event: ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;
        setFormData(value);
    };
    const handleNextButton = () => {
        if (formData !== "") {
            activeCallBack(2);
        } else {
            return toast.error("please fill out all the fields before moving on to the next step");
        }
    };
    return (
        <Form className="needs-validation" noValidate onSubmit={(event) => event.preventDefault()}>
            <Row className='g-3'>
                <Col xs={12} >
                    <H5 className='f-w-700'>{AccountType}</H5>
                    <P>{"It has long been known that distracting information on a page will lose a readers attention."}</P>
                </Col>
                <Col xs={12}>
                    <FormGroup check className="radio ps-0 select-account">
                        <UL className="radio-wrapper simple-list">
                            {selectAccountTypeData.map((data, index) => (
                                <LI key={index}>
                                    <Input id={data.title} value={data.title} defaultChecked={data.title === formData ? true : false} type="radio" name="accountType" onChange={updateFormData} />
                                    <Label className="mb-0" htmlFor={data.title} check>
                                        <i className={`fa-solid fa-${data.icon}`} />
                                        <span className="d-flex flex-column align-items-start">
                                            <span>{data.title}</span>
                                            <span>{"Search your "}{data.title}{" information please check it"}</span>
                                        </span>
                                    </Label>
                                </LI>
                            ))}
                        </UL>
                    </FormGroup>
                </Col>
                <Col xs={12} className="text-end">
                    <Btn onClick={handleNextButton} color="primary">{Continue}</Btn>
                </Col>
            </Row>
        </Form>
    )
}