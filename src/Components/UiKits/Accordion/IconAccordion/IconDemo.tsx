import React, { useState } from 'react'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap';
import { iconDemoData } from '../../../../Data/UiKits/Accordion';

export default function IconDemo() {
    const [open, setOpen] = useState('')
    const toggle = (id: string) => id !== open ? setOpen(id) : setOpen('');

    return (
        <Accordion open={open} toggle={toggle} className='icons-accordion'>
            {iconDemoData && iconDemoData.map((item, index) => (
                <AccordionItem key={index}>
                    <AccordionHeader color='light-secondary' className="gap-2 text-secondary bg-light-secondary" targetId={item.id}>
                        <span className='font-secondary'>{item.icon} {item.head}</span>
                        {open === item.id ? <i className="iconly-Arrow-Up-2 icli ms-auto icon font-secondary" /> : <i className="iconly-Arrow-Down-2 icli ms-auto icon font-secondary" />}
                    </AccordionHeader>
                    <AccordionBody accordionId={item.id}>
                        {item.text}
                    </AccordionBody>
                </AccordionItem>
            ))}
        </Accordion>
    )
}

