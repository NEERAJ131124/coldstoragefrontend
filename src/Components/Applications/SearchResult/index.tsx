import React, { useState } from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import SearchResultHeader from './SearchResultHeader';
import SearchNav from './SearchNav';
import SearchTabContent from './SearchTabContent';
import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import { SearchPagesTitle, SearchWebsiteTitle } from '../../../Utils/Constants';

export default function SearchResultContainer() {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <>
            <Breadcrumbs pageTitle={SearchWebsiteTitle} parent={SearchPagesTitle} title={SearchWebsiteTitle} />
            <Container className='search-page' fluid>
                <Row>
                    <Col sm={12}>
                        <Card>
                            <SearchResultHeader />
                            <CardBody>
                                <SearchNav activeTab={activeTab} setActiveTab={setActiveTab} />
                                <SearchTabContent activeTab={activeTab} />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}