import React from 'react'
import { Container, Row } from 'reactstrap'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { BonusUi, TreeViewTitle } from '../../../Utils/Constants'
import BasicTree from './BasicTree'
import DisabledTree from './DisabledTree'

export default function TreeViewContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={TreeViewTitle} parent={BonusUi} title={TreeViewTitle} />
            <Container fluid>
                <Row>
                    <BasicTree />
                    <DisabledTree />
                </Row>
            </Container>
        </>
    )
}
