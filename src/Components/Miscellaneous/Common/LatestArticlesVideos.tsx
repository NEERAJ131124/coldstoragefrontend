import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import { H3, H5, P } from '../../../AbstractElements'
import { LatestArticlesVideosTitle } from '../../../Utils/Constants'
import { LatestArticlesVideosProps } from '../../../Types/Miscellaneous.type'

export default function LatestArticlesVideos({ titleClass, divClass, data }: LatestArticlesVideosProps) {
    return (
        <Col lg={12}>
            <div className="header-faq">
                <H3 className={`mb-0 ${titleClass}`}>{LatestArticlesVideosTitle}</H3>
            </div>
            <Row>
                {data.map((data) => (
                    <Col xl={4} className={data.id !== 3 ? 'col-md-6' : ''} key={data.id}>
                        <Row>
                            {data.child.map((item) => (
                                <div key={item.id} className={item.colClass}>
                                    <Card>
                                        <CardBody>
                                            <div className={`d-flex ${divClass}`}>
                                                {item.icon}
                                                <div className="flex-grow-1">
                                                    <H5 className="f-w-600">{item.title}</H5>
                                                    <P>{item.text}</P>
                                                </div>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </Row>
                    </Col>
                ))}
            </Row>
        </Col>
    )
}