import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { VariationOfSwitchesTitle } from '../../../../../Utils/Constants'
import { variationOfSwitchSubTitle } from '../../../../../Data/Forms/FormWidgets'
import { UL } from '../../../../../AbstractElements'
import SkewedFlipSwitch from './SkewedFlipSwitch'
import CheckedFlatSwitch from './CheckedFlatSwitch'

export default function VariationOfSwitches() {
    return (
        <Col md={6}>
            <Card>
                <CommonCardHeader title={VariationOfSwitchesTitle} subTitle={variationOfSwitchSubTitle} />
                <CardBody className="switch-wrapper">
                    <UL className="tg-list common-flex simple-list flex-row">
                        <SkewedFlipSwitch />
                        <CheckedFlatSwitch />
                    </UL>
                </CardBody>
            </Card>
        </Col>
    )
}
