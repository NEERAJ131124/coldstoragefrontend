import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { HorizontalAlignmentTitle } from '../../../../Utils/Constants'
import { horizontalAlignSubTitle, verticalAlignmentData } from '../../../../Data/UiKits/Grid'
import GridFooter from '../Common/GridFooter'

export default function HorizontalAlignment() {
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader title={HorizontalAlignmentTitle} subTitle={horizontalAlignSubTitle} />
                <CardBody className='grid-showcase grid-align horizontal-align'>
                    {verticalAlignmentData.map((item) => (
                        <Row className={`justify-content-${item.align} bg-light m-0 mb-3`} key={item.id}>
                            {item.data.map((list) => (
                                <Col xs={5} key={list.id}>
                                    <span className="text-dark">{list.text}</span>
                                </Col>
                            ))}
                        </Row>
                    ))}
                </CardBody>
                <GridFooter code={'.justify-content-*'} value={'start / center / end / around / between'} />
            </Card>
        </Col>
    )
}
