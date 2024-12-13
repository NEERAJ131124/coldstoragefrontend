import React, { FormEvent } from 'react'
import { Col, Form, FormGroup, Input } from 'reactstrap';
import { Search } from 'react-feather';
import { H3 } from '../../../AbstractElements';
import { dynamicImage } from '../../../Utils';

export default function KnowledgeSearch() {
    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    return (
        <Col xs={12} className='position-relative'>
            <div className="knowledgebase-bg b-center bg-size" style={{ backgroundImage: `url(${dynamicImage(`knowledgebase/bg_1.jpg`)})`, backgroundSize: "cover", backgroundPosition: "center", display: "block", }} />
            <div className="knowledgebase-search">
                <div>
                    <H3>{'How Can I help you?'}</H3>
                    <Form className="form-inline" onSubmit={handleSearch}>
                        <FormGroup className="w-100">
                            <Search />
                            <Input className="w-100" type="text" placeholder="Type question here" plaintext />
                        </FormGroup>
                    </Form>
                </div>
            </div>
        </Col>
    )
}