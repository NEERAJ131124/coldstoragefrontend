import React from 'react'
import Breadcrumbs from '../../CommonElements/Breadcrumbs'
import { ActiveButtonTitle, BoldButtonTitle, ButtonsTitle, DefaultButtonTitle, DisabledButtonTitle, EdgeButtonTitle, FlatButtonTitle, LargeButtonTitle, OutlineButtonTitle, SmallButtonTitle } from '../../Utils/Constants'
import { Col, Container, Row } from 'reactstrap'
import CommonButtons from './Common/CommonButtons'
import { activeButtonsData, activeButtonsSubTitle, boldButtonsSubTitle, boldOutlineButtonsData, defaultButtonsData, defaultButtonsSubTitle, disabledButtonsData, disabledButtonsSubTitle, edgeButtonsData, edgeButtonsSubTitle, flatButtonsData, flatButtonsSubTitle, largeButtonsData, largeButtonsSubTitle, outlineButtonsData, outlineButtonsSubTitle, smallButtonsData, smallButtonsSubTitle } from '../../Data/Buttons'
import ButtonsGroup from './ButtonsGroup'

export default function ButtonsContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={ButtonsTitle} parent={ButtonsTitle} title={ButtonsTitle} />
            <Container fluid>
                <Row>
                    <Col sm={12}>
                        <CommonButtons commonButtonsData={defaultButtonsData} title={DefaultButtonTitle} subTitle={defaultButtonsSubTitle} />
                        <CommonButtons commonButtonsData={flatButtonsData} title={FlatButtonTitle} subTitle={flatButtonsSubTitle} />
                        <CommonButtons commonButtonsData={edgeButtonsData} title={EdgeButtonTitle} subTitle={edgeButtonsSubTitle} />
                        <ButtonsGroup/>
                        <CommonButtons commonButtonsData={largeButtonsData} title={LargeButtonTitle} subTitle={largeButtonsSubTitle} />
                        <CommonButtons commonButtonsData={smallButtonsData} title={SmallButtonTitle} subTitle={smallButtonsSubTitle} />
                        <CommonButtons commonButtonsData={activeButtonsData} title={ActiveButtonTitle} subTitle={activeButtonsSubTitle} />
                        <CommonButtons commonButtonsData={disabledButtonsData} title={DisabledButtonTitle} subTitle={disabledButtonsSubTitle} />
                        <CommonButtons commonButtonsData={outlineButtonsData} title={OutlineButtonTitle} subTitle={outlineButtonsSubTitle} />
                        <CommonButtons commonButtonsData={boldOutlineButtonsData} title={BoldButtonTitle} subTitle={boldButtonsSubTitle} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
