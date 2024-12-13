import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { ButtonsWithPrefixPostfixTitle } from '../../../../../Utils/Constants'
import { touchspinSubTitle } from '../../../../../Data/Forms/FormWidgets'
import CommonPrefixAndPostfix from '../Common/CommonPrefixAndPostfix'

export default function ButtonsWithPrefixPostfix() {
    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader title={ButtonsWithPrefixPostfixTitle} subTitle={touchspinSubTitle} />
                <CardBody className="common-flex pre-post-touchspin bg-touchspin">
                    <CommonPrefixAndPostfix preButton color />
                    <CommonPrefixAndPostfix PostButton color />
                </CardBody>
            </Card>
        </Col>
    )
}