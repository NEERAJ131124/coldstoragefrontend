import React from 'react'
import { Container, Row } from 'reactstrap'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { BonusUi, BreadcrumbTitle } from '../../../Utils/Constants'
import DefaultBreadcrumb from './DefaultBreadcrumb'
import DividerBreadcrumb from './DividerBreadcrumb'
import WithIconBreadcrumb from './WithIconBreadcrumb'
import SimpleBreadcrumb from './SimpleBreadcrumb'
import BreadcrumbAlignment from './BreadcrumbAlignment'
import ColoredBreadcrumb from './ColoredBreadcrumb'

export default function BreadcrumbContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={BreadcrumbTitle} parent={BonusUi} title={BreadcrumbTitle} />
            <Container fluid className='breadcrumb-page'>
                <Row>
                    <DefaultBreadcrumb />
                    <DividerBreadcrumb />
                    <WithIconBreadcrumb />
                    <SimpleBreadcrumb />
                    <BreadcrumbAlignment />
                    <ColoredBreadcrumb />
                </Row>
            </Container>
        </>
    )
}