import React from 'react'
import { Container, Row } from 'reactstrap'
import HtmlSourcedData from './HtmlSourcedData'
import AjaxSourcedData from './AjaxSourcedData'
import JavascriptSourcedData from './JavascriptSourcedData'
import ServerSideProcessing from './ServerSideProcessing'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { DataSourceTitle, DataTablesTitle } from '../../../../Utils/Constants'

export default function DataSourceContainer() {
  return (
    <>
      <Breadcrumbs pageTitle={DataSourceTitle} parent={DataTablesTitle} title={DataSourceTitle} />
      <Container fluid>
        <Row>
          <HtmlSourcedData />
          <AjaxSourcedData />
          <JavascriptSourcedData />
          <ServerSideProcessing />
        </Row>
      </Container>
    </>
  )
}