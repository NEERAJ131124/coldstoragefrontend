import React from 'react'
import { Col, FormGroup, Input, Label, Row } from 'reactstrap';
import { ToggleComponentProps } from '../../../../../../Types/LetterBox.type';

export default function ToggleComponent({ ccShow, bccShow }: ToggleComponentProps) {
    return (
        <>
            <FormGroup>
                <Row className={`collapse ${ccShow ? "show" : ""}`} id="collapseCc">
                    <Col sm={2}>
                        <Label className="col-form-label" htmlFor="composeTo"> Cc: </Label>
                    </Col>
                    <Col sm={10}>
                        <Input id="composeTo" type="email" />
                    </Col>
                </Row>
            </FormGroup>
            <FormGroup>
                <Row className={`collapse ${bccShow ? "show" : ""}`} id="collapseBcc">
                    <Col sm={2}>
                        <Label className="col-form-label" htmlFor="composeTo"> Bcc: </Label>
                    </Col>
                    <Col sm={10}>
                        <Input id="composeTo" type="email" />
                    </Col>
                </Row>
            </FormGroup>
        </>
    )
}