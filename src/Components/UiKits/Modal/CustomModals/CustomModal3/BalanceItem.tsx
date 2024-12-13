import React from 'react'
import { ArrowDownRight, ArrowUpRight } from 'react-feather'
import { Badges, H4, LI, UL } from '../../../../../AbstractElements'
import { balanceIconWrapData } from '../../../../../Data/UiKits/Modal'

export default function BalanceItem() {
    return (
        <UL className='simple-list flex-row'>
            {balanceIconWrapData.map((item) => (
                <LI key={item.id}>
                    <div className={`balance-item`}>
                        <div className={`balance-icon-wrap bg-light-${item.color}`}>
                            <div className={`balance-icon bg-${item.color}`}>
                                <div className="icon">
                                    {item.id === 1 ? <ArrowDownRight /> : <ArrowUpRight />}
                                </div>
                            </div>
                        </div>
                        <div>
                            <span className="f-12 font-dark">{item.text} </span>
                            <H4>{item.rate}{'K'}</H4>
                            <Badges color={`light-${item.color}`} pill>{item.badge}{'%'}</Badges>
                        </div>
                    </div>
                </LI>
            ))}
        </UL>
    )
}
