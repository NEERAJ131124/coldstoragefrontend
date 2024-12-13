import React from 'react'
import { Btn, P } from '../../../../../../AbstractElements'
import { SideHeaderProp } from '../../../../../../Types/Chat.type'

export default function SideHeader({ title }: SideHeaderProp) {
    return (
        <div className="common-space">
            <P>{title}</P>
            <div className="header-top">
                <Btn color="light-primary badge-light-primary" className="f-w-500">
                    <i className="fa-solid fa-plus" />
                </Btn>
            </div>
        </div>
    )
}