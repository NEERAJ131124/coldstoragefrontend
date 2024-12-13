import React, { Fragment, useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { HtmlTooltipTitle } from '../../../../Utils/Constants';
import { htmlTooltipData, htmlTooltipSubTitle } from '../../../../Data/UiKits/Tooltip';
import { Btn, ToolTip } from '../../../../AbstractElements';

export default function HtmlTooltip() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const toggleTooltip = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <Col md={6}>
            <Card>
                <CommonCardHeader title={HtmlTooltipTitle} subTitle={htmlTooltipSubTitle} />
                <CardBody>
                    <div className='common-flex tooltip-effect'>
                        {htmlTooltipData && htmlTooltipData.map((item, index) => (
                            <Fragment key={index}>
                                <Btn color={item.class} className={`mb-0 me-0 ${item.class === 'warning' ? 'text-white' : ''}`} id={`html_${index}`} onClick={() => toggleTooltip(index)}>{item.text}</Btn>
                                <ToolTip isOpen={openIndex === index} target={`html_${index}`} toggle={() => toggleTooltip(index)}>{item.tooltip}</ToolTip>
                            </Fragment>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
