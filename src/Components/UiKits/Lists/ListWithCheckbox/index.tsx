import React from 'react'
import { Card, CardBody, Col, Input, Label } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { ListWithCheckboxTitle } from '../../../../Utils/Constants'
import { listCheckboxData, listWithCheckboxSubTitle } from '../../../../Data/UiKits/Lists'
import { LI, UL } from '../../../../AbstractElements'

export default function ListWithCheckbox() {
    return (
        <Col xxl={4} md={6}>
            <Card>
                <CommonCardHeader title={ListWithCheckboxTitle} subTitle={listWithCheckboxSubTitle} />
                <CardBody>
                    <UL>
                        {listCheckboxData && listCheckboxData.map((item, index) => (
                            <LI key={index}>
                                <Input className={`me-2 checkbox-${item.class} ${index === 0 ? 'active' : ''}`} id={item.idFor} type="checkbox" />
                                <Label className={`mb-0 text-${item.class}`} htmlFor={item.idFor} check>{item.text}</Label>
                            </LI>
                        ))}
                    </UL>
                </CardBody>
            </Card>
        </Col>
    )
}

