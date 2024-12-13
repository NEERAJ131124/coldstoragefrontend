import React from 'react'
import { NewBookmarkModalProps } from '../../../../../Types/Bookmark.type'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import { AddBookmark } from '../../../../../Utils/Constants'
import ModalForm from './ModalForm'

export default function NewBookmarkModal({ showModal, modalToggle, addCallback }: NewBookmarkModalProps) {
    return (
        <Modal modalClassName='modal-bookmark' size="lg" isOpen={showModal} toggle={modalToggle}>
            <ModalHeader toggle={modalToggle}>{AddBookmark}</ModalHeader>
            <ModalBody>
                <ModalForm addCallback={addCallback} modalToggle={modalToggle} />
            </ModalBody>
        </Modal>
    )
}