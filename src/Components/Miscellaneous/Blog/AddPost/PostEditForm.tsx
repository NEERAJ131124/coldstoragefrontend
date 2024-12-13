import React from 'react'
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { Typeahead } from 'react-bootstrap-typeahead'
import SimpleMdeReact from 'react-simplemde-editor'
import { Category, Content, Title, Type } from '../../../../Utils/Constants'
import { dataTypeahead, postEditRadios } from '../../../../Data/Miscellaneous/Blog'

export default function PostEditForm() {
    return (
        <Form className="needs-validation" noValidate>
            <Row>
                <Col sm={12}>
                    <FormGroup>
                        <Label className="mb-2">{Title}:</Label>
                        <Input type='text' placeholder='Post Title' />
                    </FormGroup>
                    <FormGroup>
                        <Label className="mb-2">{Type}: </Label>
                        <div className="m-checkbox-inline">
                            {postEditRadios.map((item) => (
                                <Label htmlFor={`edo-ani${item.id}`}>
                                    <Input className="radio_animated" id={`edo-ani${item.id}`} type="radio" name="rdo-ani" defaultChecked={item.check ? true : false} />
                                    {item.text}
                                </Label>
                            ))}
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <Col>
                            <Label className="mb-2 category-content">{Category}:
                                <Typeahead id="multiple-typeahead" className="mt-2" labelKey="name" multiple options={dataTypeahead} placeholder="Select Your Name" />
                            </Label>
                        </Col>
                    </FormGroup>
                    <div className="email-wrapper">
                        <div className="theme-form">
                            <FormGroup>
                                <Label className="mb-2">{Content}:</Label>
                                <SimpleMdeReact id="editor_container" value='Your Content' options={{ autofocus: true, spellChecker: false }} />
                            </FormGroup>
                        </div>
                    </div>
                </Col>
            </Row>
        </Form>
    )
}