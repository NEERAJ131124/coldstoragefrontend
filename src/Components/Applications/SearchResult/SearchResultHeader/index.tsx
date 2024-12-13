import React from 'react'
import { CardHeader, Form, Input, InputGroup, InputGroupText } from 'reactstrap'
import { Btn } from '../../../../AbstractElements'

export default function SearchResultHeader() {
    return (
        <CardHeader>
            <Form className="theme-form" onSubmit={(e) => e.preventDefault()}>
                <InputGroup className="m-0 flex-nowrap">
                    <Input type="search" placeholder="Pixelstrap .." plaintext />
                    <Btn color='primary'>
                        <InputGroupText className='bg-primary border-0 p-0'>{'Search'}</InputGroupText>
                    </Btn>
                </InputGroup>
            </Form>
        </CardHeader>
    )
}