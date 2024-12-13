import React, { useState } from 'react'
import { Card, CardBody, Col, Input, Label, Table } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { AssignmentsTitle } from '../../../../Utils/Constants'
import AssignmentsBody from './AssignmentsBody';

export default function Assignments() {
    const [filterText, setFilterText] = useState('');

    return (
        <Col xxl={6} xl={7} md={6} className="order-xxl-0 order-xl-3 box-col-7 box-order-2">
            <Card>
                <CommonCardHeader headClass='card-no-border pb-0' title={AssignmentsTitle} />
                <CardBody className="pt-0 assignment-table">
                    <div className="table-responsive theme-scrollbar">
                        <div className="dataTables_wrapper no-footer">
                            <div id="assignment_filter" className="dataTables_filter">
                                <Label className='d-flex'> Search:
                                    <Input type="search" value={filterText} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} />
                                </Label>
                            </div>
                            <Table className="display pt-0 dataTable no-footer" id="assignment" borderless>
                                <thead>
                                    <tr role="row">
                                        <th className='sorting_disabled' rowSpan={1} colSpan={1}>{'Customer'}</th>
                                        <th className='sorting_disabled' rowSpan={1} colSpan={1}>{'Subject'}</th>
                                        <th className='sorting_disabled' rowSpan={1} colSpan={1}>{'Start Date'}</th>
                                        <th className='sorting_disabled text-center' rowSpan={1} colSpan={1}>{'Status'}</th>
                                        <th className='sorting_disabled text-center' rowSpan={1} colSpan={1}>{'submit date'}</th>
                                    </tr>
                                </thead>
                                <AssignmentsBody filterText={filterText} />
                            </Table>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}