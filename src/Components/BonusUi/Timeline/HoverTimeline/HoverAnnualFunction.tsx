import React from 'react'
import { Label } from 'reactstrap'
import { H5, LI, P } from '../../../../AbstractElements'

export default function HoverAnnualFunction() {
    return (
        <LI className='timeline-event'>
            <Label className='timeline-event-icon'/>
            <div className='timeline-event-wrapper'>
                <P className='timeline-thumbnail'>{"January 2024- Annual Function"}</P>
                <H5>{'Location'}</H5>
                <div className='text-muted'>{"Largo Febo,10225012-Calvisano BS"}</div>
                <P className='pt-3 mb-4'>{"What a dynamic performance by the eighth-grade students, Let's welcome the ninth-grade kid to the stage."}</P>
            </div>
        </LI>
    )
}
