import React from 'react'
import { Container, Row } from 'reactstrap'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { TagPillsTitle, UiKits } from '../../../Utils/Constants'
import BadgesContextual from './BadgesContextual'
import PillsContextual from './PillsContextual'
import NumberBadges from './NumberBadges'
import NumberPills from './NumberPills'
import BadgeWithIcon from './BadgeWithIcon'
import PillsIcon from './PillsIcon'
import BadgeHeading from './BadgeHeading'
import BadgeButton from './BadgeButton'

export default function TagAndPillsContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={TagPillsTitle} parent={UiKits} title={TagPillsTitle} />
            <Container fluid>
                <Row>
                    <BadgesContextual />
                    <PillsContextual />
                    <NumberBadges />
                    <NumberPills />
                    <BadgeWithIcon />
                    <PillsIcon />
                    <BadgeHeading />
                    <BadgeButton />
                </Row>
            </Container>
        </>
    )
}
