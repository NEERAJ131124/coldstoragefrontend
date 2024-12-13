import React, { useState } from 'react'
import { Form, Input, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { SecondModalProps } from '../../../../../Types/Forms.type';
import { Alerts, Btn, Image, P } from '../../../../../AbstractElements';
import { dynamicImage } from '../../../../../Utils';
import { Submit } from '../../../../../Utils/Constants';

export default function SecondModal({ modal2, toggle2 }: SecondModalProps) {
    const [active, setActive] = useState(true);

    return (
        <Modal centered isOpen={modal2} toggle={toggle2}>
            <ModalHeader toggle={toggle2}>{'Scan QR code'}</ModalHeader>
            <ModalBody className="main-qr-code">
                <div className="modal-toggle-wrapper">
                    <P>{"Scan the QR code using an authenticator app and website such as abc authenticator, OTP xyz, or pqr authenticator. You must input the six-digit code it generates below."}</P>
                    <div className="modal-img">
                        <div className="qr-img">
                            <Image src={dynamicImage(`forms/qr-code.png`)} alt="qr-code" />
                        </div>
                        <div className="qr-content">
                            <Alerts color='light-dark' toggle={() => { setActive(false)}} isOpen={active} className='light text-dark border-left-wrapper mb-0'>
                                <i className="fa-solid fa-triangle-exclamation" />
                                <div>
                                    <span>{"If your qr code is not working then enter this code in your input field."}</span>
                                    <span className="f-w-700">{'TYU78DE29OLAAWCVNTYFGESWQ31098QW'}</span>
                                </div>
                            </Alerts>
                        </div>
                    </div>
                    <Form onSubmit={(event) => event.preventDefault()} className="needs-validation" noValidate>
                        <Input type="text" required placeholder="Enter QR Code" />
                    </Form>
                    <Btn color="primary">{Submit}</Btn>
                </div>
            </ModalBody>
        </Modal>
    );
};