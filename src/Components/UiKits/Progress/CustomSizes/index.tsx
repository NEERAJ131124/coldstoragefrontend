import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { CustomSizesTitle } from '../../../../Utils/Constants'
import { customSizesData, customSubTitle } from '../../../../Data/UiKits/Progress'
import { ProgressBar } from '../../../../AbstractElements'

export default function CustomSizes() {
    return (
        <Card>
            <CommonCardHeader title={CustomSizesTitle} subTitle={customSubTitle} />
            <CardBody className="progress-showcase">
                <Row>
                    <Col>
                        {customSizesData && customSizesData.map((item, index) => (
                            <ProgressBar color={item.class} value={item.value} style={{ height: item.text }} key={index} />
                        ))}
                    </Col>
                </Row>
            </CardBody>
        </Card>
    )
}
