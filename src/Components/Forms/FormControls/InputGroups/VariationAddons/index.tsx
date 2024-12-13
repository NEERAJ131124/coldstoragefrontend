import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { VariationAddonsTitle } from '../../../../../Utils/Constants'
import { varationOfAddonsSubTitle } from '../../../../../Data/Forms/FormControls'
import CommonCardFooter from '../../Common/CommonCardFooter'
import VariationAddonsFormContent from './VariationAddonsFormContent'

export default function VariationAddons() {
    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader title={VariationAddonsTitle} subTitle={varationOfAddonsSubTitle} />
                <CardBody className="card-wrapper input-radius variation-input">
                    <Row>
                        <Col>
                            <VariationAddonsFormContent />
                        </Col>
                    </Row>
                </CardBody>
                <CommonCardFooter color1='primary' color2='light' btn2Class='text-dark' />
            </Card>
        </Col>
    )
}
