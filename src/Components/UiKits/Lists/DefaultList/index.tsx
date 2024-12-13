import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { DefaultListTitle } from '../../../../Utils/Constants'
import { defaultListSubTitle } from '../../../../Data/UiKits/Lists'
import { LI, UL } from '../../../../AbstractElements'

export default function DefaultList() {
    return (
        <Col xxl={4} md={6}>
            <Card>
                <CommonCardHeader title={DefaultListTitle} subTitle={defaultListSubTitle} />
                <CardBody>
                    <UL>
                        <LI> <i className="iconly-Arrow-Right-3 icli" />{'Logo Design'}</LI>
                        <LI> <i className="iconly-Arrow-Right-3 icli" />{'Web Design & Development'}</LI>
                        <LI> <i className="iconly-Arrow-Right-3 icli" />{'E-Commerce'}</LI>
                        <LI> <i className="iconly-Arrow-Right-3 icli" />{'SEO'}</LI>
                    </UL>
                </CardBody>
            </Card>
        </Col>
    )
}
