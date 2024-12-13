import React from 'react'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { ListsTitle, UiKits } from '../../../Utils/Constants'
import { Container, Row } from 'reactstrap'
import CustomList from './CustomList'
import ListWithCheckbox from './ListWithCheckbox'
import ListWithRadio from './ListWithRadio'
import ListWithNumber from './ListWithNumber'
import JsBehavior from './JsBehavior'
import NumberedBadgeList from './NumberedBadgeList'
import DisableList from './DisableList'
import ScrollableList from './ScrollableList'
import DefaultList from './DefaultList'
import ActiveList from './ActiveList'
import FlushList from './FlushList'
import ContextualClass from './ContextualClass'
import HorizontalList from './HorizontalList'

export default function ListsContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={ListsTitle} parent={UiKits} title={ListsTitle} />
            <Container fluid className='list-page'>
                <Row>
                    <DefaultList />
                    <ActiveList />
                    <FlushList />
                    <ContextualClass />
                    <HorizontalList />
                    <CustomList />
                    <ListWithCheckbox />
                    <ListWithRadio />
                    <ListWithNumber />
                    <JsBehavior />
                    <NumberedBadgeList />
                    <DisableList />
                    <ScrollableList />
                </Row>
            </Container>
        </>
    )
}
