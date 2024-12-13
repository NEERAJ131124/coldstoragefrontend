import React, { useState } from 'react'
import { Card, CardBody, Col, Nav, NavItem, NavLink } from 'reactstrap';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { Href, IconTabsTitle } from '../../../../Utils/Constants';
import { iconTabsNav, iconTabsSubTitle } from '../../../../Data/UiKits/Tabs';
import IconTabContent from './IconTabContent';

export default function IconTabs() {
    const [basicTab, setBasicTab] = useState('1');

    return (
        <Col sm={12} xl={6}>
            <Card>
                <CommonCardHeader title={IconTabsTitle} subTitle={iconTabsSubTitle} />
                <CardBody>
                    <Nav tabs>
                        {iconTabsNav.map((item) => (
                            <NavItem key={item.id}>
                                <NavLink href={Href} className={`text-secondary ${basicTab === item.id ? 'active' : ''}`} onClick={() => setBasicTab(item.id)}>
                                    {item.icon} {item.text}
                                </NavLink>
                            </NavItem>
                        ))}
                    </Nav>
                    <IconTabContent tabId={basicTab} />
                </CardBody>
            </Card>
        </Col>
    )
}
