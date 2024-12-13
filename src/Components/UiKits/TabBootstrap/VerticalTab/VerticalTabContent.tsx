import React from 'react'
import { SimpleTabContentProp } from '../../../../Types/UiKits.type'
import { TabContent, TabPane } from 'reactstrap'
import { verticalTabData } from '../../../../Data/UiKits/Tabs'

export default function VerticalTabContent({ tabId }: SimpleTabContentProp) {
    return (
        <TabContent activeTab={tabId}>
            {verticalTabData && verticalTabData.map((item, index) => (
                <TabPane tabId={item.id} key={index}>
                    {item.text}
                </TabPane>
            ))}
        </TabContent>
    )
}
