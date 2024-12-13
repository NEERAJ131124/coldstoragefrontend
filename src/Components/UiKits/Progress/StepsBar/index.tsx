import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { StepsBarTitle } from '../../../../Utils/Constants'
import { stepsBarTitleSubTitle } from '../../../../Data/UiKits/Progress'
import { Btn, ProgressBar } from '../../../../AbstractElements'

export default function StepsBar() {
    return (
        <Col md={6}>
            <Card>
                <CommonCardHeader title={StepsBarTitle} subTitle={stepsBarTitleSubTitle} />
                <CardBody>
                    <div className="position-relative m-4 progress-number">
                        <ProgressBar className="progress-wrapper" value={50} />
                        <Btn color="primary" size="sm" className="position-absolute top-0 start-0 translate-middle rounded-circle text-light">{'1'}</Btn>
                        <Btn color="primary" size="sm" className="position-absolute top-0 start-50 translate-middle rounded-circle text-light">{'2'}</Btn>
                        <Btn color="transparent" size="sm" className="progress-btn position-absolute top-0 start-100 translate-middle rounded-circle">{'3'}</Btn>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
