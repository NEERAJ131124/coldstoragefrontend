import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { ProgressAnimated } from '../../../../Utils/Constants'
import { animetedProgressSubTitle, stripedProgressData } from '../../../../Data/UiKits/Progress'
import { ProgressBar } from '../../../../AbstractElements'

export default function AnimatedProgress() {
    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader title={ProgressAnimated} subTitle={animetedProgressSubTitle} />
                <CardBody className=' progress-showcase'>
                    <Row>
                        <Col>
                            {stripedProgressData && stripedProgressData.map((item, index) => (
                                <ProgressBar key={index} color={item.class} value={item.value} striped animated />
                            ))}
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
