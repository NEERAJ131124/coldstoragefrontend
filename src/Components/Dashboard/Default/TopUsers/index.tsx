import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import DropdownWithHeader from '../../../../Utils/CommonComponents/DropdownWithHeader'
import { Href, TopUsersTitle } from '../../../../Utils/Constants'
import { monthlyDropdownList, topUsersData } from '../../../../Data/Dashboard/Default'
import { Btn, H6, Image, LI, P, UL } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Utils'
import DashboardSvgIcon from '../../../../Utils/CommonComponents/DashboardSvgIcon'

export default function TopUsers() {
    return (
        <Col xxl={3} xl={5} md={6} className="proorder-xxl-4 box-col-6">
            <Card>
                <DropdownWithHeader end headerClass='pb-0 card-no-border' heading={TopUsersTitle} dropDownList={monthlyDropdownList} dropDownClass='icon-dropdown' dropDownIcon />
                <CardBody className="top-user pt-2">
                    <UL className='simple-list'>
                        {topUsersData.map((item) => (
                            <LI key={item.id} className="d-flex align-items-center justify-content-between gap-2">
                                <div className="d-flex gap-2">
                                    <div className="flex-shrink-0 comman-round">
                                        <Image src={dynamicImage(`dashboard-1/user/${item.image}`)} alt="" />
                                    </div>
                                    <div>
                                        <a href={Href}><H6>{item.name}</H6></a>
                                        <P>
                                            <DashboardSvgIcon className="stroke-icon" iconId='map-icon' />
                                            {'Texas'}
                                        </P>
                                    </div>
                                </div>
                                <Btn color='transparent' className={`bg-light-${item.color} border-light-${item.color} text-${item.color}`}>
                                    {item.status}
                                </Btn>
                                <span>{'$'}{item.amount}</span>
                            </LI>
                        ))}
                    </UL>
                </CardBody>
            </Card>
        </Col>
    )
}