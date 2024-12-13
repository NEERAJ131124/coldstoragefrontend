import React from 'react'
import { TabContent, TabPane } from 'reactstrap'
import { SimpleTabContentProp } from '../../../../Types/UiKits.type'
import { simpleTabData } from '../../../../Data/UiKits/Tabs'

export default function SimpleTabContent({ tabId }: SimpleTabContentProp) {
    return (
        <TabContent activeTab={tabId}>
            {simpleTabData && simpleTabData.map((item, index) => (
                <TabPane tabId={item.id} key={index}>
                    {item.text}
                </TabPane>
            ))}
        </TabContent>
    )
}
