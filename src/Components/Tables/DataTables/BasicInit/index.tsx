import React from 'react'
import { Container, Row } from 'reactstrap'
import ZeroConfigurationTable from './ZeroConfigurationTable'
import StateSavingTable from './StateSavingTable'
import ScrollVerticalDynamicHeight from './ScrollVerticalDynamicHeight'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { BasicDataTablesTitle, DataTablesTitle } from '../../../../Utils/Constants'

export default function BasicInitContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={BasicDataTablesTitle} parent={DataTablesTitle} title={BasicDataTablesTitle} />
            <Container fluid>
                <Row>
                    <ZeroConfigurationTable />
                    <StateSavingTable />
                    <ScrollVerticalDynamicHeight />
                </Row>
            </Container>
        </>
    )
}