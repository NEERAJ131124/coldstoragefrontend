import React, { useState } from 'react'
import { Container, Row } from 'reactstrap'
import SocialHeader from './SocialHeader'
import SocialTabContents from './SocialTabContents';
import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import { ApplicationTitle, SocialAppTitle } from '../../../Utils/Constants';

export default function SocialAppContainer() {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <>
            <Breadcrumbs pageTitle={SocialAppTitle} parent={ApplicationTitle} title={SocialAppTitle} />
            <Container fluid>
                <div className="user-profile social-app-profile">
                    <Row>
                        <SocialHeader activeTab={activeTab} setActiveTab={setActiveTab} />
                    </Row>
                    <SocialTabContents activeTab={activeTab} />
                </div>
            </Container>
        </>
    )
}