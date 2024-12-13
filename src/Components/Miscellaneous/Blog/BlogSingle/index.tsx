import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import BlogBoxSingle from './BlogBoxSingle'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { BlogSingleTitle, BlogTitle } from '../../../../Utils/Constants'

export default function BlogSingleContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={BlogSingleTitle} parent={BlogTitle} title={BlogSingleTitle} />
            <Container fluid>
                <Row>
                    <Col sm={12}>
                        <Card>
                            <CardBody>
                                <BlogBoxSingle />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}