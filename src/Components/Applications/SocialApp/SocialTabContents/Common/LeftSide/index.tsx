import React from 'react'
import { Col } from 'reactstrap'
import MyProfileCard from './MyProfileCard'
import MutualFriends from './MutualFriends'
import ActivityFeed from './ActivityFeed'

export default function LeftSide() {
    return (
        <Col xl={3} lg={12} md={5} className="xl-40 box-col-4">
            <div className="default-according style-1 faq-accordion">
                <MyProfileCard />
                <MutualFriends />
                <ActivityFeed />
            </div>
        </Col>
    )
}