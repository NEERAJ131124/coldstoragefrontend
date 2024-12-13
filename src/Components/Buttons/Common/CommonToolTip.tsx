import React, { useState } from 'react'
import { ToolTip } from '../../../AbstractElements';
import { CommonToolTipProp } from '../../../Types/Buttons.type';

export default function CommonToolTip({ id, toolTipText }: CommonToolTipProp) {
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const toggle = () => setTooltipOpen(!tooltipOpen);

    return (
        <ToolTip isOpen={tooltipOpen} target={id} toggle={toggle}>
            {toolTipText}
        </ToolTip>
    );
}
