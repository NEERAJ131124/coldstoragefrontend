import React, { useRef } from 'react'
import { Card, CardBody, Col, Container, Row, Table } from 'reactstrap';
import InvoiceTwoHeader from './InvoiceTwoHeader';
import InvoiceTwoDetails from './InvoiceTwoDetails';
import InvoiceTwoBilling from './InvoiceTwoBilling';
import Print from '../Common/Print';
import InvoiceTwoContent from './InvoiceTwoContent';
import InvoiceTwoTotal from './InvoiceTwoTotal';
import Breadcrumbs from '../../../../../CommonElements/Breadcrumbs';
import { ECommerceTitle, InvoiceTitle } from '../../../../../Utils/Constants';

export default function Invoice2Container() {
    const componentRef = useRef<HTMLDivElement | null>(null);

    return (
        <>
            <Breadcrumbs pageTitle={`${InvoiceTitle}-2`} parent={ECommerceTitle} title={`${InvoiceTitle}-2`} />
            <Container className='invoice-2'>
                <div ref={componentRef}>
                    <Row>
                        <Col sm={12}>
                            <Card>
                                <CardBody>
                                    <Table className='table-wrapper theme-scrollbar' responsive borderless>
                                        <tbody>
                                            <tr>
                                                <InvoiceTwoHeader />
                                            </tr>
                                            <tr>
                                                <InvoiceTwoDetails />
                                            </tr>
                                            <tr>
                                                <InvoiceTwoBilling />
                                            </tr>
                                            <tr>
                                                <InvoiceTwoContent />
                                            </tr>
                                            <tr>
                                                <InvoiceTwoTotal />
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span style={{ display: "block", background: "rgba(82, 82, 108, 0.3)", height: 1, width: "100%", marginBottom: 24 }} />
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
            </Container>
        </>
    )
}