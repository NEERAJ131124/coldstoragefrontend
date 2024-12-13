import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { FormControlsTitle, InputMaskTitle } from '../../../../Utils/Constants'
import { inputMasksSubTitle } from '../../../../Data/Forms/FormControls'
import DateFormat from './DateFormat'
import TimeFormat from './TimeFormat'
import DefaultInputMask from './DefaultInputMask'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'

export default function InputMaskContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={InputMaskTitle} parent={FormControlsTitle} title={InputMaskTitle} />
            <Container fluid>
                <Row>
                    <Col xs={12}>
                        <Card className='masks-input'>
                            <CommonCardHeader title={InputMaskTitle} subTitle={inputMasksSubTitle} />
                            <CardBody>
                                <Row className='g-3'>
                                    <DateFormat />
                                    <TimeFormat />
                                    <DefaultInputMask />
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
