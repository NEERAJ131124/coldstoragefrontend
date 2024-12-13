import React, { useState } from 'react'
import { Popover, PopoverBody, PopoverHeader } from 'reactstrap';
import { CommonPopoverType } from '../../../../Types/UiKits.type';
import { Btn } from '../../../../AbstractElements';

export default function CommonPopover({ data }: CommonPopoverType) {
    const [popover, setPopover] = useState(false);
    const toggle = () => setPopover(!popover);
    return (
        <>
            <Btn color={data.btnColor} className={`example-popover mb-0 me-0 ${data.btnClass}`} size={data.size} id={`${'Popover-' + data.id}`}>
                {data.btnText}
            </Btn >
            <Popover placement={data.placement} isOpen={popover} target={'Popover-' + data.id} toggle={toggle} trigger={data.trigger}>
                <PopoverHeader>{data.popoverHeader}</PopoverHeader>
                <PopoverBody>{data.popoverBody}</PopoverBody>
            </Popover>
        </>
    )
}
