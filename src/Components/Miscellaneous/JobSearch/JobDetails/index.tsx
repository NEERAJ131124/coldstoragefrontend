import React from 'react'
import { Container, Row } from 'reactstrap'
import LeftSidebar from '../Common/LeftSidebar'
import JobDetailsRightCards from './JobDetailsRightCards'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { JobDetailsTitle, JobSearchTitle } from '../../../../Utils/Constants'

export default function JobDetailsContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={JobDetailsTitle} parent={JobSearchTitle} title={JobDetailsTitle} />
            <Container fluid>
                <Row>
                    <LeftSidebar />
                    <JobDetailsRightCards />
                </Row>
            </Container>
        </>
    )
}