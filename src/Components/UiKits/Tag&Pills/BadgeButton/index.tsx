import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { BadgeButtonsTitle } from '../../../../Utils/Constants'
import { badgeButtonData, badgeButtonSubTitle } from '../../../../Data/UiKits/Tag&Pills'
import { Badges, Btn } from '../../../../AbstractElements'

export default function BadgeButton() {
    return (
        <Col sm={12} xl={6}>
            <Card>
                <CommonCardHeader title={BadgeButtonsTitle} subTitle={badgeButtonSubTitle} />
                <CardBody>
                    <div className='badge-spacing flex-column align-items-start'>
                        {badgeButtonData && badgeButtonData.map((item, index) => (
                            <Btn color={item.class} className={`d-flex align-items-center ${item.class === 'info' ? 'text-light' : ''}`} key={index}>
                                {item.text}
                                <Badges color="transparent" className="rounded-circle btn-p-space btn-light text-dark ms-2">
                                    {item.iconName}
                                </Badges>
                            </Btn>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
