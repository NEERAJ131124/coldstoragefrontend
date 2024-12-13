import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { VariationCheckboxTitle } from '../../../../../Utils/Constants'
import { variationCheckBoxSubTitle } from '../../../../../Data/Forms/FormControls'
import VariationActivities from './VariationActivities'
import VariationCheckboxUpgrade from './VariationCheckboxUpgrade'

export default function VariationCheckbox() {
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader title={VariationCheckboxTitle} subTitle={variationCheckBoxSubTitle} />
                <CardBody>
                    <Row className="g-3">
                        <VariationActivities />
                        <VariationCheckboxUpgrade />
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
