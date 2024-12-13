import React from 'react'
import { Container, Row } from 'reactstrap'
import JavascriptMode from './JavascriptMode'
import HtmlMode from './HtmlMode'
import CssMode from './CssMode'
import PhpMode from './PhpMode'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { AceCodeEditorTitle, EditorTitle } from '../../../../Utils/Constants'

export default function AceCodeEditorContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={AceCodeEditorTitle} parent={EditorTitle} title={AceCodeEditorTitle} />
            <Container fluid>
                <Row>
                    <JavascriptMode />
                    <HtmlMode />
                    <CssMode />
                    <PhpMode />
                </Row>
            </Container>
        </>
    )
}