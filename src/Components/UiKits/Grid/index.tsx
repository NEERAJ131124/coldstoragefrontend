import React from 'react'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { GridTitle, UiKits } from '../../../Utils/Constants'
import { Container, Row } from 'reactstrap'
import GridOptions from './GridOptions'
import GridColumn from './GridColumn'
import VerticalAlignment from './VerticalAlignment'
import HorizontalAlignment from './HorizontalAlignment'
import Nesting from './Nesting'
import Order from './Order'
import Offset from './Offset'

export default function GridContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={GridTitle} parent={UiKits} title={GridTitle} />
            <Container fluid className='grid-page'>
                <Row>
                    <GridOptions />
                    <GridColumn />
                    <VerticalAlignment />
                    <HorizontalAlignment />
                    <Nesting />
                    <Order />
                    <Offset />
                </Row>
            </Container>
        </>
    )
}
