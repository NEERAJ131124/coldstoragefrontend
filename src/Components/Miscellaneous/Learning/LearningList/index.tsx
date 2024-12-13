import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import LearningFilter from '../Common/LearningFilter'
import BlogBoxList from './BlogBoxList'
import BlogBoxGrid from './BlogBoxGrid'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { LearningListTitle, LearningTitle } from '../../../../Utils/Constants'

export default function LearningListContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={LearningListTitle} parent={LearningTitle} title={LearningListTitle} />
            <Container fluid>
                <Row>
                    <Col xl={9} className="xl-60 order-xl-0 order-1 box-col-12 learning-card">
                        <Row>
                            <BlogBoxList />
                            <BlogBoxGrid />
                        </Row>
                    </Col>
                    <LearningFilter />
                </Row>
            </Container>
        </>
    )
}