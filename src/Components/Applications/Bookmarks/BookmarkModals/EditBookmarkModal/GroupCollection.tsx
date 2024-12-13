import React from 'react'
import { Col, FormGroup, Input, Label } from 'reactstrap'
import { Collection, Group } from '../../../../../Utils/Constants'

export default function GroupCollection() {
    return (
        <>
            <Col md={6}>
                <FormGroup className='mt-0'>
                    <Label>{Group}</Label>
                    <Input type='select'>
                        <option value="bookmark">{'My Bookmarks'}</option>
                    </Input>
                </FormGroup>
            </Col>
            <Col md={6}>
                <FormGroup className='mt-0'>
                    <Label>{Collection}</Label>
                    <Input type='select'>
                        <option value="general">{'General'}</option>
                        <option value="fs">{'fs'}</option>
                    </Input>
                </FormGroup>
            </Col>
        </>
    )
}