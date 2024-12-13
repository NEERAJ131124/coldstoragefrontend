import React from 'react'
import { Container, Row } from 'reactstrap'
import LeftSidebar from '../Common/LeftSidebar'
import ApplyForm from './ApplyForm'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { Apply, JobSearchTitle } from '../../../../Utils/Constants'

export default function ApplyJobsContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={Apply} parent={JobSearchTitle} title={Apply} />
            <Container fluid>
                <Row>
                    <LeftSidebar />
                    <ApplyForm />
                </Row>
            </Container>
        </>
    )
}