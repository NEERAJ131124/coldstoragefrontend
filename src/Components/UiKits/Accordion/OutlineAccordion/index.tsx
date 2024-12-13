import React, { useState } from 'react'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { OutlineAccordionTitle } from '../../../../Utils/Constants'
import { outlineAccordionSubTitle, outlineData } from '../../../../Data/UiKits/Accordion'

export default function OutlineAccordion() {
    const [open, setOpen] = useState('')
    const toggle = (id: string) => { open === id ? setOpen('') : setOpen(id) }

    return (
        <Col xl={6} sm={12}>
            <Card>
                <CommonCardHeader title={OutlineAccordionTitle} subTitle={outlineAccordionSubTitle} />
                <CardBody>
                    <Accordion open={open} toggle={toggle} className='dark-accordion'>
                        {outlineData && outlineData.map((item, index) => (
                            <AccordionItem className="accordion-wrapper accordion-left-border" key={index}>
                                <AccordionHeader color='light-primary' className="text-info" targetId={item.id}>
                                    <span className='font-primary'>{item.head}</span>
                                    {open === item.id ? <i className="iconly-Arrow-Up-2 icli ms-auto icon font-primary" /> : <i className="iconly-Arrow-Down-2 icli ms-auto icon font-primary" />}
                                </AccordionHeader>
                                <AccordionBody accordionId={item.id}>{item.text}</AccordionBody>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </CardBody>
            </Card>
        </Col>
    )
}
