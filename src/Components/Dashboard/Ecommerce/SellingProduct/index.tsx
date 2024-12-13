import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import DropdownWithHeader from '../../../../Utils/CommonComponents/DropdownWithHeader'
import { monthlyDropdownList } from '../../../../Data/Dashboard/Default'
import { SellingProductTitle } from '../../../../Utils/Constants'
import { H5, H6, LI, P, UL } from '../../../../AbstractElements'
import { sellingProductData } from '../../../../Data/Dashboard/Ecommerce'
import DashboardSvgIcon from '../../../../Utils/CommonComponents/DashboardSvgIcon'

export default function SellingProduct() {
    return (
        <Col xxl={3} xl={4} md={7} sm={6} className="box-col-4">
            <Card className="selling-product">
                <DropdownWithHeader end headerClass='pb-0 card-no-border' heading={SellingProductTitle} dropDownList={monthlyDropdownList} dropDownClass='icon-dropdown' dropDownIcon />
                <CardBody>
                    <UL className='simple-list'>
                        {sellingProductData.map((item) => (
                            <LI className="d-flex align-items-center gap-2" key={item.id}>
                                <div className={`flex-shrink-0 bg-light-${item.color} border-light-${item.color}`}>
                                    <DashboardSvgIcon className={`stroke-icon stroke-${item.color}`} iconId={item.icon} />
                                </div>
                                <div className="flex-grow-1">
                                    <Link to={`${process.env.PUBLIC_URL}/ecommerce/product_page`}>
                                        <H6>{item.title}</H6>
                                    </Link>
                                    <P>{item.text}</P>
                                </div>
                                <div className="recent-text">
                                    <H5>{'$'}{item.amount}</H5>
                                    <P>{item.sale} {'Sales'}</P>
                                </div>
                            </LI>
                        ))}
                    </UL>
                </CardBody>
            </Card>
        </Col>
    )
}