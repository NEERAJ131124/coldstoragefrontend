import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { GridColumnTitle } from '../../../../Utils/Constants'
import { gridColumnData, gridColumnSubTitle } from '../../../../Data/UiKits/Grid'

export default function GridColumn() {
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader title={GridColumnTitle} subTitle={gridColumnSubTitle} />
                <CardBody className='grid-showcase'>
                    <Row>
                        {gridColumnData && gridColumnData.map((item, index) => (
                            <Col md={item} className='text-center' key={index}>
                                <span>{`col-md-${item}`}</span>
                            </Col>
                        ))}
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
