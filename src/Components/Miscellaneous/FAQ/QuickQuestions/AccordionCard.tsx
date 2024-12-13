import React, { useState } from 'react'
import { Card, CardBody, CardHeader, Collapse } from 'reactstrap';
import { ChevronDown, ChevronUp, HelpCircle } from 'react-feather';
import { AccordionCardProp } from '../../../../Types/Miscellaneous.type'
import { Btn, H5 } from '../../../../AbstractElements';

export default function AccordionCard({ item }: AccordionCardProp) {
    const [isActivity, setIsActivity] = useState(false);
    const handelChange = () => {
        setIsActivity(!isActivity);
    };
    return (
        <Card>
            <CardHeader>
                <H5 className="mb-0">
                    <Btn color='transparent' className="btn-link collapsed ps-0 justify-content-between" onClick={handelChange}>
                        <span className="d-flex align-items-center gap-2">
                            <HelpCircle /> {item.title}
                        </span>
                        {isActivity ? (<ChevronDown />) : (<ChevronUp />)}
                    </Btn>
                </H5>
            </CardHeader>
            <Collapse isOpen={isActivity}>
                <CardBody>{'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'}</CardBody>
            </Collapse>
        </Card>
    )
}