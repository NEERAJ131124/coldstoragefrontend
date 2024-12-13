import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { IconAccordionTitle } from '../../../../Utils/Constants'
import { iconAccordionSubTitle } from '../../../../Data/UiKits/Accordion'
import IconDemo from './IconDemo'

export default function IconAccordion() {
    return (
        <Col xl={6} sm={12}>
            <Card>
                <CommonCardHeader title={IconAccordionTitle} subTitle={iconAccordionSubTitle} />
                <CardBody className="accordion-border">
                    <IconDemo />
                </CardBody>
            </Card>
        </Col>
    )
}
