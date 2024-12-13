import React from 'react'
import { Col, Form, Row } from 'reactstrap'
import { Image, P } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'

export default function InvoiceFooter() {
    return (
        <Row>
            <Col md={8}>
                <div>
                    <P className="legal text-start">
                        <strong>{'Thank you for your business!'}</strong>{' Payment is expected within 31 days; please process this invoice within that time. There will be a 5% interest charge per month on late invoices.'}
                    </P>
                </div>
            </Col>
            <Col md={4}>
                <Form className="text-end">
                    <Image src={dynamicImage(`other-images/paypal.png`)} alt="PayPal" />
                </Form>
            </Col>
        </Row>
    )
}