import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { SmallProgressTitle } from '../../../../Utils/Constants'
import { smallProgressData, smallProgressSubTitle } from '../../../../Data/UiKits/Progress'

export default function SmallProgress() {
    return (
        <Col md={6}>
            <Card>
                <CommonCardHeader title={SmallProgressTitle} subTitle={smallProgressSubTitle} />
                <CardBody className='progress-showcase progress-b-space'>
                    <Row>
                        <Col>
                            {smallProgressData && smallProgressData.map((item, index) => (
                                <div className={`progress sm-progress-bar overflow-visible ${item.value === '30%' ? 'mt-4' : ''}`} key={index}>
                                    <div className="progress-bar-animated small-progressbar bg-primary rounded-pill progress-bar-striped" role="progressbar" style={{ width: item.value }}>
                                        <span className="text-primary progress-label">{item.text}</span>
                                        <span className="animate-circle" />
                                    </div>
                                </div>
                            ))}
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
