import { TabContent, TabPane } from 'reactstrap'
import React from 'react'
import { SimpleTabContentProp } from '../../../../Types/UiKits.type'
import { tabIconData } from '../../../../Data/UiKits/Tabs'

export default function IconTabContent({ tabId }: SimpleTabContentProp) {
    return (
        <TabContent activeTab={tabId}>
            {tabIconData && tabIconData.map((item, index) => (
                <TabPane tabId={item.id} key={index}>
                    {item.text}
                </TabPane>
            ))}
        </TabContent>
    )
}
