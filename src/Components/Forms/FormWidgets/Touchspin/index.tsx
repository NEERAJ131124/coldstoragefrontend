import React from 'react'
import { Container, Row } from 'reactstrap'
import DefaultTouchspin from './DefaultTouchspin'
import OutlinedTouchspin from './OutlinedTouchspin'
import IconsWithPrefixAndPostfix from './IconsWithPrefixAndPostfix'
import ButtonsWithPrefixPostfix from './ButtonsWithPrefixPostfix'
import RoundedTouchspin from './RoundedTouchspin'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { FormWidgetsTitle, TouchspinTitle } from '../../../../Utils/Constants'

export default function TouchspinContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={TouchspinTitle} parent={FormWidgetsTitle} title={TouchspinTitle} />
            <Container fluid>
                <div className="bootstrap-touchspin">
                    <Row>
                        <DefaultTouchspin />
                        <OutlinedTouchspin />
                        <IconsWithPrefixAndPostfix />
                        <ButtonsWithPrefixPostfix />
                        <RoundedTouchspin />
                    </Row>
                </div>
            </Container>
        </>
    )
}