import React, { useState } from 'react'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Card, CardBody, Col } from 'reactstrap';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { FlushAccordionTitle } from '../../../../Utils/Constants';
import { flushAccordionSubTitle, flushData } from '../../../../Data/UiKits/Accordion';
import { LI, UL } from '../../../../AbstractElements';

export default function FlushAccordion() {
    const [open, setOpen] = useState('flush1')
    const toggle = (id: string) => open === id ? setOpen('') : setOpen(id);

    return (
        <Col sm={12} xl={6}>
            <Card>
                <CommonCardHeader title={FlushAccordionTitle} subTitle={flushAccordionSubTitle} />
                <CardBody>
                    <Accordion open={open} toggle={toggle} className='dark-accordion' flush={true}>
                        {flushData && flushData.map((data, index) => (
                            <AccordionItem key={index}>
                                <AccordionHeader color='light-success' className="text-success bg-light-success" targetId={data.id}>
                                <span className='font-success'>{data.head}</span>
                                </AccordionHeader>
                                <AccordionBody accordionId={data.id}>
                                    <UL className="d-flex flex-column gap-1 accordions-content simple-list align-items-start">
                                        {data.child.map((item, index) => (
                                            <LI className="py-2" key={index}>{item.text}</LI>
                                        ))}
                                    </UL>
                                </AccordionBody>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </CardBody>
            </Card>
        </Col>
    )
}