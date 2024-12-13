import React, { useState } from 'react'
import { Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { SubmitHandler, useForm } from 'react-hook-form';
import ReactQuill from 'react-quill';
import { ComposeMessage, SaveDraft, Send } from '../../../../../../Utils/Constants';
import { Btn } from '../../../../../../AbstractElements';
import ToggleComponent from './ToggleComponent';
import { RootState } from '../../../../../../ReduxToolkit/Store';
import { AddNewEmailInterFace } from '../../../../../../Types/LetterBox.type';
import { addNewEmail, setComposeEmail, setEmailValidation } from '../../../../../../ReduxToolkit/Reducers/LetterBoxReducer';

export default function ComposeModal() {
    const [value, setValue] = useState('Enter Your Messages..');
    const [ccShow, setCcShow] = useState(false);
    const [bccShow, setBccShow] = useState(false)
    const { composeEmail, emailValidation } = useSelector((state: RootState) => state.email)
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors }, reset } = useForm<AddNewEmailInterFace>();
    const onSubmit: SubmitHandler<AddNewEmailInterFace> = (data) => {
        dispatch(addNewEmail(data));
        dispatch(setEmailValidation(false));
        dispatch(setComposeEmail(false));
        reset();
    };
    return (
        <Modal isOpen={composeEmail} size="lg" id="compose_mail" >
            <ModalHeader className='fs-5' toggle={() => dispatch(setComposeEmail(false))}> {ComposeMessage} </ModalHeader>
            <ModalBody className="compose-modal">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <FormGroup>
                        <Row>
                            <Col sm={2}>
                                <Label className="col-form-label" htmlFor="composeFrom" check >{'From'} :</Label>
                            </Col>
                            <Col sm={10}>
                                <Input id="composeFrom" type="email" />
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col sm={2}>
                                <Label className="col-form-label" htmlFor="composeTo" check>{'To'} :</Label>
                            </Col>
                            <Col sm={10}>
                                <input className={`form-control ${emailValidation && `${errors.userEmail ? "is-invalid" : "is-valid"}`}`} type="email" {...register("userEmail", { required: true })} autoComplete="off" />
                                <div className="add-bcc">
                                    <div className="d-flex gap-2">
                                        <Btn color="transparent" onClick={() => setCcShow(!ccShow)} > {'Cc'}</Btn>
                                        <Btn color="transparent" onClick={() => setBccShow(!bccShow)}> {'Bcc'} </Btn>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </FormGroup>
                    <ToggleComponent ccShow={ccShow} bccShow={bccShow} />
                    <FormGroup>
                        <Row>
                            <Col sm={2}>
                                <Label className="col-form-label" htmlFor="composeSubject" check >{'Subject'} :</Label>
                            </Col>
                            <Col sm={10}>
                                <input className={`form-control ${emailValidation && `${errors.subject ? "is-invalid" : "is-valid"}`}`} type="textarea" {...register("subject", { required: true })} autoComplete="off" />
                            </Col>
                        </Row>
                    </FormGroup>
                    <div className="toolbar-box">
                        <ReactQuill value={value} onChange={setValue} />
                    </div>
                    <ModalFooter>
                        <Btn color="light" className='font-dark' onClick={() => dispatch(setComposeEmail(false))}>{SaveDraft}</Btn>
                        <Btn color="primary" type='submit' onClick={() => dispatch(setEmailValidation(true))}> {Send} </Btn>
                    </ModalFooter>
                </Form>
            </ModalBody>
        </Modal>
    );
};