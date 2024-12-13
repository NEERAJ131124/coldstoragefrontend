import React from 'react'
import { Card, CardBody, Col, Table } from 'reactstrap'
import { Link } from 'react-router-dom'
import DropdownWithHeader from '../../../../Utils/CommonComponents/DropdownWithHeader'
import { NewCoursesTitle } from '../../../../Utils/Constants'
import { monthlyDropdownList } from '../../../../Data/Dashboard/Default'
import { newCoursesData } from '../../../../Data/Dashboard/Project'
import { H5, Image, P } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Utils'

export default function NewCourses() {
    return (
        <Col xxl={3} xl={6} lg={6} md={7} className="order-xxl-0 order-xl-4 box-col-6">
            <Card>
                <DropdownWithHeader end headerClass='card-no-border pb-0' heading={NewCoursesTitle} dropDownClass='icon-dropdown' dropDownIcon dropDownList={monthlyDropdownList} />
                <CardBody className="course-table pt-0">
                    <div className="table-responsive">
                        <Table borderless>
                            <tbody>
                                {newCoursesData.map((item) => (
                                    <tr key={item.id}>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="flex-shrink-0 comman-round">
                                                    <div className="icon">
                                                        <Image className="img-fluid" src={dynamicImage(`dashboard-3/user/${item.image}`)} alt="chair" />
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <Link to={`${process.env.PUBLIC_URL}/ecommerce/product_page`}>
                                                        <H5>{item.name}</H5>
                                                    </Link>
                                                    <P>{item.text}</P>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <H5>{`${item.class} class`}</H5>
                                            <P>{`${item.time} hours`}</P>
                                        </td>
                                        <td>{`${item.left} days left`}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}