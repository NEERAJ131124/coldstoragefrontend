import React from 'react'
import { Container, Row } from 'reactstrap'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { TabBootstrapTitle, UiKits } from '../../../Utils/Constants'
import JustifyTab from './JustifyTab'
import MaterialLeftStyleTab from './MaterialLeftStyleTab'
import MaterialStyleTab from './MaterialStyleTab'
import BorderTabs from './BorderTabs'
import SimpleTab from './SimpleTab'
import IconTabs from './IconTabs'
import VerticalTab from './VerticalTab'
import PillsTab from './PillsTab'

export default function TabsContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={TabBootstrapTitle} parent={UiKits} title={TabBootstrapTitle} />
            <Container fluid>
                <Row>
                    <SimpleTab />
                    <IconTabs />
                    <VerticalTab />
                    <PillsTab />
                    <JustifyTab />
                    <MaterialLeftStyleTab />
                    <MaterialStyleTab />
                    <BorderTabs />
                </Row>
            </Container>
        </>
    )
}
