import React from 'react'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import { Badges, H5, H6, P } from '../../../../AbstractElements'

export default function AppIdeasTimeline() {
    return (
        <VerticalTimelineElement 
        className='cd-timeline-block' 
        dateClassName='cd-date' 
        date='February 02 2024' 
        icon={<div className="cd-timeline-img cd-picture bg-primary"><i className="icon-pencil-alt" /></div>}>
            <div className="cd-timeline-content">
                <div className='timeline-wrapper'>
                    <Badges color='warning'>{'app-ideas'}</Badges>
                </div>
                <H5 className='f-w-600 m-0'>{'Established new the app-ideas repository.'}</H5>
                <P className='mb-0'>{'developers who are just beginning their learning process. those who often concentrate on developing programmes with a user interface.'}</P>
                <div className='time-content pt-2'>
                    <i className='icon-github' />
                    <H6 className='f-w-600'>{'View it on Github'} </H6>
                </div>
            </div>
        </VerticalTimelineElement>
    )
}
