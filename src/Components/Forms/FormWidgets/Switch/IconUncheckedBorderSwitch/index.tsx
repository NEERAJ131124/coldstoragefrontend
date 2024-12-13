import React from 'react'
import { Card, CardBody, Col, Input, Label } from 'reactstrap'
import { iconsUncheckedBordersSwitchData } from '../../../../../Data/Forms/FormWidgets'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'

export default function IconUncheckedBorderSwitch() {
    return (
        <>
            {iconsUncheckedBordersSwitchData.map((data) => (
                <Col xl={4} className={data.id !== 3 ? 'col-sm-6' : ""} key={data.id}>
                    <Card>
                        <CommonCardHeader title={data.title} subTitle={data.subTitle} />
                        <CardBody className="common-flex flex-column switch-wrapper">
                            {data.child.map((item) => (
                                <div className="d-flex" key={item.id}>
                                    <div className={item.mediaBodyClass ? item.mediaBodyClass : ''}>
                                        <Label className="switch mb-0">
                                            <Input type="checkbox" defaultChecked />
                                            <span className={`switch-state bg-${item.color}`}></span>
                                        </Label>
                                    </div>
                                    <Label className="col-form-label ms-3">{item.labelText}</Label>
                                </div>
                            ))}
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </>
    )
}