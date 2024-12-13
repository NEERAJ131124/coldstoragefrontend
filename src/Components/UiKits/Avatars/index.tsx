import React from 'react'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { Avatars, UiKits } from '../../../Utils/Constants'
import { Container, Row } from 'reactstrap'
import AvatarSizes from './AvatarSizes'
import StatusIndicator from './StatusIndicator'
import Shapes from './Shapes'
import Ratio from './Ratio'
import Grouping from './Grouping'
import AvatarInitial from './AvatarInitial'
import AvatarPing from './AvatarPing'
import AvatarProfile from './AvatarProfile'

export default function AvatarsContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={Avatars} parent={UiKits} title={Avatars} />
            <Container fluid>
                <div className="user-profile">
                    <Row>
                        <AvatarSizes />
                        <StatusIndicator />
                        <Shapes />
                        <Ratio />
                        <Grouping />
                        <AvatarInitial/>
                        <AvatarPing/>
                        <AvatarProfile/>
                    </Row>
                </div>
            </Container>
        </>
    )
}
