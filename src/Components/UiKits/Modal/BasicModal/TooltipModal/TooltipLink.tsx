import React, { Fragment, useState } from 'react'
import { H5, P, ToolTip } from '../../../../../AbstractElements';
import { Href } from '../../../../../Utils/Constants';
import { tooltipData } from '../../../../../Data/UiKits/Modal';

export default function TooltipLink() {
    const [tooltips, setTooltips] = useState<{ [key: string]: boolean }>({});

    const toggleTooltip = (id: string) => {
        setTooltips(prevTooltips => ({
            ...prevTooltips,
            [id]: !prevTooltips[id]
        }));
    };
    return (
        <>
            <H5>{'Tooltips in a modal'}</H5>
            <P className="mt-2">
                {tooltipData.map(({ id, content, text }) => (
                    <Fragment key={id}>
                        <a className="tooltip-test font-primary" href={Href} id={id}>{content}</a> {text}
                        <ToolTip autohide={true} isOpen={tooltips[id] || false} target={id} toggle={() => toggleTooltip(id)}>
                            {'Tooltip'}
                        </ToolTip>
                    </Fragment>
                ))}
            </P>
        </>
    )
}
