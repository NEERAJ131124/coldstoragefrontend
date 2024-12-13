import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { OrderTitle } from '../../../../Utils/Constants'
import { gridOrderBodyData, orderSubTitle } from '../../../../Data/UiKits/Grid'
import GridFooter from '../Common/GridFooter'

export default function Order() {
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader title={OrderTitle} subTitle={orderSubTitle} />
                <CardBody className='grid-showcase'>
                    <Row className="g-2">
                        {gridOrderBodyData && gridOrderBodyData.map((item, index) => (
                            <Col xs={item.xs} className={item.class} key={index}>
                                <span>{item.text}</span>
                            </Col>
                        ))}
                    </Row>
                </CardBody>
                <GridFooter code={'.order-*'} value={'first / 2 / 3 / 4 / 5 / last'} />
            </Card>
        </Col>
    )
}
