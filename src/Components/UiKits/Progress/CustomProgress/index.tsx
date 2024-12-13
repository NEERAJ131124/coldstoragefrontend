import React, { Fragment } from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { CustomProgressTitle } from '../../../../Utils/Constants'
import { customProgressData, customProgressSubTitle } from '../../../../Data/UiKits/Progress'
import { H6, ProgressBar } from '../../../../AbstractElements'

export default function CustomProgress() {
    return (
        <Card>
            <CommonCardHeader subTitle={customProgressSubTitle} title={CustomProgressTitle} />
            <CardBody className="progress-showcase">
                <Row>
                    <Col>
                        {customProgressData && customProgressData.map((item, index) => (
                            <Fragment key={index}>
                                <H6 className="mb-2">{item.text}</H6>
                                <ProgressBar className={`mb-4 text-center ${item.class === 'dark' ? 'text-light' : ''}`}
                                    color={item.class} value={item.value} striped animated>
                                    {item.value}{'%'}
                                </ProgressBar>
                            </Fragment>
                        ))}
                    </Col>
                </Row>
            </CardBody>
        </Card>
    )
}
