import React from 'react'
import { Container, Row } from 'reactstrap'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { AccordionTitle, UiKits } from '../../../Utils/Constants'
import SimpleAccordion from './SimpleAccordion'
import FlushAccordion from './FlushAccordion'
import MultipleCollapse from './MultipleCollapse'
import IconAccordion from './IconAccordion'
import OutlineAccordion from './OutlineAccordion'
import HorizontalAccordion from './HorizontalAccordion'
import CollapesAccordion from './CollapesAccordion'

export default function AccordionContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={AccordionTitle} parent={UiKits} title={AccordionTitle} />
            <Container fluid className='accordion-page'>
                <Row>
                    <SimpleAccordion />
                    <FlushAccordion />
                    <MultipleCollapse />
                    <IconAccordion />
                    <OutlineAccordion />
                    <HorizontalAccordion />
                    <CollapesAccordion />
                </Row>
            </Container>
        </>
    )
}
