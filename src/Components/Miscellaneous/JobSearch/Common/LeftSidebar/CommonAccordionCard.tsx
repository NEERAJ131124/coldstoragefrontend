import React, { useState } from 'react'
import { Card, CardBody, CardHeader, Collapse, Input, Label } from 'reactstrap';
import { ChevronDown, ChevronUp, MapPin, Search } from 'react-feather';
import { CommonAccordionCardProps } from '../../../../../Types/Miscellaneous.type'
import { Btn, H2 } from '../../../../../AbstractElements';

export default function CommonAccordionCard({ items }: CommonAccordionCardProps) {
    const [open, setOpen] = useState(true);
    const handleClick = () => { setOpen(!open) };

    return (
        <Card>
            <CardHeader>
                <H2 className="mb-0">
                    <Btn color='transparent' block className="btn-link d-flex align-items-center gap-2 justify-content-between" onClick={handleClick}>
                        {items.heading} {open ? <ChevronDown /> : <ChevronUp />}
                    </Btn>
                </H2>
            </CardHeader>
            <Collapse isOpen={open}>
                <CardBody className={`animate-chk ${items.id === 1 ? "filter-cards-view basic-form" : ""}`}>
                    {items.id === 1 && (
                        <>
                            <div className="job-filter mb-2">
                                <div className="faq-form">
                                    <Input type="text" placeholder="Search.." />
                                    <Search className="search-icon" />
                                </div>
                            </div>
                            <div className="job-filter">
                                <div className="faq-form">
                                    <Input type="text" placeholder="location.." />
                                    <MapPin className="search-icon" />
                                </div>
                            </div>
                        </>
                    )}
                    <div className={items.id === 2 ? "location-checkbox" : items.id === 1 ? "checkbox-animated" : ""}>
                        {items.data.map((element, i) => (
                            <Label key={element.id || i} className="d-block" htmlFor={element.id}>
                                <Input className="checkbox_animated" id={element.id} type="checkbox" /> {element.title}
                                {element.subTitle && <span className="d-block">{element.subTitle}</span>}
                            </Label>
                        ))}
                    </div>
                </CardBody>
                <Btn className='text-center' color="primary" block={items.id !== 1}>{items.buttonTitle}</Btn>
            </Collapse>
        </Card>
    );
}