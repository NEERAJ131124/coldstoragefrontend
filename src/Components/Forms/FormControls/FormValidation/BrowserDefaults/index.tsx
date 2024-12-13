import React from 'react'
import { Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader';
import { AgreePolicy, BrowserDefaultsTitle, ChooseFile, ConfirmationText, DescriptionLabel, EmailAddress, FirstName, Password, State, Submit } from '../../../../../Utils/Constants';
import { Btn } from '../../../../../AbstractElements';
import RadioPayMethod from '../../../Common/RadioPayMethod';
import { browserDefaultsSubTitle } from '../../../../../Data/Forms/FormControls';

export default function BrowserDefaults() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    return (
        <Col xl={6} className='mb-lg-3'>
            <Card>
                <CommonCardHeader title={BrowserDefaultsTitle} subTitle={browserDefaultsSubTitle} />
                <CardBody className="custom-input form-validation">
                    <Form onSubmit={handleSubmit}>
                        <Row className="g-3">
                            <Col xs={12}>
                                <Label htmlFor="first-name">{FirstName}</Label>
                                <Input id="first-name" type="text" placeholder="First name" required />
                            </Col>
                            <Col xs={12}>
                                <Label htmlFor="exampleFormControlInput1">{EmailAddress}</Label>
                                <Input id="exampleFormControlInput1" type="email" placeholder="pesamof475@saeoil.com" required />
                            </Col>
                            <Col xs={12}>
                                <Col sm={12}><Label htmlFor="inputPassword2">{Password}</Label></Col>
                                <Input id="inputPassword2" type="password" required autoComplete='' />
                            </Col>
                            <Col xs={12}>
                                <Label htmlFor="validationDefault04">{State}</Label>
                                <Input type="select" id="validationDefault04" required>
                                    <option value='' disabled>{'Choose...'}</option>
                                    <option>{'U.K'} </option>
                                    <option>{'Thailand'}</option>
                                    <option>{'India'} </option>
                                    <option>{'U.S'}</option>
                                </Input>
                            </Col>
                            <Col xs={12}>
                                <Label htmlFor="formFile">{ChooseFile}</Label>
                                <Input id="formFile" type="file" required />
                            </Col>
                            <RadioPayMethod colClass='col-12' />
                            <Col xs={12}>
                                <Label htmlFor="exampleFormControlTextarea1" >{DescriptionLabel}</Label>
                                <Input type="textarea" id="exampleFormControlTextarea1" rows="3" />
                            </Col>
                            <Col xs={12} className="checkbox-checked">
                                <Input type="checkbox" id="flexCheckDefault" />
                                <Label htmlFor="flexCheckDefault" check> {AgreePolicy}</Label>
                            </Col>
                            <Col xs={12} className='mt-2'>
                                <FormGroup check switch>
                                    <Input type="checkbox" id="flexSwitchCheckDefault" required />
                                    <Label htmlFor="flexSwitchCheckDefault" check> {ConfirmationText}</Label>
                                </FormGroup>
                            </Col>
                            <Col xs={12} className='mt-2'>
                                <Btn color="primary">{Submit}</Btn>
                            </Col>
                        </Row>
                    </Form>
                </CardBody>
            </Card>
        </Col>
    )
}

