import React from 'react'
import { Container, Row } from 'reactstrap'
import LearningFilter from '../Common/LearningFilter'
import BlogDetails from './BlogDetails'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { LearningDetailedTitle, LearningTitle } from '../../../../Utils/Constants'

export default function DetailedCourseContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={LearningDetailedTitle} parent={LearningTitle} title={LearningDetailedTitle} />
            <Container fluid>
                <Row>
                    <BlogDetails />
                    <LearningFilter />
                </Row>
            </Container>
        </>
    )
}