import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { BasicProgressTitle } from '../../../../Utils/Constants'
import { basicProgressData, basicProgressSubTitle } from '../../../../Data/UiKits/Progress'
import { ProgressBar } from '../../../../AbstractElements'

export default function BasicProgress() {
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader title={BasicProgressTitle} subTitle={basicProgressSubTitle} />
                <CardBody className="progress-showcase">
                    <Row>
                        <Col>
                            {basicProgressData && basicProgressData.map((item, index) => (
                                <ProgressBar key={index} color={item.class} value={item.value} >{item.value}{'%'}</ProgressBar>
                            ))}
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
