import React, { useState } from 'react'
import { Col, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Btn } from '../../../../../../AbstractElements';
import { Add, Cancel, CategoryName, CreateNewCategory } from '../../../../../../Utils/Constants';
import ToolbarBox from '../Common/ToolbarBox';

export default function NewCategoryModal() {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    return (
        <Col xs={12}>
            <div className="category-buton">
                <Btn className='button-primary' color='primary' onClick={toggle}><i className="me-2 fa-solid fa-plus" /> {CreateNewCategory} </Btn>
            </div>
            <Modal isOpen={modal} toggle={toggle} size="lg">
                <ModalHeader toggle={toggle}>{CreateNewCategory}</ModalHeader>
                <ModalBody className="custom-input">
                    <div className="create-category">
                        <div>
                            <Label>{CategoryName} <span className="text-danger">{"*"}</span></Label>
                            <Input className="m-0" type="text" required />
                            <ToolbarBox paragraph={"Improve product visibility by adding a compelling description."} />
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Btn color="light" className='font-dark' onClick={toggle}>{Cancel}</Btn>
                    <Btn color="primary" onClick={toggle}>{Add}</Btn>
                </ModalFooter>
            </Modal>
        </Col>
    )
}