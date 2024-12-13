import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { LargeProgressTitle } from '../../../../Utils/Constants'
import { largeProgressData, largeProgressSubTitle } from '../../../../Data/UiKits/Progress'
import { ProgressBar } from '../../../../AbstractElements'

export default function LargeProgress() {
    return (
        <Col md={6}>
            <Card>
                <CommonCardHeader title={LargeProgressTitle} subTitle={largeProgressSubTitle} />
                <CardBody className='progress-showcase'>
                    <Row>
                        <Col>
                            {largeProgressData && largeProgressData.map((item, index) => (
                                <ProgressBar color={item.class} value={item.value} className="lg-progress-bar" key={index}>
                                    {item.value}{'%'}
                                </ProgressBar>
                            ))}
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
