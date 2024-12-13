import React from 'react'
import { Container, Row } from 'reactstrap'
import SocialProfileCards from '../../../../Utils/CommonComponents/CommonUserProfile/SocialProfileCards'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { UserCardsTitle, UsersTitle } from '../../../../Utils/Constants'

export default function UserCardsContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={UserCardsTitle} parent={UsersTitle} title={UserCardsTitle} />
            <Container fluid>
                <Row>
                    <SocialProfileCards />
                </Row>
            </Container>
        </>
    )
}