import React from 'react'
import { Col, Row } from 'reactstrap'
import LeftSide from '../Common/LeftSide'
import RightSide from '../Common/RightSide'
import NewUsersSocial from './NewUsersSocial'

export default function TimelineTab() {
    return (
        <Row>
            <LeftSide />
            <Col xl={6} lg={12} md={7} className="xl-60 box-col-8e">
                <NewUsersSocial />
            </Col>
            <RightSide />
        </Row>
    )
}