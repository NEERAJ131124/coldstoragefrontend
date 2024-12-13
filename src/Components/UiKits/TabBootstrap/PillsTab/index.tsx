import React, { useState } from 'react'
import { Card, CardBody, Col, Nav, NavItem, NavLink } from 'reactstrap';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { Href, PillsTabTitle } from '../../../../Utils/Constants';
import { pillsTabNav, pillsTabSubTitle } from '../../../../Data/UiKits/Tabs';
import PillTabContent from './PillTabContent';

export default function PillsTab() {
    const [basicTab, setBasicTab] = useState('3');

    return (
        <Col sm={12} xxl={6}>
            <Card>
                <CommonCardHeader title={PillsTabTitle} subTitle={pillsTabSubTitle} />
                <CardBody>
                    <Nav tabs className='nav-primary border-0' pills>
                        {pillsTabNav.map((item) => (
                            <NavItem key={item.id}>
                                <NavLink href={Href} className={basicTab === item.id ? 'active' : ''} onClick={() => setBasicTab(item.id)}>{item.nav}</NavLink>
                            </NavItem>
                        ))}
                    </Nav>
                    <PillTabContent tabId={basicTab} />
                </CardBody>
            </Card>
        </Col>
    )
}
