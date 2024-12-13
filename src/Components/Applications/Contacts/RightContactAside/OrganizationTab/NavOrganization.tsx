import React from 'react'
import { Col, Nav, NavLink } from 'reactstrap';
import { NavOrganizationProps } from '../../../../../Types/Contact.type';
import { organizationList } from '../../../../../Data/Applications/Contacts';
import { Href } from '../../../../../Utils/Constants';
import { H3, Image, P } from '../../../../../AbstractElements';
import { dynamicImage } from '../../../../../Utils';

export default function NavOrganization({ orgActiveTab, setOrgActiveTab }: NavOrganizationProps) {
    return (
        <Col xl={4} md={5} className='xl-50'>
            <Nav className='flex-column' pills>
                {organizationList.map((item) => (
                    <NavLink key={item.id} href={Href} className={orgActiveTab === item.id ? 'active' : ''} onClick={() => { setOrgActiveTab(item.id); }}>
                        <div className="d-flex">
                            <Image className='img-50 img-fluid m-r-20 rounded-circle' src={dynamicImage(item.image)} alt='' />
                            <div className="flex-grow-1">
                                <H3>{item.name}</H3>
                                <P>{item.email}</P>
                            </div>
                        </div>
                    </NavLink>
                ))}
            </Nav>
        </Col>
    )
}