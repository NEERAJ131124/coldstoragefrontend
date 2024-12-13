import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { ECommerceTitle, WishlistTitle } from '../../../../Utils/Constants'
import WishlistCards from './WishlistCards'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'

export default function WishlistContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={WishlistTitle} parent={ECommerceTitle} title={WishlistTitle} />
            <Container fluid>
                <Row>
                    <Col sm={12}>
                        <Card>
                            <CommonCardHeader title={WishlistTitle} />
                            <CardBody>
                                <WishlistCards />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}