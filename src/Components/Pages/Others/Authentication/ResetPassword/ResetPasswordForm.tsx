import React, { useState } from 'react'
import { Col, Form, FormGroup, Input, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Btn, H2, P } from '../../../../../AbstractElements';
import { CreateAccount, ResetYourPassword, Done, NewPassword, RememberPassword, RetypePassword } from '../../../../../Utils/Constants';

export default function ResetPasswordForm() {
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
                <Col><Label>{NewPassword}</Label></Col>
                <div className="form-input position-relative">
                    <Input type={isPasswordVisible ? 'text' : 'password'} id="password" name="login[password]" required placeholder="*********" />
                    <div className='show-hide' onClick={toggle}>
                        <span className={!isPasswordVisible ? 'show' : ''} />
                    </div>
                </div>
            </FormGroup>
            <FormGroup>
                <Col><Label>{RetypePassword}</Label></Col>
                <div className="form-input position-relative">
                    <Input type={isPasswordVisible ? 'text' : 'password'} id="password" name="login[password]" required placeholder="*********" />
                    <div className='show-hide' onClick={toggle}>
                        <span className={!isPasswordVisible ? 'show' : ''} />
                    </div>
                </div>
            </FormGroup>
            <FormGroup className="mb-0 checkbox-checked">
                <FormGroup className="checkbox-solid-info" check>
                    <Input id="solid6" type="checkbox" defaultChecked={formData.checkbox1 ? true : false} onChange={handleInputChange} />
                    <Label htmlFor="solid6" check>{RememberPassword}</Label>
                </FormGroup>
                <Btn color='primary' className="w-100 mt-3" block>{Done}</Btn>
            </FormGroup>
            <P className="mt-4 mb-0">{"Don't have account?"}
                <Link className="ms-2" to={`${process.env.PUBLIC_URL}/authentication/register_simple`}>{CreateAccount}</Link>
            </P>
        </Form>
    )
}