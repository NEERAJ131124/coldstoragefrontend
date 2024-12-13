import React from 'react'
import { Container, Row } from 'reactstrap'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { BonusUi, SweetalertTitle } from '../../../Utils/Constants'
import BasicAlert from './BasicAlert'
import AdvanceAlert from './AdvanceAlert'
import UniqueSweetalert from './UniqueSweetalert'
import DirectionSweetalert from './DirectionSweetalert'
import InputSweetalert from './InputSweetalert'
import GithubAvatar from './GithubAvatar'
import RtlSupport from './RtlSupport'
import SuccessMessage from './SuccessMessage'
import DangerAlert from './DangerAlert'

export default function SweetAlertContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={SweetalertTitle} parent={BonusUi} title={SweetalertTitle} />
            <Container fluid>
                <Row>
                    <BasicAlert />
                    <AdvanceAlert />
                    <UniqueSweetalert />
                    <DirectionSweetalert />
                    <InputSweetalert />
                    <GithubAvatar />
                    <RtlSupport />
                    <SuccessMessage />
                    <DangerAlert />
                </Row>
            </Container>
        </>
    )
}
