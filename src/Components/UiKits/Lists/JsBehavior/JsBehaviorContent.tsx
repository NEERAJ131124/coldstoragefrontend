import React from 'react'
import { TabContent, TabPane } from 'reactstrap'
import { jsBehaviorListData } from '../../../../Data/UiKits/Lists'
import { SimpleTabContentProp } from '../../../../Types/UiKits.type'

export default function JsBehaviorContent({ tabId }: SimpleTabContentProp) {
    return (
        <TabContent activeTab={tabId}>
            {jsBehaviorListData && jsBehaviorListData.map((item, index) => (
                <TabPane className={item.id === 'Profile' ? 'dark-list' : ''} tabId={item.id} key={index}>
                    {item.htmlText}
                </TabPane>
            ))}
        </TabContent>
    )
}
