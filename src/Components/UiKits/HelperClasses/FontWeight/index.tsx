import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { FontWeightTitle } from '../../../../Utils/Constants'
import { fontWeightData, fontWeightSubTitle } from '../../../../Data/UiKits/HelperClasses'

export default function FontWeight() {
    return (
        <Col md={6}>
            <Card>
                <CommonCardHeader title={FontWeightTitle} subTitle={fontWeightSubTitle} />
                <CardBody>
                    {fontWeightData && fontWeightData.map((item) => (
                        <div className={`d-flex align-items-center gap-2 ${item.id !== 6 ? 'mb-2' : ''}`} key={item.id}>
                            <div className={`f-w-${item.class}`}>
                                <span>{`You can set ${item.text} font weight heading .f-w-${item.class}`}</span>
                            </div>
                        </div>
                    ))}
                </CardBody>
            </Card>
        </Col>
    )
}
