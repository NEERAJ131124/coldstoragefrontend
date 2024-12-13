import React, { useState } from 'react'
import { Card, CardBody, Col, Nav, NavItem, NavLink } from 'reactstrap';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { Href, SimpleTabTitle } from '../../../../Utils/Constants';
import { simpleTabNav, simpleTabSubTitle } from '../../../../Data/UiKits/Tabs';
import SimpleTabContent from './SimpleTabContent';

export default function SimpleTab() {
    const [basicTab, setBasicTab] = useState('2');

    return (
        <Col sm={12} xl={6}>
            <Card>
                <CommonCardHeader title={SimpleTabTitle} subTitle={simpleTabSubTitle} />
                <CardBody>
                    <Nav tabs className='simple-wrapper'>
                        {simpleTabNav.map((item) => (
                            <NavItem key={item.id}>
                                <NavLink href={Href} className={`text-primary ${basicTab === item.id ? 'active' : ''}`} onClick={() => setBasicTab(item.id)}>{item.nav}</NavLink>
                            </NavItem>
                        ))}
                    </Nav>
                    <SimpleTabContent tabId={basicTab} />
                </CardBody>
            </Card>
        </Col>
    )
}