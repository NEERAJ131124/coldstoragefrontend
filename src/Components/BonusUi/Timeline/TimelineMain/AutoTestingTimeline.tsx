import React from 'react'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import { Badges, H5, P } from '../../../../AbstractElements'

export default function AutoTestingTimeline() {
    return (
        <VerticalTimelineElement className='cd-timeline-block' dateClassName='cd-date' date='June 12 2024' icon={<div className="cd-timeline-img cd-location bg-info"><i className="icon-pulse" /></div>}>
            <div className="cd-timeline-content">
                <div className='timeline-wrapper'>
                    <Badges color='primary'>{'Audio testing'}</Badges>
                </div>
                <H5 className='f-w-600 m-0'>{'Musical trends and predictability'}</H5>
                <P className='mb-0'>{"So, the next time you listen to music, you might or might not consider how it's actively altering your mood."}</P>
                <audio controls>
                    <source src={`${process.env.PUBLIC_URL}/assets/audio/horse.ogg`} type='audio/ogg' />
                </audio>
            </div>
        </VerticalTimelineElement>
    )
}
