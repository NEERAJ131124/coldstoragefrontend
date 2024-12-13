import React from 'react'
import { ButtonGroup, Card, CardBody, Col, Row } from 'reactstrap'
import CommonCardHeader from '../../../Utils/CommonComponents/CommonCardHeader'
import { ButtonsGroupTitle } from '../../../Utils/Constants'
import { Btn } from '../../../AbstractElements'
import { buttonGroupData } from '../../../Data/Buttons'

export default function ButtonsGroup() {
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader title={ButtonsGroupTitle} />
                <CardBody className="btn-group-showcase">
                    <Row>
                        {buttonGroupData.map((item, index) => (
                            <Col xxl={4} md={6} sm={12} className={item.colClass} key={index}>
                                <ButtonGroup>
                                    <Btn className={item.btnClass} color={item.color}>
                                        {item.title1}
                                    </Btn>
                                    <Btn className={item.btnClass} color={item.color}>
                                        {item.title2}
                                    </Btn>
                                    <Btn className={item.btnClass} color={item.color}>
                                        {item.title3}
                                    </Btn>
                                </ButtonGroup>
                            </Col>
                        ))}
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}