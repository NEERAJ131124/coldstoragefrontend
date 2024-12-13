import React from 'react'
import { Container, Row } from 'reactstrap'
import ChartLists from './ChartLists'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { ChartsTitle, GoogleChartTitle } from '../../../Utils/Constants'

export default function GoogleChartContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={GoogleChartTitle} parent={ChartsTitle} title={GoogleChartTitle} />
            <Container fluid>
                <Row>
                    <ChartLists />
                </Row>
            </Container>
        </>
    )
}
