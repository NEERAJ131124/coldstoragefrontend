import React from 'react'
import { Container, Row } from 'reactstrap'
import UserProfile2Style from './UserProfile2Style'
import UserProfile3Style from './UserProfile3Style'
import UserFirstProfile from '../../../../Utils/CommonComponents/CommonUserProfile/UserFirstProfile'
import UserProfile4Style from './UserProfile4Style'
import UserProfile5Style from './UserProfile5Style'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { UserProfileTitle, UsersTitle } from '../../../../Utils/Constants'
import MyProfile from '../UsersEdit/MyProfile'

export default function UserProfileContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={UserProfileTitle} parent={UsersTitle} title={UserProfileTitle} />
            <Container fluid>
                <div className="user-profile">
                    <Row>
                        <MyProfile />
                        {/* <UserProfile2Style />
                        <UserProfile3Style />
                        <UserProfile4Style />
                        <UserProfile5Style /> */}
                    </Row>
                </div>
            </Container>
        </>
    )
}