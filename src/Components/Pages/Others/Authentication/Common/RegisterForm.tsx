import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { LoginFormProp } from '../../../../../Types/Others.type';
import CommonLogo from './CommonLogo';
import { Btn, H2, P } from '../../../../../AbstractElements';
import { Agreewith, CreateAccount, CreateYourAccount, EmailAddress, Href, Password, SignIn, YourName } from '../../../../../Utils/Constants';
import SocialLinks from './SocialLinks';

export default function RegisterForm({ logoClass }: LoginFormProp) {
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const toggle = () => setPasswordVisible(!isPasswordVisible);
    const [formData, setFormData] = useState({ name: '', lastName: '', email: '', password: '', checkbox1: false, });
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { id, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [id]: type === 'checkbox' ? checked : value,
        });
    };
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormData({ name: '', lastName: '', email: '', password: '', checkbox1: false, });
    };
    return (
        <div>
            <div>
                <CommonLogo logoClass={logoClass} />
            </div>
            <div className="login-main">
                <Form className="theme-form" onSubmit={handleSubmit}>
                    <H2 className="text-center">{CreateYourAccount}</H2>
                    <P className="text-center">{"Enter your personal details to create account"}</P>
                    <FormGroup>
                        <Col><Label className='pt-0'>{YourName}</Label></Col>
                        <Row className='g-2'>
                            <Col xs={6}>
                                <Input type='text' id="name" required placeholder='First name' value={formData.name} onChange={handleInputChange} />
                            </Col>
                            <Col xs={6}>
                                <Input type='text' id="lastName" required placeholder='Last name' value={formData.lastName} onChange={handleInputChange} />
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Col><Label>{EmailAddress}</Label></Col>
                        <Input type='email' id="email" required placeholder='Test@gmail.com' value={formData.email} onChange={handleInputChange} />
                    </FormGroup>
                    <FormGroup>
                        <Col><Label>{Password}</Label></Col>
                        <div className="form-input position-relative">
                            <Input type={isPasswordVisible ? 'text' : 'password'} id="password" name="login[password]" required placeholder="*********" value={formData.password} onChange={handleInputChange} />
                            <div className='show-hide' onClick={toggle}>
                                <span className={!isPasswordVisible ? 'show' : ''}></span>
                            </div>
                        </div>
                    </FormGroup>
                    <FormGroup className='mb-0 checkbox-checked'>
                        <FormGroup className='checkbox-solid-info' check>
                            <Input id='checkbox1' type='checkbox' checked={formData.checkbox1} onChange={handleInputChange} />
                            <Label className='text-muted' htmlFor='checkbox1' check>{Agreewith}</Label>
                            <a className='ms-3' href={Href}>{'Privacy Policy'}</a>
                        </FormGroup>
                        <Btn color='primary' className='w-100 mt-3' block>{CreateAccount}</Btn>
                    </FormGroup>
                    <SocialLinks logtext={"Already have an account?"} btntext={SignIn} />
                </Form>
            </div>
        </div>
    )
}