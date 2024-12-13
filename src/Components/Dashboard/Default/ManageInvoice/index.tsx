import React, { useState } from 'react'
import { Card, CardBody, Col, FormGroup, Input, Label, Table } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { ManageInvoiceTitle } from '../../../../Utils/Constants'
import ManageInvoiceBody from './ManageInvoiceBody'

export default function ManageInvoice() {
    const [filterText, setFilterText] = useState('');
    return (
        <Col xxl={6} xl={7} md={6} className="proorder-xxl-5 box-col-6">
            <Card className="height-equal">
                <CommonCardHeader headClass='card-no-border pb-0' title={ManageInvoiceTitle} />
                <CardBody className="pt-0 manage-invoice filled-checkbox">
                    <div className="table-responsive theme-scrollbar">
                        <div className="dataTables_wrapper no-footer">
                            <div id="manage-invoice_filter" className="dataTables_filter">
                                <Label className='d-flex'> Search:
                                    <Input type="search" value={filterText} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} />
                                </Label>
                            </div>
                            <Table className="display mt-0 dataTable no-footer" id="manage-invoice" borderless>
                                <thead>
                                    <tr role="row">
                                        <th className='sorting_disabled' rowSpan={1} colSpan={1}>
                                            <FormGroup className="form-check checkbox checkbox-solid-primary">
                                                <Input id="solid" type="checkbox" />
                                                <Label htmlFor="solid" check />
                                            </FormGroup>
                                        </th>
                                        <th className='sorting_disabled' rowSpan={1} colSpan={1}>{'Clinet'}</th>
                                        <th className='sorting_disabled' rowSpan={1} colSpan={1}>{'Date'}</th>
                                        <th className='sorting_disabled' rowSpan={1} colSpan={1}>{'Payment'}</th>
                                        <th className='sorting_disabled' rowSpan={1} colSpan={1}>{'Id No'}</th>
                                        <th className='sorting_disabled' rowSpan={1} colSpan={1}>{'Amount'}</th>
                                        <th className='sorting_disabled text-center' rowSpan={1} colSpan={1}>{'Status'}</th>
                                    </tr>
                                </thead>
                                <ManageInvoiceBody filterText={filterText} />
                            </Table>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}