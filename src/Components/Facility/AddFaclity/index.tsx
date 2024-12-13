import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import CreateNewFacilityForm from './CreateNewFacilityForm'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { AddNewFacility, ApplicationTitle } from '../../../Utils/Constants'

export default function ProjectCreateContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={AddNewFacility} parent={ApplicationTitle} title={AddNewFacility} />
            <Container fluid>
                <Row>
                    <Col sm={12}>
                        <Card>
                            <CardBody>
                                <CreateNewFacilityForm />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}