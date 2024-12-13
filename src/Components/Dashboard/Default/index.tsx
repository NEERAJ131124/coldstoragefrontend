import React from 'react'
import { AuditLogTitle, DashboardTitle, DefaultDashboardTitle, LatestActivityTitle } from '../../../Utils/Constants'
import TotalInvest from './TotalInvest'
import ManageInvoice from './ManageInvoice'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { Container, Row } from 'reactstrap'
import WelcomeBanner from './WelcomeBanner'
import EarningCard from './EarningCard'
import JobCard from './JobCard'
import TransitionHistory from './TransitionHistory'
import TotalInvestment from '../../../Utils/CommonComponents/CommonDashboard/CommonDefault/TotalInvestment'
import { auditLogData, investmentChart, latestActivityData } from '../../../Data/Dashboard/Default'
import CommonListComponent from './Common/CommonListComponent'
import GrowthCard from '../../../Utils/CommonComponents/CommonDashboard/CommonDefault/GrowthCard'
import TopUsers from './TopUsers'
import NewsUpdate from './NewsUpdate'

export default function DefaultDashboard() {
    return (
        <>
            <Breadcrumbs pageTitle={DefaultDashboardTitle} parent={DashboardTitle} title={DefaultDashboardTitle} paragraph='"Welcome back! Let’s start from where you left."' />
            <Container className='default-dashboard' fluid>
                <Row>
                    <WelcomeBanner />
                    <EarningCard />
                    <JobCard />
                    <TransitionHistory />
                    <CommonListComponent colClass='proorder-xxl-9 box-col-5' title={AuditLogTitle} bodyClass='audit-log' data={auditLogData} />
                    <TotalInvestment colClass="col-xxl-3 col-xl-4 proorder-xxl-3 col-md-6 box-col-6" chartData={investmentChart} height={380} investmentList />
                    <CommonListComponent colClass='proorder-xxl-12 box-col-6' title={LatestActivityTitle} bodyClass='latest-activity' data={latestActivityData} />
                    <GrowthCard colClass='col-lg-6 proorder-xxl-6 box-col-12' cardClass='growthcard' height={350} />
                    <TopUsers />
                    <NewsUpdate />
                    <TotalInvest />
                    <ManageInvoice />
                </Row>
            </Container>
        </>
    )
}