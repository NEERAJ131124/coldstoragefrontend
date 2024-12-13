import React, { Fragment, useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { ColoredTooltipTitle } from '../../../../Utils/Constants';
import { colorTooltipData, coloredTooltipSubTitle } from '../../../../Data/UiKits/Tooltip';
import { Btn, ToolTip } from '../../../../AbstractElements';

export default function ColoredTooltip() {
    const [openIndex, setOpenIndex] = useState(-1);
    const toggleTooltip = (index: number) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <Col md={6}>
            <Card>
                <CommonCardHeader title={ColoredTooltipTitle} subTitle={coloredTooltipSubTitle} />
                <CardBody>
                    <div className='common-flex'>
                        {colorTooltipData && colorTooltipData.map((item, index) => (
                            <Fragment key={index}>
                                <Btn color={item.class} className={`mb-0 me-0 ${item.class === 'warning' ? 'text-white' : ''}`} id={`color_${index}`}
                                    onClick={() => toggleTooltip(index)}>{item.text}</Btn>
                                <ToolTip isOpen={openIndex === index} target={`color_${index}`} toggle={() => toggleTooltip(index)}>{item.text}</ToolTip>
                            </Fragment>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}