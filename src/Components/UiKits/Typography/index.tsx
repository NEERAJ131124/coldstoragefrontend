import React from 'react'
import { Container, Row } from 'reactstrap'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { TypographyTitle, UiKits } from '../../../Utils/Constants'
import Listing from './Listing'
import DisplayHeading from './DisplayHeading'
import InlineTextElements from './InlineTextElements'
import TextColor from './TextColor'
import BlockQuotesCard from './BlockQuotesCard'
import Headings from './Headings'
import ColoredHeadings from './ColoredHeadings'
import FontWeight from './FontWeight'

export default function TypographyContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={TypographyTitle} parent={UiKits} title={TypographyTitle} />
            <Container fluid>
                <Row>
                    <Headings />
                    <ColoredHeadings />
                    <FontWeight />
                    <Listing />
                    <DisplayHeading />
                    <InlineTextElements />
                    <TextColor />
                    <BlockQuotesCard />
                </Row>
            </Container>
        </>
    )
}
