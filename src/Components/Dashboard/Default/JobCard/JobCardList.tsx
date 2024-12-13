import React from 'react'
import { H3, LI, P, UL } from '../../../../AbstractElements'
import { jobCardListData } from '../../../../Data/Dashboard/Default'
import DashboardSvgIcon from '../../../../Utils/CommonComponents/DashboardSvgIcon'

export default function JobCardList() {
    return (
        <UL className="d-flex align-center justify-content-center gap-3 simple-list flex-row">
            {jobCardListData.map((item) => (
                <LI key={item.id}>
                    <div className="d-flex gap-2">
                        <div className={`flex-shrink-0 bg-light-${item.color}`}>
                            <DashboardSvgIcon className='stroke-icon' iconId={item.icon} />
                        </div>
                        <div className="flex-grow-1">
                            <H3>{item.count}</H3>
                            <P>{item.text}</P>
                        </div>
                    </div>
                </LI>
            ))}
        </UL>
    )
}