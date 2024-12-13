import React, { useState } from 'react'
import { Popover, PopoverBody, PopoverHeader } from 'reactstrap';
import { Btn } from '../../../../AbstractElements';

export default function OffsetContent() {
    const [popoverOffset, setPopoverOffset] = useState(false);
    const [popoverLeft, setPopoverLeft] = useState(false);

    const togglePopover = (popoverId: string) => {
        if (popoverId === 'PopoverOffset') {
            setPopoverOffset(!popoverOffset);
        } else if (popoverId === 'offset') {
            setPopoverLeft(!popoverLeft);
        }
    };

    return (
        <>
            <Btn color='secondary' className="mb-0 me-0" id='PopoverOffset' onClick={() => togglePopover('PopoverOffset')}>
                {'Popover offset 50'}
            </Btn>
            <Popover placement="right" isOpen={popoverOffset} target="PopoverOffset" toggle={() => togglePopover('PopoverOffset')} offset={[50, 0]}>
                <PopoverHeader>{'Popover title'}</PopoverHeader>
                <PopoverBody>{"And here's some amazing content. It's very engaging. Right?"}</PopoverBody>
            </Popover>
            <Btn color='dark' className="example-popover mb-0 me-0" id='offset' onClick={() => togglePopover('offset')}>
                {'Popover offset -50'}
            </Btn>
            <Popover placement='left' isOpen={popoverLeft} target="offset" toggle={() => togglePopover('offset')} offset={[-50, 0]}>
                <PopoverHeader>{'Popover On Left'}</PopoverHeader>
                <PopoverBody>{"Popovers are opt-in for effectiveness causes, in this way you have to initialize them yourself."}</PopoverBody>
            </Popover>
        </>
    );
}
