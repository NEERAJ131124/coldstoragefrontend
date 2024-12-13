import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import { H6, Image, LI, P, UL } from '../../../../AbstractElements'
import DropdownWithHeader from '../../../../Utils/CommonComponents/DropdownWithHeader'
import { dynamicImage } from '../../../../Utils'
import { monthlyDropdownList } from '../../../../Data/Dashboard/Default'
import DashboardSvgIcon from '../../../../Utils/CommonComponents/DashboardSvgIcon'
import { CommonListComponentProps } from '../../../../Types/Dashboard.type'

export default function CommonListComponent({ colClass, title, bodyClass, data }: CommonListComponentProps) {
    return (
        <Col xxl={3} xl={4} md={6} className={colClass}>
            <Card>
                <DropdownWithHeader end headerClass='pb-0 card-no-border' heading={title} dropDownList={monthlyDropdownList} dropDownIcon dropDownClass='icon-dropdown' />
                <CardBody className={bodyClass}>
                    <UL className='simple-list'>
                        {data.map((item) => (
                            <LI className="d-flex align-items-center gap-2" key={item.id}>
                                <div className={`flex-shrink-0 bg-${item.color}`}>
                                    {item.image && <Image src={dynamicImage(`dashboard-1/icon/${item.image}`)} alt="" />}
                                    {item.icon && <DashboardSvgIcon className={`stroke-icon stroke-${item.iconColor}`} iconId={item.icon} />}
                                </div>
                                <div className="flex-grow-1">
                                    <Link to={`${process.env.PUBLIC_URL}/ecommerce/product_page`}>
                                        <H6>{item.title}</H6>
                                    </Link>
                                    <P>{item.text}</P>
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