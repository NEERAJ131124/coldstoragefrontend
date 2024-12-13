import React from 'react'
import { Container, Row } from 'reactstrap'
import OrderCards from './OrderCards'
import DatatableOrderHistory from './DatatableOrderHistory'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { ECommerceTitle, OrderHistoryTitle } from '../../../../Utils/Constants'

export default function OrderHistoryContainer() {
  return (
    <>
      <Breadcrumbs pageTitle={OrderHistoryTitle} parent={ECommerceTitle} title={OrderHistoryTitle} />
      <Container fluid>
        <Row>
          <OrderCards />
          <DatatableOrderHistory />
        </Row>
      </Container>
    </>
  )
}