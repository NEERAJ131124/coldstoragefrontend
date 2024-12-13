import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { ProgressStriped } from '../../../../Utils/Constants'
import { stripedProgressData, stripedProgressSubTitle } from '../../../../Data/UiKits/Progress'
import { ProgressBar } from '../../../../AbstractElements'

export default function StripedProgress() {
    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader title={ProgressStriped} subTitle={stripedProgressSubTitle} />
                <CardBody className='progress-showcase'>
                    <Row>
                        <Col>
                            {stripedProgressData && stripedProgressData.map((item, index) => (
                                <ProgressBar key={index} color={item.class} value={item.value} striped />
                            ))}
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
