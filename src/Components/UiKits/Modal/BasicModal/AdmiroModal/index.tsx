import React, { useState } from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { Btn } from '../../../../../AbstractElements';
import AdmiroModalForm from './AdmiroModalForm';

export default function AdmiroModal() {
    const [modal, setModal] = useState(false);
    const toggle = () => { setModal(!modal); }
    return (
        <>
            <Btn color='primary' className='px-xl-2 px-xxl-3' onClick={toggle}>{'Open modal for Admiro'}</Btn>
            <Modal isOpen={modal} toggle={toggle}>
                <div className="modal-toggle-wrapper social-profile text-start dark-sign-up">
                    <ModalHeader className="justify-content-center border-0">{'Admiro SIGN-UP'}</ModalHeader>
                    <ModalBody>
                        <AdmiroModalForm />
                    </ModalBody>
                </div>
            </Modal>
        </>
    )
}