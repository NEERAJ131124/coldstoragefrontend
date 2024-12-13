import React from 'react'
import { Card, CardBody, Col, FormGroup, Input, Label } from 'reactstrap'
import { Link } from 'react-router-dom'
import DropdownWithHeader from '../../../../Utils/CommonComponents/DropdownWithHeader'
import { ToDoListTitle } from '../../../../Utils/Constants'
import { monthlyDropdownList } from '../../../../Data/Dashboard/Default'
import { H5, H6, LI, UL } from '../../../../AbstractElements'
import { toDoListData } from '../../../../Data/Dashboard/Project'

export default function ToDoList() {
    return (
        <Col xxl={3} xl={4} sm={6} className="box-col-6">
            <Card>
                <DropdownWithHeader end headerClass='card-no-border pb-0' heading={ToDoListTitle} dropDownClass='icon-dropdown' dropDownIcon dropDownList={monthlyDropdownList} />
                <CardBody className="todo-list filled-checkbox">
                    <UL className='simple-list'>
                        {toDoListData.map((item) => (
                            <LI className={`d-flex line-${item.color}`} key={item.id}>
                                <div className="flex-shrink-0">
                                    <FormGroup className="checkbox checkbox-solid-primary" check>
                                        <Input id="solid1" type="checkbox" defaultChecked={item.check ? true : false} />
                                        <Label htmlFor="solid1" check />
                                    </FormGroup>
                                </div>
                                <div className="flex-grow-1">
                                    <Link to={`${process.env.PUBLIC_URL}/app/task`}>
                                        <H5 className="f-w-500">{item.title}</H5>
                                    </Link>
                                    <H6>{item.text}</H6>
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