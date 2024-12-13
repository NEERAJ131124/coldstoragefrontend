import React from 'react'
import { Container, Row } from 'reactstrap'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { BonusUi, SliderTitle } from '../../../Utils/Constants'
import DefaultSlider from './DefaultSlider'
import WithControls from './WithControls'
import AutoPlayVariant from './AutoPlayVariant'
import MouseWheelVariant from './MouseWheelVariant'
import WithIndicators from './WithIndicators'
import WithCaption from './WithCaption'
import CrossFade from './CrossFade'
import IndividualCarousel from './IndividualCarousel'
import DisableTouchSwiping from './DisableTouchSwiping'
import DarkVariant from './DarkVariant'

export default function SliderContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={SliderTitle} parent={BonusUi} title={SliderTitle} />
            <Container fluid>
                <Row>
                    <DefaultSlider />
                    <WithControls />
                    <AutoPlayVariant />
                    <MouseWheelVariant />
                    <WithIndicators />
                    <WithCaption />
                    <CrossFade />
                    <IndividualCarousel />
                    <DisableTouchSwiping />
                    <DarkVariant />
                </Row>
            </Container>
        </>
    )
}
