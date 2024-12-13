import React, { useState } from 'react'
import { Col, Form, Input, Row } from 'reactstrap'
import { Btn, H4, Image } from '../../../../../AbstractElements'
import { Href, VerificationCodeTitle, Verify } from '../../../../../Utils/Constants'
import { dynamicImage, dynamicNumber } from '../../../../../Utils'

export default function VerificationCode() {
    const [val, setVal] = useState(Array(6).fill(undefined));

    const handleChange = (e: string, index: number) => {
        if (e.length > 1) return;
        else {
            const tempt = [...val];
            tempt[index] = parseInt(e);
            setVal(tempt);
        }
    };
    return (
        <Col md={6} className='mt-3 mt-md-0'>
            <div className="card-wrapper border rounded-3 h-100">
                <div className="authenticate">
                    <H4>{VerificationCodeTitle}</H4>
                    <Image className="img-fluid" src={dynamicImage(`forms/authenticate.png`)} alt="authenticate" />
                    <span>{"We've sent a verification code to"}</span>
                    <span>{'+91********70'}</span>
                    <Form onSubmit={(event) => event.preventDefault()}>
                        <Row>
                            <Col><H4>{'Your OTP Code here:'}</H4></Col>
                            <Col className="otp-generate">
                                {dynamicNumber(6).map((data, index) => (
                                    <Input key={data} className="code-input" type="number" value={val[index]} onChange={(e) => handleChange(e.target.value, index)}/>
                                ))}
                            </Col>
                            <Col>
                                <Btn color="primary" className="w-100">{Verify}</Btn>
                            </Col>
                            <div>
                                <span>{"Not received your code?"}</span>
                                <span>
                                    <a className="font-primary" href={Href}>{'Resend'} </a>{'OR'}<a className="font-primary" href={Href}> {'Call'}</a>
                                </span>
                            </div>
                        </Row>
                    </Form>
                </div>
            </div>
        </Col>
    )
}