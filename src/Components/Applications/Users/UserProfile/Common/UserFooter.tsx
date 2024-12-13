import React from 'react'
import { Label } from 'reactstrap'
import CountUp from 'react-countup';
import { LI, UL } from '../../../../../AbstractElements'
import { Href } from '../../../../../Utils/Constants'
import { UserFooterProp } from '../../../../../Types/Bookmark.type';

export default function UserFooter({divClass}: UserFooterProp) {
    return (
        <div className={`like-comment ${divClass}`}>
            <UL className='simple-list list-inline flex-row'>
                <LI className='list-inline-item border-right pe-3'>
                    <Label className='m-0'>
                        <a href={Href}><i className='fa-solid fa-heart me-2' /></a>
                        {'Like'}
                    </Label>
                    <CountUp end={2659} className='ms-2 counter' />
                </LI>
                <LI className='list-inline-item ms-2'>
                    <Label className='m-0'>
                        <a href={Href}><i className='fa-solid fa-comment me-2' /></a>
                        {'Comment'}
                    </Label>
                    <CountUp end={569} className='ms-2 counter' />
                </LI>
            </UL>
        </div>
    )
}