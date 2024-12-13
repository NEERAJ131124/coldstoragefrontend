import React, { useRef } from 'react'
import { Card, CardBody, Col, Container, Row, Table } from 'reactstrap';
import Print from '../Common/Print';
import InvoiceFourHeader from './InvoiceFourHeader';
import InvoiceFourDetail from './InvoiceFourDetail';
import InvoiceFourTable from './InvoiceFourTable';
import InvoiceTotal from './InvoiceTotal';
import CommonInvoiceSign from '../Common/CommonInvoiceSign';
import Breadcrumbs from '../../../../../CommonElements/Breadcrumbs';
import { ECommerceTitle, InvoiceTitle } from '../../../../../Utils/Constants';

export default function Invoice4Container() {
    const componentRef = useRef<HTMLDivElement | null>(null);

    return (
        <>
            <Breadcrumbs pageTitle={`${InvoiceTitle}-4`} parent={ECommerceTitle} title={`${InvoiceTitle}-4`} />
            <Container className='invoice-2'>
                <div ref={componentRef}>
                    <Row>
                        <Col sm={12}>
                            <Card>
                                <CardBody>
                                    <Table className="table-wrapper theme-scrollbar" responsive borderless>
                                        <tbody>
                                            <tr>
                                                <InvoiceFourHeader />
                                            </tr>
                                            <tr>
                                                <InvoiceFourDetail />
                                            </tr>
                                            <tr>
                                                <InvoiceFourTable />
                                            </tr>
                                            <tr>
                                                <td style={{ height: 3, width: "100%", background: "linear-gradient(90deg, #308e87 20.61%, #83BF6E 103.6%)", display: "block", marginTop: "6px" }} />
                                            </tr>
                                            <tr>
                                                <InvoiceTotal />
                                            </tr>
                                            <tr style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                                                <CommonInvoiceSign />
                                            </tr>
                                        </tbody>
                                    </Table>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
                <Print componentRef={componentRef} />
            </Container>
        </>
    )
}