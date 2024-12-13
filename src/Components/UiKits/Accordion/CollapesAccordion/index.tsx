import React, { useState } from 'react'
import { Card, CardBody, Col, Collapse } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { CollapesAccordionTitle } from '../../../../Utils/Constants'
import { collapesAccordionSubTitle } from '../../../../Data/UiKits/Accordion'
import { Btn, P } from '../../../../AbstractElements'

export default function CollapesAccordion() {
    const [open, setOpen] = useState(false)

    return (
        <Col xl={6} sm={12}>
            <Card>
                <CommonCardHeader title={CollapesAccordionTitle} subTitle={collapesAccordionSubTitle} />
                <CardBody>
                    <P className='mb-2 common-flex'>
                        <Btn color="info" onClick={() => setOpen(!open)} >{'Link with href'}</Btn>
                        <Btn color='info' onClick={() => setOpen(!open)} >{'Button with data-bs-target'}</Btn>
                    </P>
                    <Collapse isOpen={open}>
                        <Card>
                            <CardBody className="mb-0 border">
                                {"Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger."}
                            </CardBody>
                        </Card>
                    </Collapse>
                </CardBody>
            </Card>
        </Col>
    )
}
