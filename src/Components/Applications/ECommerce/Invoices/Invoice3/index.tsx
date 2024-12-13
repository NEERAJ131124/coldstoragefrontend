import React, { useRef } from 'react'
import { Card, CardBody, Col, Container, Row, Table } from 'reactstrap';
import Print from '../Common/Print';
import InvoiceThreeHeader from './InvoiceThreeHeader';
import InvoiceClientDetail from './InvoiceClientDetail';
import InvoiceThreeTable from './InvoiceThreeTable';
import InvoiceBankTransfer from './InvoiceBankTransfer';
import Breadcrumbs from '../../../../../CommonElements/Breadcrumbs';
import { ECommerceTitle, InvoiceTitle } from '../../../../../Utils/Constants';

export default function Invoice3Container() {
    const componentRef = useRef<HTMLDivElement | null>(null);

    return (
        <>
            <Breadcrumbs pageTitle={`${InvoiceTitle}-3`} parent={ECommerceTitle} title={`${InvoiceTitle}-3`} />
            <Container className='invoice-2'>
                <div ref={componentRef}>
                    <Row>
                        <Col sm={12}>
                            <Card>
                                <CardBody>
                                    <Table className="table-wrapper theme-scrollbar" responsive borderless>
                                        <tbody>
                                            <tr>
                                                <InvoiceThreeHeader />
                                            </tr>
                                            <tr>
                                                <InvoiceClientDetail />
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span style={{ display: "block", background: "rgba(82, 82, 108, 0.3)", height: 1, width: "100%", marginBottom: 20 }} />
                                                </td>
                                            </tr>
                                            <tr>
                                                <InvoiceThreeTable />
                                            </tr>
                                            <tr>
                                                <InvoiceBankTransfer />
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span style={{ display: "block", background: "rgba(82, 82, 108, 0.3)", height: 1, width: "100%", marginBottom: '30px' }} />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
                <Print componentRef={componentRef} />
            </Container >
        </>
    )
}