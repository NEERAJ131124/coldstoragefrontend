import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { BadgeIconTitle } from '../../../../Utils/Constants'
import { badgeIconData, badgeWithIconSubTitle } from '../../../../Data/UiKits/Tag&Pills'
import { Badges } from '../../../../AbstractElements'

export default function BadgeWithIcon() {
    return (
        <Col sm={12} xl={6}>
            <Card>
                <CommonCardHeader title={BadgeIconTitle} subTitle={badgeWithIconSubTitle} />
                <CardBody>
                    <div className='badge-spacing'>
                        {badgeIconData && badgeIconData.map((item) => (
                            <Badges color={item.color} className={`${item.id === 1 ? 'text-light' : ''} ${item.id === 7 ? 'text-dark' : ''}`} key={item.id}>
                                {item.iconName}
                            </Badges>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
