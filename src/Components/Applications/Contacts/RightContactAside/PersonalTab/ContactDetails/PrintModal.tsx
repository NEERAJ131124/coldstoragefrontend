import React, { useRef } from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import ReactToPrint from "react-to-print";
import { PrintModalProps } from '../../../../../../Types/Contact.type';
import { PrintPreview } from '../../../../../../Utils/Constants';
import { Btn, H4, H5, Image, P } from '../../../../../../AbstractElements';
import { dynamicImage } from '../../../../../../Utils';

export default function PrintModal({ printModal, selectedUser, toggleCallback }: PrintModalProps) {
    const componentRef = useRef<HTMLDivElement>(null);
    const printModalToggle = () => {
        toggleCallback(false);
    };
    return (
        <Modal className="modal-bookmark" isOpen={printModal} toggle={printModalToggle} centered>
            <ModalHeader toggle={printModalToggle}>{PrintPreview}</ModalHeader>
            <ModalBody className="list-persons">
                <div className="profile-mail pt-0" ref={componentRef}>
                    <div className="common-flex align-items-center">
                        <Image className="img-fluid rounded-circle" src={dynamicImage(selectedUser.avatar)} alt="" />
                        <div className="flex-grow-1 mt-0">
                            <H4>
                                <span>{selectedUser.name}</span>
                                <span>{selectedUser.surname}</span>
                            </H4>
                            <P>{selectedUser.email}</P>
                        </div>
                    </div>
                    <div className="email-general">
                        <H5>{'General'}</H5>
                        <P>{'Email Address'} :<span className="font-primary" id="mailadd">{selectedUser.email}</span></P>
                    </div>
                </div>
                <ReactToPrint
                    trigger={() => (
                        <Btn color='success' className='me-1'>{'Print'}</Btn>
                    )}
                    content={() => componentRef.current}
                />
                <Btn color='primary' onClick={printModalToggle}>{'Cancel'}</Btn>
            </ModalBody>
        </Modal>
    )
}