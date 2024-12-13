import React from 'react'
import { Container, Row } from 'reactstrap'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { BonusUi, CreativeCardTitle } from '../../../Utils/Constants'
import BorderLeft from './BorderLeft'
import BorderRight from './BorderRight'
import BorderTop from './BorderTop'
import BorderBottom from './BorderBottom'
import BorderPrimary from './BorderPrimary'
import BorderWarning from './BorderWarning'
import BorderSecondary from './BorderSecondary'
import AbsolutePrimary from './AbsolutePrimary'
import AbsoluteSecondary from './AbsoluteSecondary'

export default function CreativeCardContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={CreativeCardTitle} parent={BonusUi} title={CreativeCardTitle} />
            <Container fluid>
                <Row>
                    <BorderLeft />
                    <BorderRight />
                    <BorderTop />
                    <BorderBottom />
                    <BorderPrimary />
                    <BorderWarning />
                    <BorderSecondary />
                    <AbsolutePrimary />
                    <AbsoluteSecondary />
                </Row>
            </Container>
        </>
    )
}
