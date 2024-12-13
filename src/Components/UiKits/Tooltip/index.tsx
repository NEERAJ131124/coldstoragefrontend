import React from 'react'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { TooltipTitle, UiKits } from '../../../Utils/Constants'
import { Container, Row } from 'reactstrap'
import BasicTooltip from './BasicTooltip'
import ColoredTooltip from './ColoredTooltip'
import TooltipDirection from './TooltipDirection'
import HtmlTooltip from './HtmlTooltip'
import FilledTooltip from './FilledTooltip'

export default function TooltipContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={TooltipTitle} parent={UiKits} title={TooltipTitle} />
            <Container fluid>
                <Row>
                    <BasicTooltip />
                    <ColoredTooltip />
                    <TooltipDirection />
                    <HtmlTooltip />
                    <FilledTooltip />
                </Row>
            </Container>
        </>
    )
}
