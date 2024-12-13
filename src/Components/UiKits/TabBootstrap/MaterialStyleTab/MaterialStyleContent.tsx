import React from 'react'
import { SimpleTabContentProp } from '../../../../Types/UiKits.type'
import { TabContent, TabPane } from 'reactstrap'
import { materialData } from '../../../../Data/UiKits/Tabs'

export default function MaterialStyleContent({ tabId }: SimpleTabContentProp) {
    return (
        <TabContent activeTab={tabId}>
            {materialData && materialData.map((item, index) => (
                <TabPane tabId={item.id} key={index}>
                    {item.text}
                </TabPane>
            ))}
        </TabContent>
    )
}
