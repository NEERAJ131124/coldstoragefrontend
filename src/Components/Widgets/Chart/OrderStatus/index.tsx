import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import DropdownWithHeader from '../../../../Utils/CommonComponents/DropdownWithHeader'
import { OrderStatusTitle } from '../../../../Utils/Constants'
import { dailyDropdownList, orderStatusSeriesData } from '../../../../Data/Widgets/Chart'
import ProgressBarCharts from './ProgressBarCharts'

export default function OrderStatus() {
    return (
        <Col xl={6} lg={12} className="box-col-6 xl-50">
            <Card>
                <DropdownWithHeader headerClass='card-no-border pb-0' end heading={OrderStatusTitle} headerIconClass='card-header-right-icon' dropDownTitle='Today' dropDownList={dailyDropdownList} caret/>
                <CardBody>
                    <div className="chart-container progress-chart">
                        {orderStatusSeriesData.map((data) => (
                            <ProgressBarCharts key={data.id} index={data.id} chartData={data} />
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}