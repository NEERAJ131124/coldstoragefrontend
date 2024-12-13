import React from 'react'
import { Container, Row } from 'reactstrap'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { HelperClassTitle, UiKits } from '../../../Utils/Constants'
import Borders from './Borders'
import BorderStyles from './BorderStyles'
import BackgroundColors from './BackgroundColors'
import BorderColor from './BorderColor'
import ImageSize from './ImageSize'
import FontStyle from './FontStyle'
import FontWeight from './FontWeight'
import TextColors from './TextColors'
import FontSize from './FontSize'

export default function HelperClassContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={HelperClassTitle} parent={UiKits} title={HelperClassTitle} />
            <Container fluid>
                <Row>
                    <Borders />
                    <BorderStyles />
                    <BackgroundColors />
                    <BorderColor />
                    <ImageSize />
                    <FontStyle />
                    <FontWeight />
                    <TextColors />
                    <FontSize />
                </Row>
            </Container>
        </>
    )
}
