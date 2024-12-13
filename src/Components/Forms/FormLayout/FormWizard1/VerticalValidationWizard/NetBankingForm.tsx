//@ts-nocheck
import React, { useState } from 'react'
import { VerticalWizardFormProps } from '../../../../../Types/Forms.type';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { AgreeTerms, NetBanking, SelectYourBank } from '../../../../../Utils/Constants';
import { H6 } from '../../../../../AbstractElements';
import { netBankingFormBankList } from '../../../../../Data/Forms/FormLayout';

export default function NetBankingForm({ formData, updateFormData }: VerticalWizardFormProps) {
    const [open, setOpen] = useState("");
    const toggle = (id: string) => {
        open === id ? setOpen("") : setOpen(id);
    };
    return (
        <Form onSubmit={(event) => event.preventDefault()} className="mb-3 needs-validation custom-input vartical-validation validation-vertical-wizard" noValidate>
            <Row className='g-3'>
                <Col md={12}>
                    <Accordion open={open} toggle={toggle} className="dark-accordion">
                        <AccordionItem>
                            <AccordionHeader className='accordion-light-primary text-primary' targetId="1">{NetBanking}
                                {open === "1" ? <i className="fa-solid fa-chevron-down" /> : <i className="fa-solid fa-chevron-up" />}
                            </AccordionHeader>
                            <AccordionBody accordionId="1" className="weight-title">
                                <H6 className="sub-title">{SelectYourBank}</H6>
                                <Row>
                                    {netBankingFormBankList.map((data, index) => (
                                        <Col sm={6} key={index}>
                                            {data.bankList.map((bankNames, number) => (
                                                <FormGroup check key={number} className="radio radio-primary">
                                                    <Input id={bankNames} type="radio" name="bankName" onChange={updateFormData} defaultChecked={bankNames === formData.bankName ? true : false} value={bankNames} />
                                                    <Label htmlFor={bankNames} check>{bankNames} {number}</Label>
                                                </FormGroup>
                                            ))}
                                        </Col>
                                    ))}
                                </Row>
                            </AccordionBody>
                        </AccordionItem>
                    </Accordion>
                </Col>
                <Col xs={12}>
                    <Input type="textarea" name="feedBack" value={formData.feedBack} onChange={updateFormData} placeholder="Your Feedback" />
                </Col>
                <Col xs={12}>
                    <FormGroup className="mb-0" check>
                        <Input id="invalidCheck67" type="checkbox" required />
                        <Label htmlFor="invalidCheck67" check>{AgreeTerms}</Label>
                    </FormGroup>
                </Col>
            </Row>
        </Form>
    )
}