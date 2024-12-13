import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import LeftSidebar from '../Common/LeftSidebar'
import RightSidebarCards from '../Common/RightSidebarCards'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { CardViewTitle, JobSearchTitle } from '../../../../Utils/Constants'

export default function CardsViewContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={CardViewTitle} parent={JobSearchTitle} title={CardViewTitle} />
            <Container fluid>
                <Row>
                    <LeftSidebar />
                    <Col xl={9} className='xl-60 box-col-12'>
                        <Row>
                            <RightSidebarCards colClass='col-xl-6 xl-100' />
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}