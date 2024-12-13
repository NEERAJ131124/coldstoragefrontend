import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { DefaultTouchspinTitle } from '../../../../../Utils/Constants'
import { defaultTouchspinData, touchspinSubTitle } from '../../../../../Data/Forms/FormWidgets'
import CommonTouchspin from '../Common/CommonTouchspin'

export default function DefaultTouchspin() {
    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader title={DefaultTouchspinTitle} subTitle={touchspinSubTitle} />
                <CardBody className='common-flex'>
                    {defaultTouchspinData.map((data, index) => (
                        <CommonTouchspin key={index} color={data} btnClass={`touchspin-${data}`} />
                    ))}
                </CardBody>
            </Card>
        </Col>
    )
}
