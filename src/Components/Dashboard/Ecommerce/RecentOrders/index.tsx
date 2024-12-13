import React, { useState } from 'react'
import { Card, CardBody, Col, Input, Label, Table } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { RecentOrdersTitle } from '../../../../Utils/Constants'
import RecentOrdersBody from './RecentOrdersBody';

export default function RecentOrders() {
    const [filterText, setFilterText] = useState('');

    return (
        <Col xxl={6} xl={7} className="box-col-12">
            <Card>
                <CommonCardHeader headClass='card-no-border pb-0' title={RecentOrdersTitle} />
                <CardBody className="pt-0 recent-order">
                    <div className="table-responsive theme-scrollbar">
                        <div className="dataTables_wrapper no-footer">
                            <div id="recent-order_filter" className="dataTables_filter">
                                <Label className='d-flex'> Search:
                                    <Input type="search" value={filterText} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} />
                                </Label>
                            </div>
                            <Table className="display mt-0 dataTable no-footer" id="recent-order" borderless>
                                <thead>
                                    <tr role="row">
                                        <th className="sorting_disabled" rowSpan={1} colSpan={1}>{'Customer'}</th>
                                        <th className="sorting_disabled" rowSpan={1} colSpan={1}>{'Product'}</th>
                                        <th className="sorting_disabled" rowSpan={1} colSpan={1}>{'amount'}</th>
                                        <th className="sorting_disabled" rowSpan={1} colSpan={1}>{'vendor'}</th>
                                        <th className="sorting_disabled" rowSpan={1} colSpan={1}>{'status'}</th>
                                        <th className="text-center sorting_disabled" rowSpan={1} colSpan={1}>{'rating'}</th>
                                    </tr>
                                </thead>
                                <RecentOrdersBody filterText={filterText} />
                            </Table>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}