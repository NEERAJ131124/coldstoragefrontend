import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { smallWidgetData } from '../../../../Data/Widgets/General'
import { H4 } from '../../../../AbstractElements'
import DashboardSvgIcon from '../../../../Utils/CommonComponents/DashboardSvgIcon'

export default function SmallWidget() {
    return (
        <>
            {smallWidgetData.map((item) => (
                <Col sm={6} key={item.id}>
                    <Card className="small-widget mb-sm-0">
                        <CardBody className={item.color}>
                            <span className="f-light">{item.text}</span>
                            <div className="d-flex align-items-end gap-1">
                                <H4>{item.rate}</H4>
                                <span className={`font-${item.color} f-12 f-w-500`}>
                                    <i className={`icon-arrow-${item.arrow}`} />
                                    <span>{item.percent}{'%'}</span>
                                </span>
                            </div>
                            <div className="bg-gradient">
                                <DashboardSvgIcon className="stroke-icon svg-fill" iconId={item.icon} />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </>
    )
}