import React from 'react'
import { Container, Row } from 'reactstrap'
import BlogBoxShadow from './BlogBoxShadow'
import BlogBoxList from './BlogBoxList'
import BlogBoxGrid from './BlogBoxGrid'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { BlogDetailsTitle, BlogTitle } from '../../../../Utils/Constants'

export default function BlogDetailsContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={BlogDetailsTitle} parent={BlogTitle} title={BlogDetailsTitle} />
            <Container fluid>
                <Row>
                    <BlogBoxShadow />
                    <BlogBoxList />
                    <BlogBoxGrid />
                </Row>
            </Container>
        </>
    )
}