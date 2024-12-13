import React from 'react'
import { Form, FormGroup, Input, InputGroup, InputGroupText, Label } from 'reactstrap'
import { FlatStyle, JointAddon, LeftAddon, LeftAndRightAddon, RaiseStyle, RightAddon } from '../../../../../Utils/Constants'

export default function VariationAddonsFormContent() {
    return (
        <Form>
            <FormGroup className='m-form__group'>
                <Label>{LeftAddon}</Label>
                <InputGroup>
                    <InputGroupText className="list-light-primary">
                        <i className="fa-solid fa-pencil text-primary" />
                    </InputGroupText>
                    <Input type="text" placeholder="Email" />
                </InputGroup>
            </FormGroup>
            <FormGroup>
                <Label>{RightAddon}</Label>
                <InputGroup>
                    <Input type="text" placeholder="Recipient's username" />
                    <InputGroupText className="list-light-danger">
                        <i className="fa-solid fa-phone text-danger" />
                    </InputGroupText>
                </InputGroup>
            </FormGroup>
            <FormGroup>
                <Label>{JointAddon}</Label>
                <InputGroup>
                    <InputGroupText className="list-light-primary"><i className="fa-solid fa-link-slash text-primary" /></InputGroupText>
                    <InputGroupText>{'0.00'}</InputGroupText>
                    <Input type="text" />
                </InputGroup>
            </FormGroup>
            <FormGroup>
                <Label>{LeftAndRightAddon}</Label>
                <InputGroup className="mb-3">
                    <InputGroupText className="list-light-danger"><i className="fa-solid fa-magnifying-glass-minus text-danger" /></InputGroupText>
                    <Input type="text" />
                    <InputGroupText className="list-light-danger"><i className="fa-solid fa-magnifying-glass-plus text-danger" /></InputGroupText>
                </InputGroup>
            </FormGroup>
            <FormGroup className="input-group-square">
                <Label>{FlatStyle}</Label>
                <InputGroup>
                    <InputGroupText className="list-light-danger"><i className="fa-solid fa-credit-card text-danger" /></InputGroupText>
                    <Input type="text" />
                </InputGroup>
            </FormGroup>
            <FormGroup className="input-group-square">
                <Label>{RaiseStyle}</Label>
                <InputGroup>
                    <InputGroupText className="list-light-primary"><i className="fa-solid fa-download text-primary" /></InputGroupText>
                    <Input className="input-group-air" type="text" placeholder="https://www.example.com" />
                </InputGroup>
            </FormGroup>
            <div>
                <Label>{LeftAndRightAddon}</Label>
                <InputGroup className="pill-input-group">
                    <InputGroupText className="list-light-danger"><i className="fa-solid fa-copy text-danger" /></InputGroupText>
                    <Input type="text" /><InputGroupText className="list-light-danger"><i className="fa-solid fa-magnifying-glass text-danger" /></InputGroupText>
                </InputGroup>
            </div>
        </Form>
    )
}