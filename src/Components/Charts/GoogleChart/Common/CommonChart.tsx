import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import Chart from 'react-google-charts'
import { CommonChartProps } from '../../../../Types/CommonComponent.type'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'

export default function CommonChart({ title, bodyClass, colClass, data, divClass }: CommonChartProps) {
    return (
        <Col sm={12} className={colClass ? colClass : "col-xl-6 box-col-6"}>
            <Card className='overflow-hidden'>
                <CommonCardHeader title={title} />
                <CardBody className={`chart-block ${bodyClass ? bodyClass : ''}`}>
                    <div className={divClass}>
                        <Chart
                            width={data?.width}
                            height={data?.height}
                            chartType={data?.chartType}
                            loader={<div>{"Loading Chart"}</div>}
                            data={data?.data}
                            options={data?.option}
                        />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
