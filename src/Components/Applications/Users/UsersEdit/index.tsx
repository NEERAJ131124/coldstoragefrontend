import React from 'react'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { Container, Row } from 'reactstrap'
import { EditProfileTitle, UsersTitle } from '../../../../Utils/Constants'
import MyProfile from './MyProfile'
import EditProfile from './EditProfile'
import AddProjectsAndUpload from './AddProjectsAndUpload'

export default function EditProfileContainer() {

    return (
        <>
            <Breadcrumbs pageTitle={UsersTitle} parent={UsersTitle} title={EditProfileTitle} />
            <Container fluid>
                <div>
                    <Row>
                        <EditProfile />
                    </Row>
                </div>
            </Container>
        </>
    )
}