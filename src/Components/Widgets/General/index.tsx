import React from 'react'
import { Container, Row } from 'reactstrap'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { GeneralTitle, WidgetsTitle } from '../../../Utils/Constants'
import ValueChart from '../../../Utils/CommonComponents/CommonDashboard/CommonEcommerce/ValueChart'
import { generalInvestChart, generalSalesStats, itemsSliderData, valueChartData } from '../../../Data/Widgets/General'
import TotalInvestment from '../../../Utils/CommonComponents/CommonDashboard/CommonDefault/TotalInvestment'
import ItemsSlider from '../../../Utils/CommonComponents/CommonDashboard/CommonEcommerce/ItemsSlider'
import WidgetContent from './WidgetContent'
import RadialCard from '../../../Utils/CommonComponents/CommonDashboard/CommonEcommerce/RadialCard'
import WidgetCharts from './WidgetCharts'
import ScheduleLesson from '../../../Utils/CommonComponents/CommonDashboard/CommonProject/ScheduleLesson'
import UpcomingCard from '../../../Utils/CommonComponents/CommonDashboard/CommonProject/UpcomingCard'
import GrowthCard from '../../../Utils/CommonComponents/CommonDashboard/CommonDefault/GrowthCard'

export default function GeneralWidgets() {
    return (
        <>
            <Breadcrumbs pageTitle={GeneralTitle} parent={WidgetsTitle} title={GeneralTitle} />
            <Container className='general-widget' fluid>
                <Row>
                    <ValueChart mainColClass='col-xl-3 col-sm-6 box-col-6' data={valueChartData} />
                    <TotalInvestment colClass='col-xl-3 col-sm-6 box-col-6' bodyClass='pt-0' chartData={generalInvestChart} height={300} />
                    <ItemsSlider data={itemsSliderData} />
                    <WidgetContent/>
                    <RadialCard mainColClass='col-xl-5 box-col-12' colClass='col-xl-6 col-lg-6 col-md-6' chartData={generalSalesStats} height={345} />
                    <WidgetCharts/>
                    <ScheduleLesson colClass='col-xl-3 d-xxl-block d-xl-none box-col-none' />
                    <UpcomingCard colClass='box-col-6' />
                    <GrowthCard colClass='col-xl-6 box-col-6 growth-card' height={330} chartClass='growth-chart' />
                </Row>
            </Container>
        </>
    )
}