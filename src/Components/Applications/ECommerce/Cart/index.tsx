import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { CartTitle, ECommerceTitle } from '../../../../Utils/Constants'
import CartTable from './CartTable'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'

export default function CartContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={CartTitle} parent={ECommerceTitle} title={CartTitle} />
            <Container fluid>
                <Row>
                    <Col sm={12}>
                        <Card className='overflow-hidden'>
                            <CommonCardHeader title={CartTitle} />
                            <CardBody>
                                <CartTable />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}