import React, { Fragment, useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { FilledTooltipTitle } from '../../../../Utils/Constants';
import { filledTooltipSubTitle, flippedTooltipData } from '../../../../Data/UiKits/Tooltip';
import { Btn, ToolTip } from '../../../../AbstractElements';

export default function FilledTooltip() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const toggleTooltip = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <Col md={6}>
            <Card>
                <CommonCardHeader title={FilledTooltipTitle} subTitle={filledTooltipSubTitle} />
                <CardBody className='fill-tooltip'>
                    <div className='common-flex'>
                        {flippedTooltipData && flippedTooltipData.map((item, index) => (
                            <Fragment key={index}>
                                <Btn outline className='mb-0 me-0' color={item.class} id={`filled_${index}`} onClick={() => toggleTooltip(index)}>{item.text}</Btn>
                                <ToolTip isOpen={openIndex === index} target={`filled_${index}`} toggle={() => toggleTooltip(index)}>{item.text}</ToolTip>
                            </Fragment>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
