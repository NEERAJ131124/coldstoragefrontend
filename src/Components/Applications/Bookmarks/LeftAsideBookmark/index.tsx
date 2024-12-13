import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import { Btn, H4, Image, P } from '../../../../AbstractElements';
import { BookmarkFilter } from '../../../../Utils/Constants';
import { dynamicImage } from '../../../../Utils';
import BookmarkNavTabs from './BookmarkNavTabs';

export default function LeftAsideBookmark() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => { setIsOpen(!isOpen); };
    return (
        <Col xl={3} className="box-col-6">
            <div className="md-sidebar">
                <Btn color='primary' className="md-sidebar-toggle" onClick={toggle}>{BookmarkFilter}</Btn>
                <div className={`md-sidebar-aside job-left-aside custom-scrollbar ${isOpen ? 'open' : ''}`}>
                    <div className="email-left-aside">
                        <Card>
                            <CardBody>
                                <div className="email-app-sidebar left-bookmark">
                                    <div className="d-flex flex-wrap">
                                        <div className="media-size-email">
                                            <Image className="me-3 rounded-circle" src={dynamicImage(`user/user.png`)} alt="" />
                                        </div>
                                        <div className="flex-grow-1">
                                            <H4 className="f-w-600">{'MARK JENCO'}</H4>
                                            <P>{'Markjecno@gmail.com'}</P>
                                        </div>
                                    </div>
                                    <BookmarkNavTabs />
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </Col>
    )
}