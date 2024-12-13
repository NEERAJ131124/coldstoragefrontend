import React, { useState } from 'react'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap';
import { LI, P, UL } from '../../../../AbstractElements';
import { elementsWebDesignList, simpleDemoItem } from '../../../../Data/UiKits/Accordion';

export default function SimpleDemo() {
    const [open, setOpen] = useState('1');

    const toggle = (id: string) => {
        open === id ? setOpen('') : setOpen(id);
    };
    return (
        <Accordion open={open} toggle={toggle} className='dark-accordion'>
            <AccordionItem>
                <AccordionHeader color='light-primary' className='text-primary bg-light-primary' targetId="1">
                <span className='font-primary'>{'What do web designers do?'}</span> {open === '1' ? <i className="iconly-Arrow-Up-2 icli icon font-primary" /> : <i className="iconly-Arrow-Down-2 icli ms-auto icon" />}
                </AccordionHeader>
                <AccordionBody color='primary' accordionId="1">
                    <P>{'Web design'}<em className="text-danger"> {'identifies the goals'}</em> {'of a website or webpage and promotes accessibility for all potential users. This process involves organizing content and images across a series of pages and integrating applications and other interactive elements.'}</P>
                </AccordionBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionHeader color='light-primary' className='text-primary bg-light-primary' targetId="2">
                <span className='font-primary'>{'What is the use of web design?'}</span> {open === '2' ? <i className="iconly-Arrow-Up-2 icli ms-auto icon font-primary" /> : <i className="iconly-Arrow-Down-2 icli ms-auto icon" />}
                </AccordionHeader>
                <AccordionBody accordionId="2">
                    {simpleDemoItem.map((item) => (
                        <P className="mb-3" key={item.id}> <strong> {item.strongText} </strong> {item.text}</P>
                    ))}
                </AccordionBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionHeader color='light-primary' className='text-primary bg-light-primary' targetId="3">
                <span className='font-primary'>{'What are the elements of web design?'}</span> {open === '3' ? <i className="iconly-Arrow-Up-2 icli ms-auto icon font-primary" /> : <i className="iconly-Arrow-Down-2 icli ms-auto icon" />}
                </AccordionHeader>
                <AccordionBody accordionId="3">
                    <P>{'The web design process allows designers to adjust to any preferences and provide effective solutions. There are many standard components of every web design, including:'}</P>
                    <UL className="d-flex flex-column gap-2 accordions-content simple-list align-items-start">
                        {elementsWebDesignList.map((list, index) => (
                            <LI key={index}>{list}</LI>
                        ))}
                    </UL>
                </AccordionBody>
            </AccordionItem>
        </Accordion>
    )
}