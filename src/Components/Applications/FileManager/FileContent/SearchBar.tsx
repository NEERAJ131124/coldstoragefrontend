import React, { ChangeEvent } from 'react'
import { Form, FormGroup, Input } from 'reactstrap';
import { FileSearchBarProps } from '../../../../Types/FileManager.type';

export default function SearchBar({ searchFile, setSearchFile }: FileSearchBarProps) {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setSearchFile(e.target.value);
    };
    return (
        <Form className="form-inline basic-form">
            <FormGroup className="d-flex mb-0">
                <i className="fa-solid fa-magnifying-glass" />
                <Input type="text" placeholder="Search..." plaintext onChange={handleChange} value={searchFile} />
            </FormGroup>
        </Form>
    )
}