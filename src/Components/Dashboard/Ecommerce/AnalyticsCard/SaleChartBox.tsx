import React from 'react'
import { H5, LI, UL } from '../../../../AbstractElements'
import { analyticsCardData } from '../../../../Data/Dashboard/Ecommerce'

export default function SaleChartBox() {
    return (
        <UL className="d-flex simple-list flex-row">
            {analyticsCardData.map((item) => (
                <LI className="statistic-icon" key={item.id}>
                    <div>
                        <div>
                            <div className="statistic-content"><span className={`${item.color}-dot`} /> {item.status}</div>
                        </div>
                        <div className={`statistic-num ms-auto text-end font-${item.fontColor} d-flex align-items-center`}>
                            <H5>{'$'}{item.amount}</H5>
                            <div>
                                <span>{item.percent}{'%'}</span>
                                <i className={`fa-solid fa-chevron-${item.icon} ms-1`} />
                            </div>
                        </div>
                    </div>
                </LI>
            ))}
        </UL>
    )
}