import React from 'react'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { ProgressBarTitle, UiKits } from '../../../Utils/Constants'
import { Container, Row } from 'reactstrap'
import BasicProgress from './BasicProgress'
import StripedProgress from './StripedProgress'
import AnimatedProgress from './AnimatedProgress'
import MultipleBars from './MultipleBars'
import StepsBar from './StepsBar'
import CustomProgress from './CustomProgress'
import SmallProgress from './SmallProgress'
import LargeProgress from './LargeProgress'
import CustomSizes from './CustomSizes'

export default function ProgressContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={ProgressBarTitle} parent={UiKits} title={ProgressBarTitle} />
            <Container fluid>
                <Row>
                    <BasicProgress />
                </Row>
                <Row>
                    <StripedProgress />
                    <AnimatedProgress />
                </Row>
                <Row>
                    <MultipleBars />
                    <StepsBar />
                </Row>
                <CustomProgress />
                <Row>
                    <SmallProgress />
                    <LargeProgress />
                </Row>
                <CustomSizes />
            </Container>
        </>
    )
}
