import React, { useState } from 'react'
import { Btn } from '../../../../../../AbstractElements';
import { Col, Form, FormGroup, Input, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';

export default function CategoryModal() {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    return (
        <>
            <Btn color='transparent' className="btn-category" onClick={toggle}><span className="f-w-600 title">{'+ Add Category'}</span></Btn>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>{'Add Category'}</ModalHeader>
                <ModalBody>
                    <Form className="form-bookmark">
                        <Row className="g-2">
                            <Col md={12}>
                                <FormGroup>
                                    <Input type="text" required placeholder="Enter category name" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Btn color='secondary' className='me-2' onClick={toggle}>{'Save'}</Btn>
                        <Btn color='primary' onClick={toggle}>{'Cancel'}</Btn>
                    </Form>
                </ModalBody>
            </Modal>
        </>
    )
}