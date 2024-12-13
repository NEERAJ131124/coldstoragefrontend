import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { RoundedTouchspinTitle } from '../../../../../Utils/Constants'
import { defaultTouchspinData, touchspinSubTitle } from '../../../../../Data/Forms/FormWidgets'
import CommonTouchspin from '../Common/CommonTouchspin'

export default function RoundedTouchspin() {
    return (
        <Col xl={12}>
            <Card>
                <CommonCardHeader title={RoundedTouchspinTitle} subTitle={touchspinSubTitle} />
                <CardBody className="common-flex rounded-touchspin">
                    {defaultTouchspinData.map((data, index) => (
                        <CommonTouchspin key={index} arrowIcon={true} color={data} btnClass={`touchspin-${data}`} />
                    ))}
                </CardBody>
            </Card>
        </Col>
    )
}