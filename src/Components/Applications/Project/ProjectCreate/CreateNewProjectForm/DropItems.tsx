import React from 'react'
import { Col, FormGroup, Input } from 'reactstrap'
import { FixPrice, High, Hourly, Low, Medium, Priority, ProjectType, Urgent } from '../../../../../Utils/Constants'
import { H5 } from '../../../../../AbstractElements'

export default function DropItems() {
    return (
        <>
            <Col sm={4}>
                <FormGroup>
                    <H5 className="f-w-600 mb-2">{ProjectType}</H5>
                    <Input type="select">
                        <option value="Hourly">{Hourly}</option>
                        <option value="Fix Price">{FixPrice} </option>
                    </Input>
                </FormGroup>
            </Col>
            <Col sm={4}>
                <FormGroup>
                    <H5 className="f-w-600 mb-2">{Priority}</H5>
                    <Input type="select">
                        <option>{Low}</option>
                        <option>{Medium}</option>
                        <option>{High}</option>
                        <option>{Urgent}</option>
                    </Input>
                </FormGroup>
            </Col>
        </>
    )
}