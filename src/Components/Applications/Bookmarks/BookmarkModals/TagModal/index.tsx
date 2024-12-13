import React from 'react'
import { Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, Row } from 'reactstrap'
import { TagModalProps } from '../../../../../Types/Bookmark.type'
import { Cancel, CreateTag, Save, TagColor, TagName } from '../../../../../Utils/Constants'
import { Btn } from '../../../../../AbstractElements'

export default function TagModal({ showModal, modalToggle }: TagModalProps) {
    return (
        <Modal modalClassName="modal-bookmark" size="lg" isOpen={showModal} toggle={modalToggle}>
            <ModalHeader toggle={modalToggle}>{CreateTag}</ModalHeader>
            <ModalBody>
                <Form className="form-bookmark needs-validation" noValidate>
                    <Row className="g-2">
                        <Col md={12}>
                            <FormGroup className='mt-0'>
                                <Label>{TagName}</Label>
                                <Input type="text" required />
                            </FormGroup>
                        </Col>
                        <Col md={12}>
                            <FormGroup className='mt-0'>
                                <Label>{TagColor}</Label>
                                <Input className="form-color d-block" type="color" defaultValue='#308e87' required />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Btn color='secondary' className='me-2' onClick={modalToggle}>{Save}</Btn>
                    <Btn color='primary' onClick={modalToggle}>{Cancel}</Btn>
                </Form>
            </ModalBody>
        </Modal>
    )
}