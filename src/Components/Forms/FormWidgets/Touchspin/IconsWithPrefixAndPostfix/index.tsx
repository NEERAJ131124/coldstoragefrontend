import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { IconsWithPrefixAndPostfixTitle } from '../../../../../Utils/Constants'
import { touchspinSubTitle } from '../../../../../Data/Forms/FormWidgets'
import CommonPrefixAndPostfix from '../Common/CommonPrefixAndPostfix'

export default function IconsWithPrefixAndPostfix() {
    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader title={IconsWithPrefixAndPostfixTitle} subTitle={touchspinSubTitle} />
                <CardBody className="common-flex pre-post-touchspin">
                    <CommonPrefixAndPostfix preIcon />
                    <CommonPrefixAndPostfix postIcon />
                </CardBody>
            </Card>
        </Col>
    )
}
