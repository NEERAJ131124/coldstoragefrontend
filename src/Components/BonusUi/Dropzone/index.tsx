import React from 'react'
import { Container, Row } from 'reactstrap'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { BonusUi, DropzoneTitle } from '../../../Utils/Constants'
import DefaultDropzone from './DefaultDropzone'
import ImagePreview from './ImagePreview'
import SingleFileupload from './SingleFileupload'
import MultiFileUpload from './MultiFileUpload'

export default function DropzoneContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={DropzoneTitle} parent={BonusUi} title={DropzoneTitle} />
            <Container fluid>
                <Row>
                    <DefaultDropzone />
                    <ImagePreview />
                    <SingleFileupload />
                    <MultiFileUpload />
                </Row>
            </Container>
        </>
    )
}
