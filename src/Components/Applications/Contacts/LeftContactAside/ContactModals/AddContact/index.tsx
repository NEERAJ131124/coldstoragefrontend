import React, { useState } from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { Users } from 'react-feather';
import { Btn } from '../../../../../../AbstractElements';
import AddContactForm from './AddContactForm';

export default function AddContact() {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    return (
        <>
            <Btn color='transparent' block className="button-primary btn-mail w-100" onClick={toggle}>
                <Users className="me-2" />{'New Contacts'}
            </Btn>
            <Modal modalClassName="modal-bookmark" isOpen={modal} toggle={toggle} size="lg">
                <ModalHeader toggle={toggle}>{'Add Contact'}</ModalHeader>
                <ModalBody>
                    <AddContactForm setModal={setModal} toggle={toggle} />
                </ModalBody>
            </Modal>
        </>
    )
}