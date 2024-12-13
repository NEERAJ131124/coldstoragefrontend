import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import { learningListData } from '../../../../Data/Miscellaneous/Learning'
import { H5, Image, LI, P, UL } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Utils'

export default function BlogBoxList() {
    return (
        <>
            {learningListData.map((data) => (
                <Col xl={12} key={data.id}>
                    <Card>
                        <Row className="blog-box blog-list">
                            <Col sm={5}><Image className="img-fluid sm-100-w" src={dynamicImage(`faq/${data.image}`)} alt="" /></Col>
                            <Col sm={7}>
                                <div className="blog-details">
                                    <div className="blog-date"><span>{data.date}</span> {data.month}</div>
                                    <H5>{data.title}</H5>
                                    <div className="blog-bottom-content">
                                        <UL className="blog-social simple-list flex-row">
                                            <LI>{data.by}</LI>
                                            <LI>{data.hits}</LI>
                                        </UL>
                                        <hr />
                                        <P className="mt-0">{data.paragraph}</P>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            ))}
        </>
    )
}