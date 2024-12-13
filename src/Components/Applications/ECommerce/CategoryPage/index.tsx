import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import ProductListHeader from '../Common/ProductListHeader'
import CategoryListTable from './CategoryListTable'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { CategoryTitle, ECommerceTitle } from '../../../../Utils/Constants'

export default function CategoryContainer() {
  return (
    <>
      <Breadcrumbs pageTitle={CategoryTitle} parent={ECommerceTitle} title={CategoryTitle} />
      <Container fluid>
        <Row>
          <Col sm={12}>
            <Card>
              <CardBody>
                <ProductListHeader linkTitle='Add Category' />
                <CategoryListTable />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}