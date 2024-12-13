import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import DashboardSvgIcon from '../../../../Utils/CommonComponents/DashboardSvgIcon'
import { H4 } from '../../../../AbstractElements'
import { widgetContentData } from '../../../../Data/Widgets/General'

export default function WidgetContent() {
    return (
        <>
            {widgetContentData.map((item) => (
                <Col sm={6} xl={3} className="box-col-6" key={item.id}>
                    <Card className="widget-1">
                        <CardBody>
                            <div className="widget-content">
                                <div className={`widget-round ${item.color}`}>
                                    <div className="bg-round">
                                        <DashboardSvgIcon className='svg-fill' iconId={item.icon} />
                                        <DashboardSvgIcon className='half-circle svg-fill' iconId='halfcircle' />
                                    </div>
                                </div>
                                <div>
                                    <H4>{item.rate}</H4><span className="f-light">{item.text}</span>
                                </div>
                            </div>
                            <div className={`font-${item.color} f-w-500`}>
                                <i className={`icon-arrow-${item.arrow} icon-rotate me-1`} /><span>{item.percent}{'%'}</span>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </>
    )
}
