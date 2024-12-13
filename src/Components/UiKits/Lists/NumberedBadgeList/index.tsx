import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { NumberedBadgeListTitle } from '../../../../Utils/Constants'
import { badgeListData, numBadgeListSubTitle } from '../../../../Data/UiKits/Lists'
import { Badges, LI, OL } from '../../../../AbstractElements'

export default function NumberedBadgeList() {
    return (
        <Col xxl={4} md={6}>
            <Card>
                <CommonCardHeader title={NumberedBadgeListTitle} subTitle={numBadgeListSubTitle} />
                <CardBody>
                    <OL className='list-group list-group-numbered badge-list'>
                        {badgeListData && badgeListData.map((item, index) => (
                            <LI className='d-flex justify-content-between align-items-start flex-wrap' key={index}>
                                <div>{item.text}</div>
                                <Badges color={item.badgeClass} className={`p-2 ${item.badgeClass !== 'warning' ? 'text-white' : ''}`} pill>
                                    {item.badgeText}
                                </Badges>
                            </LI>
                        ))}
                    </OL>
                </CardBody>
            </Card>
        </Col>
    )
}