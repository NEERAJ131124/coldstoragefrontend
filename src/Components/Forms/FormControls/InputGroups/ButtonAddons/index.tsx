import React from 'react'
import { Card, CardBody, Col, Input, InputGroup } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { ButtonAddonsTitle, Submit } from '../../../../../Utils/Constants'
import { buttonAddonsSubTitle } from '../../../../../Data/Forms/FormControls'
import { Btn } from '../../../../../AbstractElements'

export default function ButtonAddons() {
    return (
        <Col md={6}>
            <Card>
                <CommonCardHeader title={ButtonAddonsTitle} subTitle={buttonAddonsSubTitle} />
                <CardBody className="card-wrapper input-group-wrapper">
                    <InputGroup>
                        <Btn color='secondary' outline id="button-addon1">{'$ 25'}</Btn>
                        <Input type="text" id="button-addon1" />
                    </InputGroup>
                    <InputGroup>
                        <Input type="text" placeholder="Recipient's username" id="button-addon2" />
                        <Btn color='warning' outline id="button-addon2">{Submit}</Btn>
                    </InputGroup>
                    <InputGroup>
                        <Btn color='secondary'><span>&#8364; </span></Btn>
                        <Btn color='warning' className='text-white'>{'0.0114419'}</Btn>
                        <Input type="text" />
                    </InputGroup>
                    <InputGroup>
                        <Input type="text" placeholder="Recipient's username" />
                        <Btn color='secondary'><span>&#8377;</span></Btn>
                        <Btn color='warning' className='text-white'>{'500'}</Btn>
                    </InputGroup>
                </CardBody>
            </Card>
        </Col>
    )
}
