import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { PillsContextualTitle } from '../../../../Utils/Constants'
import { badgesData, pillsContextualSubTitle } from '../../../../Data/UiKits/Tag&Pills'
import { Badges } from '../../../../AbstractElements'

export default function PillsContextual() {
    return (
        <Col sm={12} xl={6}>
            <Card>
                <CommonCardHeader title={PillsContextualTitle} subTitle={pillsContextualSubTitle} />
                <CardBody>
                    <div className='badge-spacing'>
                        {badgesData && badgesData.map((item) => (
                            <Badges color={item.class} className={item.class === 'light' ? 'text-dark' : ''} key={item.id} pill>{item.text}</Badges>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
