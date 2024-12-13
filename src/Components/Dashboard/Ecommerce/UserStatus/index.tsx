import React from 'react'
import { Card, CardBody, Col, Table } from 'reactstrap'
import DropdownWithHeader from '../../../../Utils/CommonComponents/DropdownWithHeader'
import { monthlyDropdownList } from '../../../../Data/Dashboard/Default'
import { UserStatusTitle } from '../../../../Utils/Constants'
import UserStatusBody from './UserStatusBody'

export default function UserStatus() {
    return (
        <Col xxl={4} xl={5} md={7} className="box-col-5">
            <Card>
                <DropdownWithHeader end headerClass='pb-0 card-no-border' heading={UserStatusTitle} dropDownList={monthlyDropdownList} dropDownClass='icon-dropdown' dropDownIcon />
                <CardBody className="pt-0 user-status">
                    <div className="table-responsive theme-scrollbar">
                        <Table className="display" id="user-status" borderless>
                            <thead>
                                <tr>
                                    <th>{'Customer'}</th>
                                    <th>{'country'}</th>
                                    <th className="text-center">{'Popular'}</th>
                                </tr>
                            </thead>
                            <UserStatusBody/>
                        </Table>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}