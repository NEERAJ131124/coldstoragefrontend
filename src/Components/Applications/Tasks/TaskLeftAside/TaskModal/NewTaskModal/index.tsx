import React, { useState } from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { CheckCircle } from 'react-feather';
import { Btn } from '../../../../../../AbstractElements';
import { NewTaskTitle } from '../../../../../../Utils/Constants';
import NewTaskForm from './NewTaskForm';

export default function NewTaskModal() {
    const [addModal, setAddModal] = useState(false);
    const toggle = () => setAddModal(!addModal);

    return (
        <>
            <Btn color='transparent' block className="badge-light-primary btn-mail w-100" onClick={toggle}><CheckCircle className="me-2" />{NewTaskTitle}</Btn>
            <Modal modalClassName="modal-bookmark" size="lg" isOpen={addModal} toggle={toggle}>
                <ModalHeader toggle={toggle}>{'Add Task'}</ModalHeader>
                <ModalBody>
                    <NewTaskForm setAddModal={setAddModal} toggle={toggle} />
                </ModalBody>
            </Modal>
        </>
    )
}