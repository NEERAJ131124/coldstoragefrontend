import React from 'react'
import { Container, Row } from 'reactstrap'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { BasicCardTitle, BonusUi } from '../../../Utils/Constants'
import BasicCard from './BasicCard'
import FlatCard from './FlatCard'
import WithoutShadow from './WithoutShadow'
import HeadingIcon from './HeadingIcon'
import DarkCard from './DarkCard'
import InfoColorHeader from './InfoColorHeader'
import InfoColorBody from './InfoColorBody'
import InfoColorFooter from './InfoColorFooter'

export default function BasicCardContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={BasicCardTitle} parent={BonusUi} title={BasicCardTitle} />
            <Container fluid>
                <Row>
                    <BasicCard />
                    <FlatCard />
                    <WithoutShadow />
                    <HeadingIcon />
                    <DarkCard />
                    <InfoColorHeader />
                    <InfoColorBody />
                    <InfoColorFooter />
                </Row>
            </Container>
        </>
    )
}