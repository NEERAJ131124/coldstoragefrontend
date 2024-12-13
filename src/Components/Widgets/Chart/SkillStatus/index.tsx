import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { SkillStatusTitle } from '../../../../Utils/Constants'
import { skillStatusOptions } from '../../../../Data/Widgets/Chart'

export default function SkillStatus() {
    return (
        <Col xl={6} lg={12} className="box-col-6 xl-50">
            <Card>
                <CommonCardHeader title={SkillStatusTitle} />
                <CardBody>
                    <div className="chart-container skill-chart">
                        <div id="circlechart">
                            <ReactApexChart options={skillStatusOptions} series={skillStatusOptions.series} type='radialBar' height={375} />
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
