import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { H3, P } from '../../../AbstractElements'
import { FaqWidgetsProp } from '../../../Types/Miscellaneous.type'

export default function FaqWidgets({ data }: FaqWidgetsProp) {
    return (
        <>
            {data.map((item) => (
                <Col xl={4} className={item.colClass} key={item.id}>
                    <Card className="bg-primary">
                        <CardBody>
                            <div className="d-flex faq-widgets">
                                <div className="flex-grow-1">
                                    <H3>{item.title}</H3>
                                    <P>{'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'}</P>
                                </div>
                                {item.icon}
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </>
    )
}