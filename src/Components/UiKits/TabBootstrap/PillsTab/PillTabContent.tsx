import React from 'react'
import { TabContent, TabPane } from 'reactstrap'
import { SimpleTabContentProp } from '../../../../Types/UiKits.type'
import { pillTabData } from '../../../../Data/UiKits/Tabs'

export default function PillTabContent({ tabId }: SimpleTabContentProp) {
    return (
        <TabContent activeTab={tabId}>
            {pillTabData && pillTabData.map((item, index) => (
                <TabPane tabId={item.id} key={index}>
                    {item.text}
                </TabPane>
            ))}
        </TabContent>
    )
}
