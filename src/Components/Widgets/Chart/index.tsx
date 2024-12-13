import React from 'react'
import { Container, Row } from 'reactstrap'
import ChartWidgetTop from './ChartWidgetTop'
import MonthlyHistory from './MonthlyHistory'
import SkillStatus from './SkillStatus'
import OrderStatus from './OrderStatus'
import LiveProducts from './LiveProducts'
import TurnOverChart from './TurnOverChart'
import CryptoCharts from './CryptoCharts'
import StockMarket from './StockMarket'
import FinanceOrderStatusChart from './FinanceOrderStatusChart'
import MonthlySalesUsesCharts from './MonthlySalesUsesCharts'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { ChartTitle, WidgetsTitle } from '../../../Utils/Constants'

export default function ChartWidgets() {
    return (
        <>
            <Breadcrumbs pageTitle={ChartTitle} parent={WidgetsTitle} title={ChartTitle} />
            <Container fluid>
                <ChartWidgetTop />
                <Row>
                    <MonthlyHistory />
                    <SkillStatus />
                    <OrderStatus />
                </Row>
                <Row>
                    <LiveProducts />
                    <TurnOverChart />
                    <CryptoCharts />
                </Row>
                <Row>
                    <StockMarket />
                    <FinanceOrderStatusChart />
                    <MonthlySalesUsesCharts />
                </Row>
            </Container>
        </>
    )
}