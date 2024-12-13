import React, { useState } from 'react'
import { Card, CardBody, Col, Input, Label, Table } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { StudentDetailsTitle } from '../../../../Utils/Constants'
import StudentDetailsBody from './StudentDetailsBody';

export default function StudentDetails() {
    const [filterText, setFilterText] = useState('');
    return (
        <Col xxl={6} xl={7} sm={6} className="order-xxl-0 order-xl-1 box-col-12">
            <Card>
                <CommonCardHeader headClass='card-no-border pb-0' title={StudentDetailsTitle} />
                <CardBody className="pt-0 details-table">
                    <div className="table-responsive theme-scrollbar">
                        <div className="dataTables_wrapper no-footer">
                            <div id="student-detail_filter" className="dataTables_filter">
                                <Label className='d-flex'> Search:
                                    <Input type="search" value={filterText} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} />
                                </Label>
                            </div>
                            <Table className="display mt-0 dataTable no-footer" id="student-detail" borderless>
                                <thead>
                                    <tr role="row">
                                        <th className='sorting_disabled' rowSpan={1} colSpan={1}>Customer</th>
                                        <th className='sorting_disabled' rowSpan={1} colSpan={1}>Poduct</th>
                                        <th className='sorting_disabled' rowSpan={1} colSpan={1}>QTY</th>
                                        <th className='sorting_disabled' rowSpan={1} colSpan={1}>Attendance</th>
                                        <th className='sorting_disabled text-center' rowSpan={1} colSpan={1}>rating</th>
                                    </tr>
                                </thead>
                                <StudentDetailsBody filterText={filterText} />
                            </Table>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}