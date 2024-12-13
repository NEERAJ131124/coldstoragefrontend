import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import DropdownWithHeader from '../../../../Utils/CommonComponents/DropdownWithHeader'
import { TimeSpentLearning } from '../../../../Utils/Constants'
import { monthlyDropdownList } from '../../../../Data/Dashboard/Default'
import { revenueChartData } from '../../../../Data/Dashboard/Project'

export default function PieCard() {
    return (
        <Col xxl={3} xl={5} lg={6} md={5} sm={6} className="order-xxl-0 order-xl-2 box-col-6">
            <Card className="pie-card">
                <DropdownWithHeader end headerClass='card-no-border pb-0' heading={TimeSpentLearning} dropDownClass='icon-dropdown' dropDownIcon dropDownList={monthlyDropdownList} />
                <CardBody className="revenue-category">
                    <ReactApexChart id="chart" options={revenueChartData} series={revenueChartData.series} type="donut" height={390} />
                </CardBody>
            </Card>
        </Col>
    )
}