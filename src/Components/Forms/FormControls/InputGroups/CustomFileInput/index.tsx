import React from 'react'
import { Card, CardBody, Col, Input, InputGroup, InputGroupText } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { CustomFileInputTitle, Submit, Upload, Verify } from '../../../../../Utils/Constants'
import { customFileInputSubTitle } from '../../../../../Data/Forms/FormControls'
import { Btn } from '../../../../../AbstractElements'

export default function CustomFileInput() {
    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader title={CustomFileInputTitle} subTitle={customFileInputSubTitle} />
                <CardBody className="main-custom-form input-group-wrapper custom-input-file">
                    <InputGroup>
                        <InputGroupText for="inputGroupFile01">{Upload}</InputGroupText>
                        <Input id="inputGroupFile01" type="file" />
                    </InputGroup>
                    <InputGroup>
                        <Input id="inputGroupFile02" type="file" />
                        <InputGroupText for="inputGroupFile02">{Verify}</InputGroupText>
                    </InputGroup>
                    <InputGroup>
                        <Btn color='success' id="inputGroupFileAddon03" outline><i className="fa-solid fa-file" /></Btn>
                        <Input id="inputGroupFile03" type="file" />
                    </InputGroup>
                    <InputGroup>
                        <Input id="inputGroupFile04" type="file" />
                        <Btn color='success' id="inputGroupFileAddon04" outline>{Submit}</Btn>
                    </InputGroup>
                </CardBody>
            </Card>
        </Col>
    )
}