import React, { useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import FacilityListNav from './FacilityListNav'
import FaclityListTabContent from './FacilityListTabContent';
import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import { ApplicationTitle, FacilityListTitle, FacilityTitle, ProjectListTitle } from '../../../Utils/Constants';

export default function ProjectListContainer() {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <>
            <Breadcrumbs pageTitle={FacilityListTitle} parent={FacilityTitle} title={FacilityListTitle} />
            <Container fluid>
                <Row className='project-cards'>
                    <Col md={12} className="project-list">
                        <FacilityListNav activeTab={activeTab} setActiveTab={setActiveTab} />
                    </Col>
                    <Col sm={12}>
                        <FaclityListTabContent activeTab={activeTab} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}