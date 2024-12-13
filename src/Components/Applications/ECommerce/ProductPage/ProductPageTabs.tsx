import React, { useState } from 'react'
import { Card, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import { Href } from '../../../../Utils/Constants';
import { productPageMainNav, productPageTab } from '../../../../Data/Applications/ECommerce/Product';

export default function ProductPageTabs() {
    const [activeTab, setActiveTab] = useState(1);
    return (
        <Card>
            <Row className="product-page-main">
                <Col sm={12}>
                    <Nav className="border-tab mb-0 nav-primary" color='primary' tabs>
                        {productPageMainNav.map((item, index) => (
                            <NavItem key={index}>
                                <NavLink className={activeTab === index + 1 ? 'active' : ''} onClick={() => setActiveTab(index + 1)} href={Href}>{item}</NavLink>
                                <div className="material-border" />
                            </NavItem>
                        ))}
                    </Nav>
                    <TabContent activeTab={activeTab}>
                        {productPageTab.map((item) => (
                            <TabPane key={item.id} tabId={item.id}>
                                {item.paragraph}
                            </TabPane>
                        ))}
                    </TabContent>
                </Col>
            </Row>
        </Card>
    )
}
