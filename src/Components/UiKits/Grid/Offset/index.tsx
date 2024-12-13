import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { OffsetTitle } from '../../../../Utils/Constants'
import { offsetBodyData, offsetSubTitle } from '../../../../Data/UiKits/Grid'
import GridFooter from '../Common/GridFooter'

export default function Offset() {
    return (
        <Col sm={12} className='mb-xl-4'>
            <Card>
                <CommonCardHeader title={OffsetTitle} subTitle={offsetSubTitle} />
                <CardBody className='grid-showcase'>
                    <Row className="g-2">
                        {offsetBodyData && offsetBodyData.map((item, index) => (
                            <Col sm={item.sm} xs={item.xs} className={item.class} key={index}>
                                <span>{item.text}</span>
                            </Col>
                        ))}
                    </Row>
                </CardBody>
                <GridFooter code={'.offset-*'} value={'1 / 2 / ... / 11 / 12'} />
            </Card>
        </Col>
    )
}
