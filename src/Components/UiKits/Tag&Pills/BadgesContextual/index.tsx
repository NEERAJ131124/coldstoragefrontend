import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { BadgesContextualTitle } from '../../../../Utils/Constants'
import { badgesContextualSubTitle, badgesData } from '../../../../Data/UiKits/Tag&Pills'
import { Badges } from '../../../../AbstractElements'

export default function BadgesContextual() {
    return (
        <Col sm={12} xl={6}>
            <Card>
                <CommonCardHeader title={BadgesContextualTitle} subTitle={badgesContextualSubTitle} />
                <CardBody>
                    <div className="badge-spacing">
                        {badgesData && badgesData.map((item) => (
                            <Badges color={item.class} className={item.class === 'light' ? 'text-dark' : ''} key={item.id}>{item.text}</Badges>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
