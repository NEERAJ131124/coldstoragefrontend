import React, { useState } from 'react'
import { Card, Col, Input, Label, Table } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { BestSellTitle } from '../../../../Utils/Constants'
import BestSellBody from './BestSellBody';

export default function BestSell() {
    const [filterText, setFilterText] = useState('');

    return (
        <Col xxl={6} xl={7} className="order-xl-1 order-xxl-0 box-col-12">
            <Card className="best-sell">
                <CommonCardHeader headClass='card-no-border pb-0' title={BestSellTitle} />
                <div className="card-body pt-0">
                    <div className="table-responsive theme-scrollbar">
                        <div className="dataTables_wrapper no-footer">
                            <div id="best-sell_filter" className="dataTables_filter">
                                <Label className='d-flex'> Search:
                                    <Input type="search" value={filterText} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} />
                                </Label>
                            </div>
                            <Table className="display mt-0 dataTable no-footer" id="best-sell" borderless>
                                <thead>
                                    <tr role="row">
                                        <th className="sorting_disabled" rowSpan={1} colSpan={1}>{'Customer'}</th>
                                        <th className="sorting_disabled" rowSpan={1} colSpan={1}>{'Date'}</th>
                                        <th className="sorting_disabled" rowSpan={1} colSpan={1}>{'Product'}</th>
                                        <th className="sorting_disabled" rowSpan={1} colSpan={1}>{'Country'}</th>
                                        <th className="sorting_disabled" rowSpan={1} colSpan={1}>{'Total'}</th>
                                        <th className="text-center sorting_disabled" rowSpan={1} colSpan={1}>{'Status'}</th>
                                    </tr>
                                </thead>
                                <BestSellBody filterText={filterText} />
                            </Table>
                        </div>
                    </div>
                </div>
            </Card>
        </Col>
    )
}