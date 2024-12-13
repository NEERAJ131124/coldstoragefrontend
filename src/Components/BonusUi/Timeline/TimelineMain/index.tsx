import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { VerticalTimeline } from 'react-vertical-timeline-component';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { TimelineTitle } from '../../../../Utils/Constants'
import { timelineMainSubTitle } from '../../../../Data/BonusUi/Timeline'
import AppIdeasTimeline from './AppIdeasTimeline';
import BlogTimeline from './BlogTimeline';
import CarouselTimeline from './CarouselTimeline';
import AutoTestingTimeline from './AutoTestingTimeline';
import MeetUpTimeline from './MeetUpTimeline';
import ResolutionTimeline from './ResolutionTimeline';

export default function TimelineMain() {
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader title={TimelineTitle} subTitle={timelineMainSubTitle} />
                <CardBody>
                    <VerticalTimeline className='cd-container'>
                        <AppIdeasTimeline />
                        <BlogTimeline />
                        <CarouselTimeline />
                        <AutoTestingTimeline />
                        <MeetUpTimeline />
                        <ResolutionTimeline />
                    </VerticalTimeline>
                </CardBody>
            </Card>
        </Col>
    )
}
