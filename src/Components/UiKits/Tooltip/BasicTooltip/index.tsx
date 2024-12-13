import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import { TooltipStateProps } from '../../../../Types/UiKits.type';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { BasicTooltipTitle, Href } from '../../../../Utils/Constants';
import { basicTooltipSubTitle } from '../../../../Data/UiKits/Tooltip';
import { Btn, H5, P, ToolTip } from '../../../../AbstractElements';

export default function BasicTooltip() {
    const [state, setState] = useState({ tooltip1: false, tooltip2: false, tooltip3: false, });
    const toggleTooltip = (key: keyof TooltipStateProps) => {
        setState((prevState) => ({ ...prevState, [key]: !prevState[key] }));
    };
    const toggleTooltip1 = () => toggleTooltip('tooltip1');
    const toggleTooltip2 = () => toggleTooltip('tooltip2');
    const toggleTooltip3 = () => toggleTooltip('tooltip3');

    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader title={BasicTooltipTitle} subTitle={basicTooltipSubTitle} />
                <CardBody>
                    <Btn color='primary' className="example-popover mb-0 me-0" id='TooltipExample'>{"It's magic please hover me..."}</Btn>
                    <ToolTip placement='top' isOpen={state.tooltip1} target='TooltipExample' toggle={toggleTooltip1}>
                        {"Surprise!!! Thank you for hovering..."}
                    </ToolTip>
                    <H5 className="mb-1 py-4 pb-0">{'Inline Tooltip Content'}</H5>
                    <P className="mb-0"> {'Here, is some content about tooltips that you can set the'}
                        <a href={Href} className="text-primary fw-bold" id='Tooltip1'> {'tooltip'}</a> {'inside the content with help of tooltip and also you can add '}
                        <Btn color='success' id='Tooltip2' className="text-white border-0 px-3 py-1 me-0 mb-0">{'button'}</Btn>
                        {". Tooltips helps you to add more and more content. A tooltip is often used to specify extra information about something when the user moves the mouse pointer over an element"}
                    </P>
                    <ToolTip placement='top' isOpen={state.tooltip2} target='Tooltip1' toggle={toggleTooltip2}>
                        {'tooltip'}
                    </ToolTip>
                    <ToolTip placement='top' isOpen={state.tooltip3} target='Tooltip2' toggle={toggleTooltip3}>
                        {'button'}
                    </ToolTip>
                </CardBody>
            </Card>
        </Col>
    )
}
