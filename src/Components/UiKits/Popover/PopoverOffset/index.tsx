import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { PopoverOffsetTitle } from '../../../../Utils/Constants'
import { popoverOffsetSubTitle } from '../../../../Data/UiKits/Popover'
import OffsetContent from './OffsetContent'

export default function PopoverOffset() {
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader title={PopoverOffsetTitle} subTitle={popoverOffsetSubTitle} />
                <CardBody className='common-flex'>
                    <OffsetContent />
                </CardBody>
            </Card>
        </Col>
    )
}
