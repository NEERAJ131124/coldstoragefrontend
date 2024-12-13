import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { MultipleBarsTitle } from '../../../../Utils/Constants'
import { multipleBarData, multipleBarsSubTitle } from '../../../../Data/UiKits/Progress'
import { ProgressBar } from '../../../../AbstractElements'

export default function MultipleBars() {
    return (
        <Col md={6}>
            <Card>
                <CommonCardHeader title={MultipleBarsTitle} subTitle={multipleBarsSubTitle} />
                <CardBody className='progress-showcase'>
                    <Row>
                        <Col>
                            {multipleBarData && multipleBarData.map((item, index) => (
                                <ProgressBar key={index} multi>
                                    {item.data && item.data.map((item, index) => (
                                        <ProgressBar key={index} value={item.value} color={item.class} bar />
                                    ))}
                                </ProgressBar>
                            ))}
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
