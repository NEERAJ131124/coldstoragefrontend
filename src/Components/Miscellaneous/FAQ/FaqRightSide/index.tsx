import React from 'react'
import { Col, Row } from 'reactstrap'
import SearchArticle from './SearchArticle'
import NavigationCard from './NavigationCard'
import LatestUpdates from './LatestUpdates'

export default function FaqRightSide() {
    return (
        <Col xl={4} lg={6} md={5} className="xl-40">
            <Row>
                <SearchArticle />
                <NavigationCard />
                <LatestUpdates />
            </Row>
        </Col>
    )
}