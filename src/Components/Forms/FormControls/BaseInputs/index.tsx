import React from 'react'
import { Container, Row } from 'reactstrap'
import BasicForm from './BasicForm'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { BaseInputsTitle, FormControlsTitle } from '../../../../Utils/Constants'
import Sizing from './Sizing'
import BasicInput from './BasicInput'
import FlatStyle from './FlatStyle'
import EdgesStyle from './EdgesStyle'
import RaiseStyle from './RaiseStyle'

export default function BaseInputsContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={BaseInputsTitle} parent={FormControlsTitle} title={BaseInputsTitle} />
            <Container fluid>
                <Row>
                    <BasicForm />
                    <Sizing />
                    <BasicInput />
                    <FlatStyle />
                    <EdgesStyle />
                    <RaiseStyle />
                </Row>
            </Container>
        </>
    )
}