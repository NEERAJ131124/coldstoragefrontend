import React from 'react'
import { Card, CardBody, Col, Input, Label } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { DisabledOutlineSwitchTitle } from '../../../../../Utils/Constants'
import { defaultTouchspinData, disabledOutlineSwitchSubTitle } from '../../../../../Data/Forms/FormWidgets'

export default function DisabledOutlineSwitch() {
    return (
        <Col md={6}>
            <Card>
                <CommonCardHeader title={DisabledOutlineSwitchTitle} subTitle={disabledOutlineSwitchSubTitle} />
                <CardBody className="common-flex">
                    {defaultTouchspinData.map((data, index) => (
                        <div className="d-flex" key={index}>
                            <div className="flex-grow-1 text-end icon-state switch-outline">
                                <Label className="switch mb-0">
                                    <Input type="checkbox" />
                                    <span className={`switch-state bg-${data}`}></span>
                                </Label>
                            </div>
                        </div>
                    ))}
                </CardBody>
            </Card>
        </Col>
    )
}