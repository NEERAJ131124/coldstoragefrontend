import React from 'react'
import { Card, Col } from 'reactstrap'
import AppChatHeader from './AppChatHeader'
import ChatMessages from '../../Common/RightSidebarChat/ChatMessages'
import SendMessages from '../../Common/RightSidebarChat/SendMessages'

export default function PrivateChatContent() {
    return (
        <Col xxl={9} xl={8} md={7} className="box-col-7">
            <Card className="right-sidebar-chat">
                <AppChatHeader />
                <div className="right-sidebar-Chats">
                    <div className="msger">
                        <ChatMessages />
                        <SendMessages />
                    </div>
                </div>
            </Card>
        </Col>
    )
}