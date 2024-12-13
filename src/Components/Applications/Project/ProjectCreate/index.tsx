import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import CreateNewProjectForm from './CreateNewProjectForm'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { ApplicationTitle, ProjectListTitle } from '../../../../Utils/Constants'

export default function ProjectCreateContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={ProjectListTitle} parent={ApplicationTitle} title={ProjectListTitle} />
            <Container fluid>
                <Row>
                    <Col sm={12}>
                        <Card>
                            <CardBody>
                                <CreateNewProjectForm />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}