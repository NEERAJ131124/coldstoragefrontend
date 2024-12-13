import React from 'react'
import { TabContent, TabPane } from 'reactstrap'
import { SimpleTabContentProp } from '../../../../Types/UiKits.type'
import { borderData } from '../../../../Data/UiKits/Tabs'

export default function BorderTabContent({ tabId }: SimpleTabContentProp) {
    return (
        <TabContent activeTab={tabId}>
            {borderData && borderData.map((item, index) => (
                <TabPane tabId={item.id} key={index}>
                    {item.text}
                </TabPane>
            ))}
        </TabContent>
    )
}