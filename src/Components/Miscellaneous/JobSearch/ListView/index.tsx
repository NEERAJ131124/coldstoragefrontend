import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import LeftSidebar from '../Common/LeftSidebar'
import RightSidebarCards from '../Common/RightSidebarCards'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { JobSearchTitle, ListViewTitle } from '../../../../Utils/Constants'

export default function ListViewContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={ListViewTitle} parent={JobSearchTitle} title={ListViewTitle} />
            <Container fluid>
                <Row>
                    <LeftSidebar />
                    <Col xl={9} className='xl-60 box-col-12'>
                        <RightSidebarCards limit={8} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}