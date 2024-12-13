import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { BorderWarningTitle } from '../../../../Utils/Constants'
import { borderPrimarySubTitle, borderWarningData } from '../../../../Data/BonusUi/CreativeCard'
import { LI, OL } from '../../../../AbstractElements'

export default function BorderWarning() {
    return (
        <Col md={6} xxl={4}>
            <Card className='height-equal state-card'>
                <CommonCardHeader title={BorderWarningTitle} subTitle={borderPrimarySubTitle} headClass='border-l-warning border-3' />
                <CardBody>
                    <OL className="list-group list-group-numbered">
                        {borderWarningData.map((item) => (
                            <LI className={`text-${item.color} fw-bold`} key={item.id}>
                                {item.text}
                            </LI>
                        ))}
                    </OL>
                </CardBody>
            </Card>
        </Col>
    )
}
