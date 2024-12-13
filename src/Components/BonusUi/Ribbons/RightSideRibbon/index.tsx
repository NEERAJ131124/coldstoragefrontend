import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { RightSideRibbonTitle } from '../../../../Utils/Constants'
import { rightRibbonSubTitle, rightSideData } from '../../../../Data/BonusUi/Ribbons'
import { Ribbon } from '../../../../AbstractElements'

export default function RightSideRibbon() {
    return (
        <Row>
            <Col sm={12} xl={12}>
                <Card>
                    <CommonCardHeader title={RightSideRibbonTitle} subTitle={rightRibbonSubTitle} />
                    <CardBody>
                        <Row className='g-3'>
                            {rightSideData && rightSideData.map((item, index) => (
                                <Col xl={4} sm={6} key={index}>
                                    <div className={item.classMain}>
                                        <Ribbon className={item.ribbonClass}>{item.ribbonText}</Ribbon>
                                        {item.subText}
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}
