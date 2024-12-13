import React, { FormEvent, useState } from 'react'
import { Col, Form, FormGroup, Input, Label } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Btn, H2, H6, Image, P } from '../AbstractElements';
import { dynamicImage } from '../Utils';
import { CreateAccount, DontHaveAccount, EmailAddress, ForgotPassword, Password, RememberPassword, SignIn, SignInAccount, SignInWith } from '../Utils/Constants';
import SocialLink from './SocialLink';

export default function SignInForm() {
    const navigate = useNavigate();
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState("test123@gmail.com");
    const [password, setPassword] = useState("Test@123");
    const toggle = () => setPasswordVisible(!isPasswordVisible);
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        if (email === "test123@gmail.com" && password === "Test@123") {
            toast.success("Login Success...!");
            navigate(`${process.env.PUBLIC_URL}/dashboard/default`);
            localStorage.setItem("login", JSON.stringify(true));
        } 
        else{
            toast.error("Please Enter valid email or password...!");
        }
    };
    return (
        <div>
            <div>
                <Link className='logo' to={`${process.env.PUBLIC_URL}/dashboard/default`}>
                    <Image className="img-fluid for-light m-auto" src={dynamicImage(`logo/logo1.png`)} alt="looginpage" />
                    <Image className="img-fluid for-dark" src={dynamicImage(`logo/logo-dark.png`)} alt="looginpage" />
                </Link>
            </div>
            <div className="login-main">
                <Form className="theme-form" onSubmit={handleSubmit}>
                    <H2 className="text-center">{SignInAccount}</H2>
                    <P className="text-center">{"Enter your email & password to login"}</P>
                    <FormGroup>
                        <Col><Label>{EmailAddress}</Label></Col>
                        <Input type="email" defaultValue={email} onChange={(event) => setEmail(event.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Col><Label>{Password}</Label></Col>
                        <div className="form-input position-relative">
                            <Input type={isPasswordVisible ? 'text' : 'password'} defaultValue={password} onChange={(event) => setPassword(event.target.value)} name="login[password]" />
                            <div className='show-hide' onClick={toggle}>
                                <span className={!isPasswordVisible ? 'show' : ''}></span>
                            </div>
                        </div>
                    </FormGroup>
                    <FormGroup className="mb-0 checkbox-checked">
                        <FormGroup className="checkbox-solid-info" check>
                            <Input id="checkbox1" type="checkbox" />
                            <Label htmlFor="checkbox1" check>{RememberPassword}</Label>
                        </FormGroup>
                        <Link className="link" to={`${process.env.PUBLIC_URL}/authentication/forget_password`}>{ForgotPassword}</Link>
                        <div className="text-end mt-3">
                            <Btn color='primary' className="w-100" block>{SignIn}</Btn>
                        </div>
                    </FormGroup>
                    <div className="login-social-title"><H6>{SignInWith}</H6></div>
                    <SocialLink />
                    <P className="mt-4 mb-0 text-center">{DontHaveAccount}
                        <Link className="ms-2" to={`${process.env.PUBLIC_URL}/authentication/register_simple`}>{CreateAccount}</Link>
                    </P>
                </Form>
            </div>
        </div>
    )
}