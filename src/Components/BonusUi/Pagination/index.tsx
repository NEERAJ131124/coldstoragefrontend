import React from 'react'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { BonusUi, PaginationTitle } from '../../../Utils/Constants'
import { Container, Row } from 'reactstrap'
import DefaultPagination from './DefaultPagination'
import ActiveDisablePage from './ActiveDisablePage'
import IconPagination from './IconPagination'
import RoundedPagination from './RoundedPagination'
import PaginationAlign from './PaginationAlign'
import PaginationSize from './PaginationSize'
import WithDisabled from './WithDisabled'
import WithOutline from './WithOutline'

export default function PaginationContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={PaginationTitle} parent={BonusUi} title={PaginationTitle} />
            <Container fluid>
                <Row>
                    <DefaultPagination />
                    <WithDisabled />
                    <IconPagination />
                    <ActiveDisablePage />
                    <WithOutline />
                    <RoundedPagination />
                    <PaginationAlign />
                    <PaginationSize />
                </Row>
            </Container>
        </>
    )
}