import React from 'react'
import { Btn, H5 } from '../../../../../AbstractElements'
import { Github, SocialLinks, Submit, Twitter } from '../../../../../Utils/Constants'
import { Col, Input, InputGroup, Label, Row } from 'reactstrap'
import { StudentValidationFormProp } from '../../../../../Types/Forms.type'

export default function SocialLinksForm({ formData, updateFormData }: StudentValidationFormProp) {
    return (
        <>
            <H5 className="mb-2">{SocialLinks}</H5>
            <Row className="g-3">
                <Col xs={6}>
                    <Label>{Twitter}</Label>
                    <Input name="twitterUrl" onChange={updateFormData} value={formData.twitterUrl} type="url" placeholder="https://twitter.com" />
                </Col>
                <Col xs={6}>
                    <Label>{Github}</Label>
                    <Input name="gitHubUrl" onChange={updateFormData} value={formData.gitHubUrl} type="url" placeholder="https:/github.com" />
                </Col>
                <Col xs={12}>
                    <InputGroup>
                        <Input name="studentFile" onChange={updateFormData} type="file" />
                        <Btn color="secondary" outline>{Submit}</Btn>
                    </InputGroup>
                </Col>
                <Col xs={12}>
                    <Input type="select" onChange={updateFormData} name="positions">
                        <option value={""}>{'Positions'}</option>
                        <option value={'1'}>{'Web Designer'}</option>
                        <option value={"2"}>{'Software Engineer'}</option>
                        <option value={"3"}>{'UI/UX Designer '}</option>
                        <option value={"4"}>{'Web Developer'}</option>
                    </Input>
                </Col>
                <Col xs={12}>
                    <Label>{'Why do you want to take this position?'}</Label>
                    <Input type="textarea" name="positionQuestion" onChange={updateFormData} id="questionsTextarea" rows={2} />
                </Col>
            </Row>
        </>
    )
}