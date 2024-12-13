import React from 'react'
import { Container, Row } from 'reactstrap'
import FileSidebar from './FileSidebar'
import FileContent from './FileContent'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { ApplicationTitle, FileManagerTitle } from '../../../Utils/Constants'

export default function FileManagerContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={FileManagerTitle} parent={ApplicationTitle} title={FileManagerTitle} />
            <Container className='manager-card' fluid>
                <Row>
                    <FileSidebar />
                    <FileContent />
                </Row>
            </Container>
        </>
    )
}