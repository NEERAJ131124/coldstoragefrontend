import React from 'react'
import { Row, TabContent, TabPane } from 'reactstrap'
import { SocialTabContentsType } from '../../../../Types/SocialApp.type'
import TimelineTab from './TimelineTab'
import AboutTab from './AboutTab'
import SocialProfileCards from '../../../../Utils/CommonComponents/CommonUserProfile/SocialProfileCards'
import Photos from './Photos'

export default function SocialTabContents({ activeTab }: SocialTabContentsType) {
    return (
        <TabContent activeTab={activeTab}>
            <TabPane tabId={1}>
                <TimelineTab />
            </TabPane>
            <TabPane tabId={2}>
                <AboutTab />
            </TabPane>
            <TabPane tabId={3}>
                <Row>
                    <SocialProfileCards />
                </Row>
            </TabPane>
            <TabPane tabId={4}>
                <Photos />
            </TabPane>
        </TabContent>
    )
}