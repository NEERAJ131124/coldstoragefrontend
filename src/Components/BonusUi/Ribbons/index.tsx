import React from 'react'
import { Container } from 'reactstrap'
import { BonusUi, RibbonsTitle } from '../../../Utils/Constants'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import LeftSideRibbons from './LeftSideRibbons'
import RightSideRibbon from './RightSideRibbon'

export default function RibbonsContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={RibbonsTitle} parent={BonusUi} title={RibbonsTitle} />
            <Container fluid>
                <LeftSideRibbons />
                <RightSideRibbon />
            </Container>
        </>
    )
}
