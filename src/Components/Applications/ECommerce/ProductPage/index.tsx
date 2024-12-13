import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import ProductSlider from './ProductSlider'
import ProductDetails from './ProductDetails'
import BrandShipping from './BrandShipping'
import ProductPageTabs from './ProductPageTabs'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { ECommerceTitle, ProductPageTitle } from '../../../../Utils/Constants'

export default function ProductPageContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={ProductPageTitle} parent={ECommerceTitle} title={ProductPageTitle} />
            <Container fluid>
                <div>
                    <Row className="product-page-main p-0">
                        <Col xxl={4} md={6} className="box-col-6">
                            <Card>
                                <CardBody>
                                    <ProductSlider />
                                </CardBody>
                            </Card>
                        </Col>
                        <ProductDetails />
                        <BrandShipping />
                    </Row>
                </div>
                <ProductPageTabs />
            </Container>
        </>
    )
}