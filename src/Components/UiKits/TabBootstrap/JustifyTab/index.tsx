import React, { useState } from 'react'
import { Card, CardBody, CardHeader, Col, Nav, NavItem, NavLink } from 'reactstrap';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { Href, JustifyTabTitle } from '../../../../Utils/Constants';
import { justifyTabNav, justifyTabSubTitle } from '../../../../Data/UiKits/Tabs';
import { P } from '../../../../AbstractElements';
import JustifyTabContent from './JustifyTabContent';

export default function JustifyTab() {
    const [basicTab, setBasicTab] = useState('2');

    return (
        <Col xxl={6}>
            <Card>
                <CommonCardHeader title={JustifyTabTitle} subTitle={justifyTabSubTitle} />
                <CardBody>
                    <CardHeader className='d-flex justify-content-between align-items-center flex-wrap gap-2 pb-2 p-0'>
                        <P className="mb-0"><em className="text-danger">{'ADMIRO Profiles For New Employees:'}</em></P>
                        <Nav className='nav-warning' pills>
                            {justifyTabNav.map((item) => (
                                <NavItem>
                                    <NavLink href={Href} className={`${basicTab === item.id ? 'active' : ''}`} onClick={() => setBasicTab(item.id)}>{item.nav}</NavLink>
                                </NavItem>
                            ))}
                        </Nav>
                    </CardHeader>
                    <CardBody className='px-0 pb-0'>
                        <JustifyTabContent tabId={basicTab} />
                    </CardBody>
                </CardBody>
            </Card>
        </Col>
    )
}
