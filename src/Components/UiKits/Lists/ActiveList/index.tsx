import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { ActiveListTitle } from '../../../../Utils/Constants'
import { activeListSubTitle } from '../../../../Data/UiKits/Lists'
import { LI, UL } from '../../../../AbstractElements'

export default function ActiveList() {
    return (
        <Col xxl={4} md={6}>
            <Card>
                <CommonCardHeader title={ActiveListTitle} subTitle={activeListSubTitle} />
                <CardBody>
                    <UL>
                        <LI className=" active bg-warning-light"><i className="iconly-Arrow-Right-3 icli" /> {'UI Kits'}</LI>
                        <LI><i className="iconly-Arrow-Right-3 icli" /> {'Wow Animations'}</LI>
                        <LI> <i className="iconly-Arrow-Right-3 icli" /> {'Apex Charts'}</LI>
                        <LI><i className="iconly-Arrow-Right-3 icli" /> {'Starter Kits'}</LI>
                    </UL>
                </CardBody>
            </Card>
        </Col>
    )
}