import React, { useState } from 'react'
import { Card, CardBody, Col, Input, Label, Table } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { TransitionHistoryTitle } from '../../../../Utils/Constants'
import { transitionHistoryHead } from '../../../../Data/Dashboard/Default';
import TransitionHistoryBody from './TransitionHistoryBody';

export default function TransitionHistory() {
    const [filterText, setFilterText] = useState('');
    
    return (
        <Col xxl={6} xl={8} lg={12} md={6} className="proorder-xxl-8 box-col-7">
            <Card>
                <CommonCardHeader title={TransitionHistoryTitle} headClass="card-no-border pb-0" />
                <CardBody className="transaction-history pt-0">
                    <div className="table-responsive theme-scrollbar">
                        <div className="dataTables_wrapper no-footer">
                            <div id="transaction_filter" className="dataTables_filter">
                                <Label className='d-flex'> Search:
                                    <Input type="search" value={filterText} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} />
                                </Label>
                            </div>
                            <Table className="display table-bordernone dataTable no-footer" id="transaction">
                                <thead>
                                    <tr role='row'>
                                        {transitionHistoryHead.map((item, index) => (
                                            <th key={index} className={`sorting_disabled ${index === 4 ? 'text-center' : ''}`} rowSpan={1} colSpan={1}>
                                                {item}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <TransitionHistoryBody filterText={filterText} />
                            </Table>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}