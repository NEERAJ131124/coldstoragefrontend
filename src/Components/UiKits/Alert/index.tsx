import React from 'react'
import { Container, Row } from 'reactstrap'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { Alert, UiKits } from '../../../Utils/Constants'
import LinkDarkColor from './LinkDarkColor'
import LinkLightColor from './LinkLightColor'
import OutlineAlert from './OutlineAlert'
import AlertWithIcons from './AlertWithIcons'
import DismissingDarkAlert from './DismissingDarkAlert'
import DismissingLightAlert from './DismissingLightAlert'
import LiveAlert from './LiveAlert'
import LeftBorderAlert from './LeftBorderAlert'
import AdditionalAlert from './AdditionalAlert'

export default function AlertContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={Alert} parent={UiKits} title={Alert} />
            <Container fluid>
                <Row>
                    <LinkDarkColor />
                    <LinkLightColor />
                    <OutlineAlert />
                    <AlertWithIcons />
                    <DismissingDarkAlert />
                    <DismissingLightAlert />
                    <LiveAlert />
                    <LeftBorderAlert />
                    <AdditionalAlert />
                </Row>
            </Container>
        </>
    )
}
