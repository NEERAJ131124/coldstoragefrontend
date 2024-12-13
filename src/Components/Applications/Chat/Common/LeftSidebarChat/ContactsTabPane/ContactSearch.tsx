import React from 'react'
import { Input } from 'reactstrap'
import { Mic } from 'react-feather'
import DashboardSvgIcon from '../../../../../../Utils/CommonComponents/DashboardSvgIcon'

export default function ContactSearch() {
    return (
        <div className="search-contacts">
            <Input type="text" placeholder="Name and phone number" />
            <DashboardSvgIcon iconId="stroke-search" />
            <Mic className="mic-search" />
        </div>
    )
}