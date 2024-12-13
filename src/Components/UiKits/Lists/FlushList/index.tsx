import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { FlushListTitle } from '../../../../Utils/Constants'
import { flushListSubTitle } from '../../../../Data/UiKits/Lists'
import { LI, UL } from '../../../../AbstractElements'

export default function FlushList() {
    return (
        <Col xxl={4} md={12}>
            <Card>
                <CommonCardHeader title={FlushListTitle} subTitle={flushListSubTitle} />
                <CardBody>
                    <UL className="list-group-flush">
                        <LI><i className="iconly-Arrow-Right-3 icli"> </i>{'PRODUCT'}</LI>
                        <LI><i className="iconly-Arrow-Right-3 icli"> </i>{'PRODUCT DETAILS'}</LI>
                        <LI><i className="iconly-Arrow-Right-3 icli"> </i>{'CART'}</LI>
                        <LI><i className="iconly-Arrow-Right-3 icli"> </i>{'CHECKOUT'}</LI>
                    </UL>
                </CardBody>
            </Card>
        </Col>
    )
}
