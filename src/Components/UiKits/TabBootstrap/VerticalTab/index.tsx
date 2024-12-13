import React, { useState } from 'react'
import { Card, CardBody, Col, Nav, NavLink, Row } from 'reactstrap';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { Href, VerticalTabTitle } from '../../../../Utils/Constants';
import { verticalTabNav, verticalTabSubTitle } from '../../../../Data/UiKits/Tabs';
import VerticalTabContent from './VerticalTabContent';

export default function VerticalTab() {
    const [basicTab, setBasicTab] = useState('2');

    return (
        <Col sm={12} xxl={6}>
            <Card>
                <CommonCardHeader title={VerticalTabTitle} subTitle={verticalTabSubTitle} />
                <CardBody>
                    <Row>
                        <Col md={4} xs={12}>
                            <Nav className='flex-column nav-success' pills>
                                {verticalTabNav.map((item) => (
                                    <NavLink key={item.id} href={Href} className={basicTab === item.id ? 'active' : ''} onClick={() => setBasicTab(item.id)}>{item.nav}</NavLink>
                                ))}
                            </Nav>
                        </Col>
                        <Col md={8} xs={12}>
                            <VerticalTabContent tabId={basicTab} />
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
