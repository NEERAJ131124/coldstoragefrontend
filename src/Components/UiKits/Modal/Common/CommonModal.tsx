import React from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { CommonModalProps } from '../../../../Types/UiKits.type'
import { Btn } from '../../../../AbstractElements'

export default function CommonModal({ modalData, children }: CommonModalProps) {
    return (
        <Modal className={modalData.class} isOpen={modalData.isOpen} toggle={modalData.toggler} centered={modalData.center} size={modalData.size}>
            {modalData.header && <ModalHeader toggle={modalData.toggler}>
                {modalData.title}
            </ModalHeader>}
            <ModalBody className={modalData.bodyClass}>
                {children}
            </ModalBody>
            {modalData.footer && <ModalFooter>
                <Btn color='secondary' onClick={modalData.toggler}>{'Close'}</Btn>
                <Btn color='primary' onClick={modalData.toggler}>{modalData.button ? modalData.button : 'Save changes'}</Btn>
            </ModalFooter>}
        </Modal>
    )
}