import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { PillIconsTitle } from '../../../../Utils/Constants'
import { badgeIconData, roundedPillSubTitle } from '../../../../Data/UiKits/Tag&Pills'
import { Badges } from '../../../../AbstractElements'

export default function PillsIcon() {
    return (
        <Col sm={12} xl={6}>
            <Card>
                <CommonCardHeader title={PillIconsTitle} subTitle={roundedPillSubTitle} />
                <CardBody>
                    <div className='badge-spacing'>
                        {badgeIconData && badgeIconData.map((item, index) => (
                            <Badges color={item.color} className={`rounded-circle ${item.color === 'light' ? 'text-dark' : ''}`} key={index}>
                                {item.iconName}
                            </Badges>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
