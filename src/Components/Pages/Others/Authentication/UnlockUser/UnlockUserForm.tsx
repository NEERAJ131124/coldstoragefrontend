import React, { useState } from 'react'
import { Col, Form, FormGroup, Input, Label, } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Btn, H2, P } from '../../../../../AbstractElements';
import { EnterYourPassword, RememberPassword, SignIn, Unlock } from '../../../../../Utils/Constants';
import { UnlockIcon } from '../../Common/CommonPageIcon';

export default function UnlockUserForm() {
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const toggle = () => setPasswordVisible(!isPasswordVisible);
    const [formData, setFormData] = useState({ password: '', checkbox1: false, });
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { id, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: type === 'checkbox' ? checked : value,
        }));
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setFormData({ password: '', checkbox1: false, });
    };

    return (
        <Form className="theme-form" onSubmit={handleSubmit}>
            <H2 className="mb-0">{Unlock}</H2>
            <FormGroup><UnlockIcon /></FormGroup>
            <FormGroup>
                <Col><Label>{EnterYourPassword}</Label></Col>
                <div className="form-input position-relative">
                    <Input type={isPasswordVisible ? 'text' : 'password'} id="password" name="login[password]" required placeholder="*********" value={formData.password} onChange={handleInputChange} />
                    <div className='show-hide' onClick={toggle}><span className={!isPasswordVisible ? 'show' : ''}></span></div>
                </div>
            </FormGroup>
            <FormGroup className="mb-0 checkbox-checked">
                <FormGroup className="checkbox-solid-info" check>
                    <Input id="solid6" type="checkbox" checked={formData.checkbox1} onChange={handleInputChange} />
                    <Label htmlFor="solid6" check>{RememberPassword}</Label>
                </FormGroup>
                <Btn color='primary' className="w-100 mt-3" block>{Unlock}</Btn>
            </FormGroup>
            <P className="mt-4 mb-0">{"Already have an account?"}
                <Link to={`${process.env.PUBLIC_URL}/authentication/login_simple`} className='ms-2'>{SignIn}</Link>
            </P>
        </Form>
    )
}