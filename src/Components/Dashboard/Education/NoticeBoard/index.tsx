import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import DropdownWithHeader from '../../../../Utils/CommonComponents/DropdownWithHeader'
import { monthlyDropdownList } from '../../../../Data/Dashboard/Default'
import { NoticeBoardTitle } from '../../../../Utils/Constants'
import { H6, Image, LI, P, UL } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Utils'
import { noticeBoardData } from '../../../../Data/Dashboard/Project'

export default function NoticeBoard() {
    return (
        <Col xxl={3} xl={4} sm={6} className="box-col-5 box-order-1">
            <Card>
                <DropdownWithHeader end headerClass='card-no-border pb-0' heading={NoticeBoardTitle} dropDownClass='icon-dropdown' dropDownIcon dropDownList={monthlyDropdownList} />
                <CardBody className="notice-board">
                    <UL className='simple-list'>
                        {noticeBoardData.map((item) => (
                            <LI className="d-flex gap-2" key={item.id}>
                                <div className="flex-shrink-0">
                                    <Image className="img-fluid" src={dynamicImage(`dashboard-1/news-update/${item.image}`)} alt="" />
                                </div>
                                <div className="flex-grow-1">
                                    <H6>{item.title}</H6>
                                    <P className="text-truncate">{'Wed, Feb 24,2024; 12:00 pm-1:00pm'}</P>
                                </div>
                            </LI>
                        ))}
                    </UL>
                </CardBody>
            </Card>
        </Col>
    )
}