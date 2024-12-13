import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import ProductListHeader from '../Common/ProductListHeader'
import ProductListTable from './ProductListTable'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { ECommerceTitle, ProductListTitle } from '../../../../Utils/Constants'

export default function ProductListContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={ProductListTitle} parent={ECommerceTitle} title={ProductListTitle} />
            <Container fluid>
                <Row>
                    <Col sm={12}>
                        <Card>
                            <CardBody>
                                <ProductListHeader linkTitle='Add Product' />
                                <ProductListTable />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}