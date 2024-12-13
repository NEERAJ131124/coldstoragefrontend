import React from 'react'
import { Container, Row } from 'reactstrap'
import StandardEditor from './StandardEditor'
import SnowTheme from './SnowTheme'
import BubbleTheme from './BubbleTheme'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { EditorTitle, QuillEditorTitle } from '../../../../Utils/Constants'

export default function QuillEditorContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={QuillEditorTitle} parent={EditorTitle} title={QuillEditorTitle} />
            <Container fluid>
                <Row>
                    <StandardEditor />
                    <SnowTheme />
                    <BubbleTheme />
                </Row>
            </Container>
        </>
    )
}
