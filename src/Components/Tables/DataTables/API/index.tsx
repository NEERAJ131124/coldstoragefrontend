import React from 'react'
import { Container, Row } from 'reactstrap'
import AddRows from './AddRows'
import ChildRows from './ChildRows'
import RowSelectionAndDeletion from './RowSelectionAndDeletion'
import CustomFiltering from './CustomFiltering'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { ApiDataTablesTitle, DataTablesTitle } from '../../../../Utils/Constants'

export default function APIContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={ApiDataTablesTitle} parent={DataTablesTitle} title={ApiDataTablesTitle} />
            <Container fluid>
                <Row>
                    <AddRows />
                    <ChildRows />
                    <RowSelectionAndDeletion />
                    <CustomFiltering />
                </Row>
            </Container>
        </>
    )
}