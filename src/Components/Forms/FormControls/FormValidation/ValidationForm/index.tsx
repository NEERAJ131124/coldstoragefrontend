import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { ValidationFormTitle } from '../../../../../Utils/Constants'
import FormCard from './FormCard'
import { validationFormSubTitle } from '../../../../../Data/Forms/FormControls'

export default function ValidationForm() {
    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader title={ValidationFormTitle} subTitle={validationFormSubTitle} />
                <CardBody>
                    <FormCard />
                </CardBody>
            </Card>
        </Col>
    )
}
