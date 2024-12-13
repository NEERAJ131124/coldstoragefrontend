import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { TooltipFormValidationTitle } from '../../../../../Utils/Constants'
import TooltipFormValidationForm from './TooltipFormValidationForm'
import { tooltipFormValidationSubTitle } from '../../../../../Data/Forms/FormControls'

export default function TooltipFormValidation() {
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader title={TooltipFormValidationTitle} subTitle={tooltipFormValidationSubTitle} />
                <CardBody>
                    <TooltipFormValidationForm />
                </CardBody>
            </Card>
        </Col>
    )
}
