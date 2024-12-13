import React from 'react'
import { Card, CardBody, Col, Input, Label } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { Checked, Disabled, Radio, RadioToggleButtonsTitle } from '../../../../../Utils/Constants'
import { radioToggleButtonsSubTitle } from '../../../../../Data/Forms/FormControls'

export default function RadioToggleButtons() {
    return (
        <Col md={6} className='mb-lg-3'>
            <Card>
                <CommonCardHeader title={RadioToggleButtonsTitle} subTitle={radioToggleButtonsSubTitle} />
                <CardBody className="common-flex main-radio-toggle">
                    <Input className="btn-check radio-light-secondary" id="option1" type="radio" name="options" defaultChecked />
                    <Label className="btn list-light-secondary" htmlFor="option1"> {Checked}</Label>
                    <Input className="btn-check radio-light-secondary" id="option2" type="radio" name="options" />
                    <Label className="btn list-light-secondary" htmlFor="option2">  {Radio}</Label>
                    <Input className="btn-check radio-light-secondary" id="option3" type="radio" name="options" disabled />
                    <Label className="btn list-light-secondary" htmlFor="option3">{Disabled}</Label>
                    <Input className="btn-check radio-light-secondary" id="option4" type="radio" name="options" />
                    <Label className="btn list-light-secondary" htmlFor="option4"> {Radio} </Label>
                </CardBody>
            </Card>
        </Col>
    )
}