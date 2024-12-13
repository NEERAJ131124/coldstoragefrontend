import React from 'react'
import { Container, Row } from 'reactstrap'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { PopoverTitle, UiKits } from '../../../Utils/Constants'
import BasicPopover from './BasicPopover'
import PopoverDirection from './PopoverDirection'
import PopoverOffset from './PopoverOffset'

export default function PopoverContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={PopoverTitle} parent={UiKits} title={PopoverTitle} />
            <Container fluid>
                <Row className="popover-main">
                    <BasicPopover />
                    <PopoverDirection />
                    <PopoverOffset />
                </Row>
            </Container>
        </>
    )
}
