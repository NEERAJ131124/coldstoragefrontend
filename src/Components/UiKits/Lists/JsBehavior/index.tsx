import React, { useState } from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { JsBehaviorTitle } from '../../../../Utils/Constants'
import { behaviourListNav, jsBehaviorSubTitle } from '../../../../Data/UiKits/Lists'
import { LI, UL } from '../../../../AbstractElements'
import JsBehaviorContent from './JsBehaviorContent'

export default function JsBehavior() {
    const [activeList, setActiveList] = useState('Home')

    return (
        <Col sm={12} xl={12}>
            <Card>
                <CommonCardHeader title={JsBehaviorTitle} subTitle={jsBehaviorSubTitle} />
                <CardBody className='behaviour-list'>
                    <Row>
                        <Col sm={4}>
                            <UL>
                                {behaviourListNav.map((item, index) => (
                                    <LI key={index} className={`list-group-item-action ${index === 0 ? 'bg-primary' : 'list-hover-primary'} ${activeList === item ? 'active' : ''}`}
                                        onClick={() => { setActiveList(item) }}>
                                        {item}
                                    </LI>
                                ))}
                            </UL>
                        </Col>
                        <Col sm={8}>
                            <JsBehaviorContent tabId={activeList} />
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
