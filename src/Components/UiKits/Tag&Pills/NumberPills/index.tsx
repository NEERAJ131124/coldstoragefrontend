import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { NumberPillsTitle } from '../../../../Utils/Constants'
import { badgesData, numberPillsSubTitle } from '../../../../Data/UiKits/Tag&Pills'
import { Badges } from '../../../../AbstractElements'

export default function NumberPills() {
    return (
        <Col sm={12} xl={6}>
            <Card>
                <CommonCardHeader title={NumberPillsTitle} subTitle={numberPillsSubTitle} />
                <CardBody>
                    <div className='badge-spacing'>
                        {badgesData && badgesData.map((item) => (
                            <Badges color={item.class} className={`rounded-circle ${item.class === 'light' ? 'text-dark' : ''}`} key={item.id}>
                                {item.id}
                            </Badges>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
