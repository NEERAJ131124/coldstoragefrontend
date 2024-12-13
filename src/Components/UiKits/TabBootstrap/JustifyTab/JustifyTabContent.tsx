import React from 'react'
import { TabContent, TabPane } from 'reactstrap'
import { SimpleTabContentProp } from '../../../../Types/UiKits.type'
import { H6, Image, P } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Utils'
import { justifyTabData } from '../../../../Data/UiKits/Tabs'

export default function JustifyTabContent({ tabId }: SimpleTabContentProp) {
    return (
        <TabContent activeTab={tabId}>
            {justifyTabData && justifyTabData.map((item, index) => (
                <TabPane tabId={item.id} key={index}>
                    <div className='designer-details'>
                        {item.data && item.data.map((item, index) => (
                            <div className="designer-profile" key={index}>
                                <div className="designer-wrap">
                                    <Image className="designer-img" src={dynamicImage(item.image)} alt="profile" />
                                    <div className="designer-content">
                                        <H6>{item.head}</H6>
                                        <P>{item.text}</P>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </TabPane>
            ))}
        </TabContent>
    )
}
