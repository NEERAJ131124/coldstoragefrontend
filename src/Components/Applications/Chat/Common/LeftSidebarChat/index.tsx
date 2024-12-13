import React, { useState } from 'react'
import { Card, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import SearchList from './SearchList';
import { Href } from '../../../../../Utils/Constants';
import ChatTabPane from './ChatTabPane';
import ContactsTabPane from './ContactsTabPane';

export default function LeftSidebarChat() {
    const [activeTab, setActiveTab] = useState(1);
    return (
        <Col xxl={3} xl={4} md={5} className="box-col-5">
            <Card className="left-sidebar-wrapper">
                <SearchList />
                <div className="advance-options">
                    <Nav className="border-tab">
                        <NavItem>
                            <NavLink href={Href} className={activeTab === 1 ? 'active' : ''} onClick={() => setActiveTab(1)}>{'Chats'}</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href={Href} className={activeTab === 2 ? 'active' : ''} onClick={() => setActiveTab(2)}>{'Contacts'}</NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId={1}>
                            <ChatTabPane />
                        </TabPane>
                        <TabPane tabId={2}>
                            <ContactsTabPane />
                        </TabPane>
                    </TabContent>
                </div>
            </Card>
        </Col>
    )
}