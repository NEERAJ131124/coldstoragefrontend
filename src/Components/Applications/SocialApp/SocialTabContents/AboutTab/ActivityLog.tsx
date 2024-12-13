import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { ActivityLogTitle } from '../../../../../Utils/Constants'
import { H5, P } from '../../../../../AbstractElements'
import { activityLogData } from '../../../../../Data/Applications/SocialApp'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'

export default function ActivityLog() {
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader title={ActivityLogTitle} />
                <CardBody>
                    <div className="activity-log">
                        {activityLogData.map((data) => (
                            <div className="my-activity" key={data.id}>
                                <H5 className="f-w-700 mb-3">{data.title}</H5>
                                {data.child.map((item) => (
                                    <P key={item.id}>
                                        <span> {item.icon}</span>
                                        {item.text}
                                    </P>
                                ))}
                            </div>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}