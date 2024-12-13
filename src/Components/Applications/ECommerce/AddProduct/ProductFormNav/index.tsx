import React from 'react'
import { Col, Nav, NavItem, NavLink } from 'reactstrap'
import { ProductFormNavProps } from '../../../../../Types/ECommerce.type'
import { Href } from '../../../../../Utils/Constants'
import { H5, P } from '../../../../../AbstractElements'
import { addProductNav } from '../../../../../Data/Applications/ECommerce/Product'
import DashboardSvgIcon from '../../../../../Utils/CommonComponents/DashboardSvgIcon'

export default function ProductFormNav({ steps, setSteps }: ProductFormNavProps) {
    return (
        <Col xxl={3} xl={4} className="box-col-4e sidebar-left-wrapper">
            <Nav className="sidebar-left-icons" pills>
                {addProductNav.map((data) => (
                    <NavItem key={data.id}>
                        <NavLink className={`${steps === data.id ? "active" : ''}`} href={Href} onClick={() => setSteps(data.id)}>
                            <div className="nav-rounded">
                                <div className="product-icons">
                                    <DashboardSvgIcon className="stroke-icon" iconId={data.icon} />
                                </div>
                            </div>
                            <div className="product-tab-content">
                                <H5>{data.title}</H5>
                                <P>{data.subTitle}</P>
                            </div>
                        </NavLink>
                    </NavItem>
                ))}
            </Nav>
        </Col>
    )
}