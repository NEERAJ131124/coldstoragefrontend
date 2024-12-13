import React, { useState } from 'react'
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Btn, H2, H6, P } from '../../../../../AbstractElements';
import { CreateYourPassword, Done, EnterOtp, EnterYourMobileNumber, Href, NewPassword, RememberPassword, Resend, ResetYourPassword, RetypePassword, Send, SignIn } from '../../../../../Utils/Constants';

export default function ForgetPasswordForm() {
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const [formData, setFormData] = useState({ checkbox1: false });
    const toggle = () => setPasswordVisible(!isPasswordVisible);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: type === 'checkbox' ? checked : value,
        }));
    };
    return (
        <Form className="theme-form" onSubmit={handleSubmit}>
            <H2>{ResetYourPassword}</H2>
            <FormGroup>
                <Col><Label>{EnterYourMobileNumber}</Label></Col>
                <Row>
                    <Col xs={4} sm={3}><Input className="mb-1" type="text" defaultValue="+ 91" /></Col>
                    <Col xs={8} sm={9}><Input className="mb-1" type="tel" defaultValue="000-000-0000" /></Col>
                    <Col xs={12}>
                        <div className="text-end">
                            <Btn color='primary' block className="m-t-10">{Send}</Btn>
                        </div>
                    </Col>
                </Row>
            </FormGroup>
            <div className="mt-4 mb-4">
                <span className="reset-password-link">{"If don't receive OTP? "}
                    <a className="btn-link text-danger" href={Href}> {Resend}</a>
                </span>
            </div>
            <FormGroup>
                <Col><Label className="pt-0">{EnterOtp}</Label></Col>
                <Row>
                    <Col><Input className="text-center opt-text" type="text" defaultValue="00" maxLength={2} /></Col>
                    <Col><Input className="text-center opt-text" type="text" defaultValue="00" maxLength={2} /></Col>
                    <Col><Input className="text-center opt-text" type="text" defaultValue="00" maxLength={2} /></Col>
                </Row>
            </FormGroup>
            <H6 className="mt-4 f-w-700">{CreateYourPassword}</H6>
            <FormGroup>
                <Col><Label>{NewPassword}</Label></Col>
                <div className="form-input position-relative">
                    <Input type={isPasswordVisible ? 'text' : 'password'} id="password" name="login[password]" required placeholder="*********" />
                    <div className='show-hide' onClick={toggle}>
                        <span className={!isPasswordVisible ? 'show' : ''}></span>
                    </div>
                </div>
            </FormGroup>
            <FormGroup>
                <Col><Label>{RetypePassword}</Label></Col>
                <Input type={isPasswordVisible ? 'text' : 'password'} id="password" name="login[password]" required placeholder="*********" />
                <div className='show-hide' onClick={toggle}></div>
            </FormGroup>
            <FormGroup className="mb-0 checkbox-checked">
                <FormGroup className="checkbox-solid-info" check>
                    <Input id="solid6" type="checkbox" defaultChecked={formData.checkbox1 ? true : false} onChange={handleInputChange} />
                    <Label htmlFor="solid6" check>{RememberPassword}</Label>
                </FormGroup>
                <Btn color='primary' className="w-100 mt-3" block>{Done}</Btn>
            </FormGroup>
            <P className="mt-4 mb-0 text-center">{"Already have an account?"}
                <Link to={`${process.env.PUBLIC_URL}/authentication/login_simple`} className='ms-2'>{SignIn}</Link>
            </P>
        </Form>
    )
}