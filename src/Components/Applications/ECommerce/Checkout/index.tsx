import React from 'react'
import { Card, CardBody, Container, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { BillingDetails, CheckoutTitle, ECommerceTitle } from '../../../../Utils/Constants'
import CheckoutForm from './CheckoutForm'
import CheckoutDetails from './CheckoutDetails'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'

export default function CheckoutContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={CheckoutTitle} parent={ECommerceTitle} title={CheckoutTitle} />
            <Container fluid>
                <Card>
                    <CommonCardHeader title={BillingDetails} />
                    <CardBody>
                        <Row>
                            <CheckoutForm />
                            <CheckoutDetails />
                        </Row>
                    </CardBody>
                </Card>
            </Container>
        </>
    )
}