import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import { Archive, ArrowRight, FileText } from 'react-feather'
import { Badges, H3, H6, LI, UL } from '../../../AbstractElements'
import { BrowseArticlesHeader, BrowseArticlesTitle, Href } from '../../../Utils/Constants'
import CommonCardHeader from '../../../Utils/CommonComponents/CommonCardHeader'
import { knowledgeBaseData } from '../../../Data/Miscellaneous/Knowledgebase'

export default function BrowseArticles() {
    return (
        <Col sm={12}>
            <div className="header-faq">
                <H3 className="mb-0">{BrowseArticlesTitle}</H3>
            </div>
            <Row>
                <Col sm={12}>
                    <Card>
                        <CommonCardHeader title={BrowseArticlesHeader} />
                        <CardBody>
                            <Row className="browse g-sm-4 g-3">
                                {knowledgeBaseData.map((data) => (
                                    <Col xl={4} className={data.id === 9 ? 'xl-100' : 'xl-50 col-md-6'} key={data.id}>
                                        <div className={`browse-articles ${data.id > 3 ? 'browse-bottom' : ''}`}>
                                            <H6> <span><Archive /></span> {data.title}</H6>
                                            <UL className='simple-list'>
                                                {data.knowledgeList &&
                                                    data.knowledgeList.map((data, index) => (
                                                        <LI key={index}>
                                                            <a href={Href}>
                                                                {data.fileTextIcon ? (<span><FileText /></span>) : (<span><ArrowRight /></span>)}
                                                                <span>{data.text}</span>
                                                                {data.badge ? (<Badges color='primary' className="pull-right">{data.badge}</Badges>) : (" ")}
                                                            </a>
                                                        </LI>
                                                    ))}
                                            </UL>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Col>
    )
}