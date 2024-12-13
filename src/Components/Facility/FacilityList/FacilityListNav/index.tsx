import React from 'react'
import { Card, Col, FormGroup, Nav, NavItem, NavLink, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import { PlusSquare } from 'react-feather'
import { AddNewFacility, Href } from '../../../../Utils/Constants'
import { FacilityListNavList } from '../../../../Data/Facility'
import { FacilityListNavProps } from '../../../../Types/Facility.type'

export default function FacilityListNav({ activeTab, setActiveTab }: FacilityListNavProps) {
    return (
        <Card>
            <Row>
                <Col md={6}>
                    <Nav className="border-tab" tabs>
                        {FacilityListNavList.map((item) => (
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
                        <Link className="btn btn-primary d-flex align-items-center" to={`${process.env.PUBLIC_URL}/facility/add`}>
                            <PlusSquare /> {AddNewFacility}
                        </Link>
                    </FormGroup>
                </Col>
            </Row>
        </Card>
    )
}