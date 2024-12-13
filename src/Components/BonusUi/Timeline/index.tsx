import React from 'react'
import { Container, Row } from 'reactstrap'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { BonusUi, TimelineTitle } from '../../../Utils/Constants'
import BasicTimeline from './BasicTimeline'
import HoverTimeline from './HoverTimeline'
import VariationTimeline from './VariationTimeline'
import HorizontalTimeline from './HorizontalTimeline'
import TimelineMain from './TimelineMain'

export default function TimelineContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={TimelineTitle} parent={BonusUi} title={TimelineTitle} />
            <Container fluid>
                <Row>
                    <BasicTimeline />
                    <HoverTimeline />
                    <VariationTimeline />
                    <HorizontalTimeline />
                    <TimelineMain />
                </Row>
            </Container>
        </>
    )
}