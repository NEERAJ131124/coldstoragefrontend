import React from 'react'
import { Card, CardBody } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import DropdownWithHeader from '../../DropdownWithHeader'
import { TotalInvestmentTitle } from '../../../Constants'
import { investmentListData, monthlyDropdownList } from '../../../../Data/Dashboard/Default'
import { H6, LI, P, UL } from '../../../../AbstractElements'
import { TotalInvestmentProps } from '../../../../Types/Dashboard.type'

export default function TotalInvestment({ bodyClass, colClass, investmentList, chartData, height }: TotalInvestmentProps) {
    return (
        <div className={colClass}>
            <Card>
                <DropdownWithHeader end headerClass='pb-0 card-no-border' heading={TotalInvestmentTitle} dropDownList={monthlyDropdownList} dropDownIcon dropDownClass='icon-dropdown' />
                <CardBody className={`investment-card ${bodyClass ? bodyClass : ''}`}>
                    <div id="investment">
                        <ReactApexChart type="radialBar" options={chartData} series={chartData.series} height={height} />
                    </div>
                    {investmentList &&
                        <UL className="d-flex align-center justify-content-center simple-list flex-row">
                            {investmentListData.map((item) => (
                                <LI className="text-center" key={item.id}>
                                    <P className="mb-0">{item.text}</P>
                                    <H6>{'$'}{item.amount}</H6>
                                </LI>
                            ))}
                        </UL>
                    }
                </CardBody>
            </Card>
        </div>
    )
}