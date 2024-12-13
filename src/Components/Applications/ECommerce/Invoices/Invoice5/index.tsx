import React, { useRef } from 'react'
import { Card, CardBody, Col, Container, Row, Table } from 'reactstrap';
import CommonInvoiceSign from '../Common/CommonInvoiceSign';
import Print from '../Common/Print';
import InvoiceFiveHeader from './InvoiceFiveHeader';
import InvoiceNumber from './InvoiceNumber';
import InvoiceTable from './InvoiceTable';
import Breadcrumbs from '../../../../../CommonElements/Breadcrumbs';
import { ECommerceTitle, InvoiceTitle } from '../../../../../Utils/Constants';

export default function Invoice5Container() {
    const componentRef = useRef<HTMLDivElement | null>(null);

    return (
        <>
            <Breadcrumbs pageTitle={`${InvoiceTitle}-5`} parent={ECommerceTitle} title={`${InvoiceTitle}-5`} />
            <Container>
                <div ref={componentRef}>
                    <Row>
                        <Col className="invoice-2">
                            <Card>
                                <CardBody>
                                    <Table className="table-wrapper theme-scrollbar" responsive borderless>
                                        <tbody>
                                            <tr>
                                                <InvoiceFiveHeader />
                                            </tr>
                                            <tr>
                                                <InvoiceNumber />
                                            </tr>
                                            <tr>
                                                <InvoiceTable />
                                            </tr>
                                            <tr style={{ width: "100%", display: "flex", justifyContent: "space-between", marginTop: 36 }} >
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