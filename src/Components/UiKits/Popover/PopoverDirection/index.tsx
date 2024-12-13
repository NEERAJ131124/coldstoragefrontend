import React, { Fragment, useState } from 'react'
import { Card, CardBody, Col, Popover, PopoverBody, PopoverHeader } from 'reactstrap';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { PopoverDirectionTitle } from '../../../../Utils/Constants';
import { popoverDirectionSubTitle, popoverPositions } from '../../../../Data/UiKits/Popover';
import { Btn } from '../../../../AbstractElements';
import CommonPopover from '../Common/CommonPopover';

export default function PopoverDirection() {
    const [popover, setPopover] = useState(false);
    const toggle = () => setPopover(!popover);

    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader title={PopoverDirectionTitle} subTitle={popoverDirectionSubTitle} />
                <CardBody className='common-flex'>
                    <Btn color='warning' className="example-popover mb-0 me-0 text-light" id='TopPopover' onClick={toggle}>{'Popover on top'}</Btn>
                    <Popover placement="top" isOpen={popover} target="TopPopover" toggle={toggle}>
                        <PopoverHeader>{'Popover On Top'}</PopoverHeader>
                        <PopoverBody>{'Popovers need the tooltip plugin considering that a dependency.'}</PopoverBody>
                    </Popover>
                    {popoverPositions && popoverPositions.map((item, index) => (
                        <Fragment key={index}>
                            <CommonPopover data={item} />
                        </Fragment>
                    ))}
                </CardBody>
            </Card>
        </Col>
    )
}
