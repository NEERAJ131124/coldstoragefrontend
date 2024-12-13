import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Col, Form, FormFeedback, FormGroup, Input, Label, Row } from 'reactstrap';
import { UpdateUserFormProps, UserProps, UserUpdateType } from '../../../../../../Types/Contact.type';
import { setEditData } from '../../../../../../ReduxToolkit/Reducers/ContactReducer';
import { EditMoreInformation, EmailAddress, Href, Name, Phone } from '../../../../../../Utils/Constants';
import { Btn } from '../../../../../../AbstractElements';
import MoreInformationInputs from './MoreInformationInputs';

export default function UpdateUserForm({ editData, userEditCallback }: UpdateUserFormProps) {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const onUpdate = (updatedData: UserUpdateType) => {
        let withImageData = { ...updatedData, avatar: `user/user.png` };
        userEditCallback(false, withImageData);
        dispatch(setEditData(withImageData));
        alert("Contact Update successfully");
    };
    return (
        <div className='contact-editform ps-0'>
            <Form onSubmit={handleSubmit(onUpdate)}>
                <Row className='g-2'>
                    <Col md={12}>
                        <FormGroup className='mt-0'>
                            <Label>{Name}</Label>
                            <Row>
                                <Col sm={6}>
                                    <input type="text" defaultValue={editData.name} className={`form-control ${errors.name ? 'is-invalid' : ''}`} placeholder="First Name" {...register('name', { required: true })} />
                                    {errors.name && (<FormFeedback>{errors.name && ('First name is required')}</FormFeedback>)}
                                </Col>
                                <Col sm={6}>
                                    <input type="text" defaultValue={editData.surname} className={`form-control ${errors.surname ? 'is-invalid' : ''}`} placeholder="Last Name" {...register('surname', { required: true })} />
                                    {errors.surname && (<FormFeedback>{errors.surname && ('Last name is required')}</FormFeedback>)}
                                </Col>
                            </Row>
                        </FormGroup>
                    </Col>
                    <Col md={12}>
                        <FormGroup className='mt-0'>
                            <Label>{EmailAddress}</Label>
                            <input type="email" defaultValue={editData.email} className={`form-control ${errors.email ? 'is-invalid' : ''}`} {...register('email', { required: true })} />
                            {errors.email && (<FormFeedback>{errors.email && ('Please enter your email')}</FormFeedback>)}
                        </FormGroup>
                    </Col>
                    <Col md={12}>
                        <FormGroup className='mt-0'>
                            <Label>{Phone}</Label>
                            <Row className='g-3'>
                                <Col sm={6}>
                                    <input type="number" defaultValue={editData.mobile} className={`form-control ${errors.mobile ? 'is-invalid' : ''}`} {...register('mobile', { required: true })} />
                                    {errors.mobile && (<FormFeedback>{errors.mobile && ('Please enter Mobile number')}</FormFeedback>)}
                                </Col>
                                <Col sm={6}>
                                    <Input type="select">
                                        <option>{'Mobile'}</option>
                                        <option>{'Work'}</option>
                                        <option>{'Others'}</option>
                                    </Input>
                                </Col>
                            </Row>
                        </FormGroup>
                    </Col>
                </Row>
                {show ? (<MoreInformationInputs />) : (
                    <a className="ps-0 edit-information" href={Href} onClick={() => setShow(true)}>{EditMoreInformation}</a>
                )}
                <Btn color='secondary' className='update-contact me-1'>{'Save'}</Btn>
                <Btn color='primary' onClick={() => userEditCallback(false, editData as UserProps)}>{'Cancel'}</Btn>
            </Form>
        </div>
    )
}