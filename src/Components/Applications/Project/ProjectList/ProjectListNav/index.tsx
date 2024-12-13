import React from 'react'
import { Card, Col, FormGroup, Nav, NavItem, NavLink, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import { PlusSquare } from 'react-feather'
import { ProjectListNavProps } from '../../../../../Types/Project.type'
import { CreateNewProject, Href } from '../../../../../Utils/Constants'
import { projectListNavList } from '../../../../../Data/Applications/Project'

export default function ProjectListNav({ activeTab, setActiveTab }: ProjectListNavProps) {
    return (
        <Card>
            <Row>
                <Col md={6}>
                    <Nav className="border-tab" tabs>
                        {projectListNavList.map((item) => (
                            <NavItem key={item.id}>
                                <NavLink href={Href} className={activeTab === item.id ? "active" : ""} onClick={() => setActiveTab(item.id)}>
                                    {item.icon}{item.text}
                                </NavLink>
                            </NavItem>
                        ))}
                    </Nav>
                </Col>
                <Col md={6} className='d-md-block d-none'>
                    <FormGroup className="mb-0 me-0">
                        <Link className="btn btn-primary d-flex align-items-center" to={`${process.env.PUBLIC_URL}/project/create_new`}>
                            <PlusSquare /> {CreateNewProject}
                        </Link>
                    </FormGroup>
                </Col>
            </Row>
        </Card>
    )
}