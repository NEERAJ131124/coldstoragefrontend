import React from 'react'
import { Container, Row } from 'reactstrap'
import StockResult from './StockResult'
import RowCreateCallback from './RowCreateCallback'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { AdvanceInitTitle, DataTablesTitle } from '../../../../Utils/Constants'

export default function AdvanceInitContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={AdvanceInitTitle} parent={DataTablesTitle} title={AdvanceInitTitle} />
            <Container fluid>
                <Row>
                    <StockResult />
                    <RowCreateCallback />
                </Row>
            </Container>
        </>
    )
}