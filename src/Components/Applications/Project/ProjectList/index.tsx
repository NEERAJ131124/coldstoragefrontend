import React, { useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import ProjectListNav from './ProjectListNav'
import ProjectListTabContent from './ProjectListTabContent';
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs';
import { ApplicationTitle, ProjectListTitle } from '../../../../Utils/Constants';

export default function ProjectListContainer() {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <>
            <Breadcrumbs pageTitle={ProjectListTitle} parent={ApplicationTitle} title={ProjectListTitle} />
            <Container fluid>
                <Row className='project-cards'>
                    <Col md={12} className="project-list">
                        <ProjectListNav activeTab={activeTab} setActiveTab={setActiveTab} />
                    </Col>
                    <Col sm={12}>
                        <ProjectListTabContent activeTab={activeTab} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}