import React, { useState } from 'react'
import { Card, CardBody, Col, Nav, NavItem, NavLink } from 'reactstrap';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { BorderTabsTitle, Href } from '../../../../Utils/Constants';
import { borderTabsNav, borderTabsSubTitle } from '../../../../Data/UiKits/Tabs';
import BorderTabContent from './BorderTabContent';

export default function BorderTabs() {
    const [basicTab, setBasicTab] = useState('2');

    return (
        <Col xxl={6}>
            <Card className='border-tab-card'>
                <CommonCardHeader title={BorderTabsTitle} subTitle={borderTabsSubTitle} />
                <CardBody>
                    <Nav tabs className='border-tab mb-0'>
                        {borderTabsNav.map((item) => (
                            <NavItem key={item.id}>
                                <NavLink href={Href} className={`nav-border text-info tab-info ${item.id === '1' ? 'pt-0' : ''} ${basicTab === item.id ? 'active' : ''}`} onClick={() => setBasicTab(item.id)}>
                                    {item.icon} {item.text}
                                </NavLink>
                            </NavItem>
                        ))}
                    </Nav>
                    <BorderTabContent tabId={basicTab} />
                </CardBody>
            </Card>
        </Col>
    )
}
