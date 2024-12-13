import React, { useState } from 'react'
import { Card, CardBody, Col, Nav, NavItem, NavLink } from 'reactstrap';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { Href, MaterialStyleTabTitle } from '../../../../Utils/Constants';
import { materialStyleNav, materialStyleSubTitle } from '../../../../Data/UiKits/Tabs';
import MaterialStyleContent from './MaterialStyleContent';

export default function MaterialStyleTab() {
    const [basicTab, setBasicTab] = useState('1');

    return (
        <Col xxl={6} className='mb-lg-3'>
            <Card>
                <CommonCardHeader title={MaterialStyleTabTitle} subTitle={materialStyleSubTitle} />
                <CardBody>
                    <Nav tabs className='border-tab border-0 mb-0 nav-danger'>
                        {materialStyleNav.map((item) => (
                            <NavItem key={item.id}>
                                <NavLink href={Href} className={`nav-border text-danger nav-danger ${item.id === '1' ? 'pt-0' : ''} ${basicTab === item.id ? 'active' : ''}`} onClick={() => setBasicTab(item.id)}>
                                    {item.icon} {item.text}
                                </NavLink>
                            </NavItem>
                        ))}
                    </Nav>
                    <MaterialStyleContent tabId={basicTab} />
                </CardBody>
            </Card>
        </Col>
    )
}
