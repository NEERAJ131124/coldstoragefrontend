import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import BecomeMember from './BecomeMember'
import SimplePricingCard from './SimplePricingCard'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { ECommerceTitle, PricingTitle } from '../../../../Utils/Constants'

export default function PricingContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={PricingTitle} parent={ECommerceTitle} title={PricingTitle} />
            <Container fluid>
                <Row>
                    <Col sm={12}>
                        <BecomeMember />
                        <SimplePricingCard />
                    </Col>
                </Row>
            </Container>
        </>
    )
}