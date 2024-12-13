import React, { useRef } from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import InvoiceSixHeader from './InvoiceSixHeader';
import UserDetails from './UserDetails';
import InvoiceSixTable from './InvoiceSixTable';
import Invoice6Button from './Invoice6Button';
import Breadcrumbs from '../../../../../CommonElements/Breadcrumbs';
import { ECommerceTitle, InvoiceTitle } from '../../../../../Utils/Constants';

export default function Invoice6Container() {
    const componentRef = useRef<HTMLDivElement | null>(null);

    return (
        <>
            <Breadcrumbs pageTitle={`${InvoiceTitle}-6`} parent={ECommerceTitle} title={`${InvoiceTitle}-6`} />
            <Container>
                <div ref={componentRef}>
                    <Row>
                        <Col sm={12}>
                            <Card>
                                <CardBody>
                                    <div className="invoice">
                                        <div>
                                            <InvoiceSixHeader />
                                            <hr />
                                            <UserDetails />
                                            <InvoiceSixTable />
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
                <Invoice6Button componentRef={componentRef} />
            </Container>
        </>
    )
}