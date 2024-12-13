import React from 'react'
import { Container, Row } from 'reactstrap'
import CreditCard from './CreditCard'
import DebitCard from './DebitCard'
import Cod from './Cod'
import Emi from './Emi'
import NetBanking from './NetBanking'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { ECommerceTitle, PaymentDetailsTitle } from '../../../../Utils/Constants'

export default function PaymentDetailsContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={PaymentDetailsTitle} parent={ECommerceTitle} title={PaymentDetailsTitle} />
            <Container fluid>
                <Row>
                    <CreditCard />
                    <DebitCard />
                    <Cod />
                    <Emi />
                    <NetBanking />
                </Row>
            </Container>
        </>
    )
}