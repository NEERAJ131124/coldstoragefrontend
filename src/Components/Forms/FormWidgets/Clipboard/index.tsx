import React from 'react'
import { Container, Row } from 'reactstrap'
import ClipboardOnTextInput from './ClipboardOnTextInput'
import ClipboardOnTextArea from './ClipboardOnTextArea'
import ClipboardOnParagraph from './ClipboardOnParagraph'
import CopyPortionFromParagraph from './CopyPortionFromParagraph'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { ClipboardTitle, FormWidgetsTitle } from '../../../../Utils/Constants'

export default function ClipboardContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={ClipboardTitle} parent={FormWidgetsTitle} title={ClipboardTitle} />
            <Container fluid>
                <Row>
                    <ClipboardOnTextInput />
                    <ClipboardOnTextArea />
                    <ClipboardOnParagraph />
                    <CopyPortionFromParagraph />
                </Row>
            </Container>
        </>
    )
}