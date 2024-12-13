import React, { ChangeEvent, useState } from 'react'
import { FormGroup, Input, Label, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { toast } from 'react-toastify';
import { FirstModalProps } from '../../../../../Types/Forms.type';
import { Btn, LI, P, UL } from '../../../../../AbstractElements';
import { modalOneData } from '../../../../../Data/Forms/FormLayout';
import { Cancel, Next } from '../../../../../Utils/Constants';
import SecondModal from './SecondModal';

export default function FirstModal({ toggle, modalOne }: FirstModalProps) {
    const [selectAuthenticator, setSelectAuthenticator] = useState("");
    const [modal2, setModal2] = useState(false);
    const toggle2 = () => setModal2(!modal2);
    const getValue = (event: ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;
        setSelectAuthenticator(value);
    };
    const handleNextButton = () => {
        if (selectAuthenticator !== "") {
            toggle2();
            toggle();
        } else {
            return toast.error("please fill all field after press next button");
        }
    };
    return (
        <>
            <Modal centered isOpen={modalOne} toggle={toggle}>
                <ModalHeader toggle={toggle}>{'Two-factor authentication'}</ModalHeader>
                <ModalBody>
                    <div className="modal-toggle-wrapper">
                        <P>{"To log into your account, youll also need to enter your username, password, and a code that was sent to you through SMS or an app."}</P>
                        <div className="authentication-options">
                            <FormGroup check className="radio radio-primary ps-0">
                                <UL className="radio-wrapper simple-list">
                                    {modalOneData.map((data, index) => (
                                        <LI key={index}>
                                            <Input onChange={getValue} id={data.title} type="radio" name="selectAuthenticatorMethodName" defaultChecked={selectAuthenticator === data.title ? true : false} value={data.title} />
                                            <Label className="mb-0" htmlFor={data.title} check>
                                                <i className={`fa-solid fa-${data.icon}`} />
                                                <span className="d-flex flex-column align-items-start"><span>{data.title}</span><span>{data.description}</span></span>
                                            </Label>
                                        </LI>
                                    ))}
                                </UL>
                            </FormGroup>
                        </div>
                        <Btn color="dark" className="rounded-pill w-100 mt-3" onClick={handleNextButton}>{Next}</Btn>
                        <Btn color='transparent' className="rounded-pill w-100 pb-0 dark-toggle-btn" onClick={toggle}>{Cancel}</Btn>
                    </div>
                </ModalBody>
            </Modal>
            <SecondModal modal2={modal2} toggle2={toggle2} />
        </>
    );
};