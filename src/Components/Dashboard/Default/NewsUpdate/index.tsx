import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import DropdownWithHeader from '../../../../Utils/CommonComponents/DropdownWithHeader'
import { NewsUpdateData, monthlyDropdownList } from '../../../../Data/Dashboard/Default'
import { NewsUpdateTitle } from '../../../../Utils/Constants'
import { H6, Image, LI, P, UL } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Utils'

export default function NewsUpdate() {
    return (
        <Col xxl={3} xl={4} md={6} className="proorder-xxl-10 box-col-6">
            <Card className="height-equal">
                <DropdownWithHeader end headerClass='pb-0 card-no-border' heading={NewsUpdateTitle} dropDownList={monthlyDropdownList} dropDownClass='icon-dropdown' dropDownIcon />
                <CardBody className="news-update">
                    <UL className='simple-list'>
                        {NewsUpdateData.map((item) => (
                            <LI className="d-flex gap-2" key={item.id}>
                                <div className="flex-shrink-0">
                                    <Image className="img-fluid" src={dynamicImage(`dashboard-1/news-update/${item.image}`)} alt="" />
                                </div>
                                <div className="flex-grow-1">
                                    <Link to={`${process.env.PUBLIC_URL}/chat/private_chat`}>
                                        <H6>{item.title}</H6>
                                    </Link>
                                    <P className="text-truncate">{item.text}</P>
                                </div>
                                <span>{item.time}</span>
                            </LI>
                        ))}
                    </UL>
                </CardBody>
            </Card>
        </Col>
    )
}