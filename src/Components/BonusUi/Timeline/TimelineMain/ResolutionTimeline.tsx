import React from 'react'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import { Badges, H5, H6, P } from '../../../../AbstractElements'

export default function ResolutionTimeline() {
    return (
        <VerticalTimelineElement className='cd-timeline-block' dateClassName='cd-date' date='December 31 2024' icon={<div className="cd-timeline-img cd-movie bg-danger"><i className="icon-agenda" /></div>}>
            <div className="cd-timeline-content">
                <div className='timeline-wrapper'>
                    <Badges color='warning'>{'Resolutions'}</Badges>
                </div>
                <H5 className='f-w-600 m-0'>{'My Resolutions for 2024 '}</H5>
                <P className='mb-0'>{"I'm determined to streamline, organism, systematism, realign, and embrace life in 2024."}</P>
                <div className='time-content pt-2'>
                    <i className='icon-write'></i>
                    <H6 className="f-w-600">{' My Resolutions'}</H6>
                </div>
            </div>
        </VerticalTimelineElement>
    )
}
