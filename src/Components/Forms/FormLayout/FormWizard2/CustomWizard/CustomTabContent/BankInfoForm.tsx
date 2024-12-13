import React, { ChangeEvent, useState } from 'react'
import { toast } from 'react-toastify';
import { ActiveCallbackProp } from '../../../../../../Types/Forms.type';
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { Btn, H6, Image, LI, UL } from '../../../../../../AbstractElements';
import { dynamicImage } from '../../../../../../Utils';
import { AadhaarNumber, ChooseBanks, Continue, PAN, Previous } from '../../../../../../Utils/Constants';
import { popularBanksList } from '../../../../../../Data/Forms/FormLayout';

export default function BankInfoForm({ activeCallBack }: ActiveCallbackProp) {
    const [formData, setFormData] = useState({ aadhaarNumber: "", panNumber: "", bankName: "", });
    const { aadhaarNumber, panNumber, bankName } = formData;

    const updateFormData = (event: ChangeEvent<HTMLInputElement>) => {
        let name = event.target.name;
        let value = name === "rememberNextTime" ? event.target.checked : event.target.value;
        setFormData({ ...formData, [name]: value });
    };
    const handleNextButton = () => {
        if (aadhaarNumber !== "" && panNumber !== "" && bankName !== "") {
            activeCallBack(3);
        } else {
            return toast.error("please fill out all the fields before moving on to the next step");
        }
    };
    return (
        <Form onSubmit={(event) => event.preventDefault()} className="needs-validation basic-form" noValidate>
            <Row className='g-3'>
                <Col md={6} className="bank-search">
                    <Label>{AadhaarNumber}<span className="text-danger">*</span></Label>
                    <Input value={aadhaarNumber} name="aadhaarNumber" onChange={updateFormData} type="number" placeholder="xxxx xxxx xxxx xxxx" />
                </Col>
                <Col md={6} className="bank-search">
                    <Label>{PAN}<span className="text-danger">*</span></Label>
                    <Input type="text" placeholder="xxxxxxxxxx" value={panNumber} name="panNumber" onChange={updateFormData} />
                </Col>
                <Col xs={12}>
                    <H6 className="f-w-600">{ChooseBanks}</H6>
                    <div className="bank-selection">
                        <FormGroup check className="radio radio-primary ps-0">
                            <UL className="radio-wrapper simple-list flex-row">
                                {popularBanksList.map((data, index) => (
                                    <LI key={index}>
                                        <Input id={data.bankName} type="radio" name="bankName" value={data.bankName} defaultChecked={bankName === data.bankName ? true : false} onChange={updateFormData} />
                                        <Label htmlFor={data.bankName} check>
                                            <Image className="img-fluid mb-2" src={dynamicImage(`forms/${data.image}`)} alt="bank" />
                                            <span>{data.bankName}</span>
                                        </Label>
                                    </LI>
                                ))}
                            </UL>
                        </FormGroup>
                    </div>
                </Col>
                <Col xs={12} className="text-end">
                    <Btn color="primary" className='me-2' onClick={() => activeCallBack(1)}>{Previous}</Btn>
                    <Btn color="primary" onClick={handleNextButton}>{Continue}</Btn>
                </Col>
            </Row>
        </Form>
    )
}