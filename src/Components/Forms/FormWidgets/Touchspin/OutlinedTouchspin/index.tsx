import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { OutlinedTouchspinTitle } from '../../../../../Utils/Constants'
import { defaultTouchspinData, touchspinSubTitle } from '../../../../../Data/Forms/FormWidgets'
import CommonTouchspin from '../Common/CommonTouchspin'

export default function OutlinedTouchspin() {
    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader title={OutlinedTouchspinTitle} subTitle={touchspinSubTitle} />
                <CardBody className='common-flex'>
                    {defaultTouchspinData.map((data, index) => (
                        <CommonTouchspin key={index} color={data} outline={true} btnClass={`spin-border-${data}`} />
                    ))}
                </CardBody>
            </Card>
        </Col>
    )
}