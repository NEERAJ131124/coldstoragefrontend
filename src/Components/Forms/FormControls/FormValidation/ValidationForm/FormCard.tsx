import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { FormDataTypes } from '../../../../../Types/Forms.type';
import { Col, Form, FormFeedback, FormGroup, Input, Label, Row } from 'reactstrap';
import { ChooseFile, City, DescriptionLabel, FirstName, LooksGood, Password, SubmitForm, Zip } from '../../../../../Utils/Constants';
import DropItem from '../../../Common/DropItem';
import RadioPayMethod from '../../../Common/RadioPayMethod';
import { Btn } from '../../../../../AbstractElements';
import PixelstrapSelect from './PixelstrapSelect';

export default function FormCard() {
    const [selectedOption, setSelectedOption] = useState<null | string>(null);
    const [validate, setValidate] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<FormDataTypes>();
    const onSubmit = () => {
        setValidate(true);
    };

    return (
        <Form className="needs-validation custom-input validation-forms" onSubmit={handleSubmit(onSubmit)}>
            <Row className="g-3">
                <Col xs={12}>
                    <Label>{FirstName}</Label>
                    <input type="text" className={`form-control ${errors.firstName ? 'is-invalid' : ''} ${validate && !errors.firstName ? 'is-valid' : ''}`} placeholder="Mark" {...register("firstName", { required: "Please enter your valid name" })} />
                    {errors.firstName && (<FormFeedback>{errors.firstName.message}</FormFeedback>)}
                    {validate && !errors.firstName && <FormFeedback valid>{LooksGood}</FormFeedback>}
                </Col>
                <Col xs={12}>
                    <Col sm={12}><Label className='col-form-label'>{Password}</Label></Col>
                    <input type="password" className={`form-control ${errors.password ? 'is-invalid' : ''} ${validate && !errors.password ? 'is-valid' : ''}`} {...register("password", { required: "Please enter your valid password", })} autoComplete='' />
                    {errors.password && (<FormFeedback>{errors.password.message}</FormFeedback>)}
                </Col>
                <DropItem validate={true} colClass='col-12' className={`${validate && !selectedOption ? "is-invalid" : ""} ${validate && selectedOption ? 'is-valid' : ''}`} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
                <Col md={6}>
                    <Label>{City}</Label>
                    <input type="text" className={`form-control ${errors.city ? 'is-invalid' : ''} ${validate && !errors.city ? 'is-valid' : ''}`} {...register("city", { required: "Please provide a valid city" })} />
                    {errors.city && (<FormFeedback>{errors.city.message}</FormFeedback>)}
                    {validate && !errors.city && <FormFeedback valid>{LooksGood}</FormFeedback>}
                </Col>
                <Col md={6}>
                    <Label>{Zip}</Label>
                    <input type="text" className={`form-control ${errors.zip ? 'is-invalid' : ''} ${validate && !errors.zip ? 'is-valid' : ''}`} {...register('zip', { required: 'Please provide a valid zip' })} />
                    {errors.zip && <FormFeedback>{errors.zip.message}</FormFeedback>}
                    {validate && !errors.zip && <FormFeedback valid>{LooksGood}</FormFeedback>}
                </Col>
                <RadioPayMethod colClass='col-12' />
                <PixelstrapSelect />
                <Col xs={12}>
                    <Label>{ChooseFile}</Label>
                    <input type="file" className={`form-control ${errors.file ? 'is-invalid' : ''} ${validate && !errors.file ? 'is-valid' : ''}`} {...register('file', { required: 'Invalid form file selected' })} />
                    {errors.file && <FormFeedback>{errors.file.message}</FormFeedback>}
                    {validate && !errors.file && <FormFeedback valid>{LooksGood}</FormFeedback>}
                </Col>
                <Col xs={12}>
                    <Label>{DescriptionLabel}</Label>
                    <textarea className={`form-control ${errors.description ? 'is-invalid' : ''} ${validate && !errors.description ? 'is-valid' : ''}`} {...register('description', { required: 'Please enter a message in the textarea.' })} />
                    {errors.description && <FormFeedback>{errors.description.message}</FormFeedback>}
                    {validate && !errors.description && <FormFeedback valid>{LooksGood}</FormFeedback>}
                </Col>
                <Col xs={12}>
                    <FormGroup check>
                        <Input type="checkbox" id="invalidCheck" required />
                        <Label htmlFor="invalidCheck" check>{'Agree to terms and conditions'}</Label>
                    </FormGroup>
                </Col>
                <Col xs={12}>
                    <Btn color="primary">{SubmitForm}</Btn>
                </Col>
            </Row>
        </Form>
    )
}