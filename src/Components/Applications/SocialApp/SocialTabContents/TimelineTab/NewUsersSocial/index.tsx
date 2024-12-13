import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import NewUsersHeader from './NewUsersHeader'
import { Image, P } from '../../../../../../AbstractElements'
import { dynamicImage } from '../../../../../../Utils'
import LikeContent from './LikeContent'
import { Href } from '../../../../../../Utils/Constants'
import { newUsersSocialData } from '../../../../../../Data/Applications/SocialApp'
import CommentBox from './CommentBox'

export default function NewUsersSocial() {
    return (
        <Row>
            {newUsersSocialData.map((data) => (
                <Col sm={12} key={data.id}>
                    <Card>
                        <CardBody>
                            <NewUsersHeader />
                            <Image className="img-fluid" alt="" src={dynamicImage(`social-app/timeline-${data.image}`)} />
                            <div className="timeline-content">
                                <P>{data.paragraph}</P>
                                <LikeContent />
                                <div className="social-chat">
                                    {data.child.map((item) => (
                                        <div className={item.divClass} key={item.id}>
                                            <div className="d-flex gap-3">
                                                <Image className="img-50 img-fluid m-r-20 rounded-circle" alt="" src={dynamicImage(`user/${item.src}`)} />
                                                <div className="flex-grow-1">
                                                    <span className="f-w-700">{item.name} <span>{item.time} <i className="fa-solid fa-reply font-primary" /></span></span>
                                                    <P>{item.paragraph}</P>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="text-center"><a href={Href}>{'More Comments'}</a></div>
                                </div>
                                <CommentBox />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}