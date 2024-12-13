import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { BorderLeftTitle } from '../../../../Utils/Constants'
import { borderLeftSubTitle } from '../../../../Data/BonusUi/CreativeCard'
import { LI, UL } from '../../../../AbstractElements'

export default function BorderLeft() {
    return (
        <Col md={6} xs={12}>
            <Card>
                <CommonCardHeader title={BorderLeftTitle} subTitle={borderLeftSubTitle} headClass='border-l-primary' />
                <CardBody>
                    <UL className="d-flex flex-column gap-1 simple-list align-items-start">
                        <LI>{"Us Technology offers web & mobile development solutions for all industry verticals.Include a short form using fields that'll help your business understand who's contacting them."}</LI>
                        <LI> <strong>{'Visit Us: '}</strong> {'2600 Hollywood Blvd,Florida, United States-33020'}</LI>
                        <LI> <strong>{'Mail Us: '}</strong>{'contact@us@gmail.com'}</LI>
                        <LI> <strong>{'Contact Number: '}</strong>{'(954) 357-7760'}</LI>
                    </UL>
                </CardBody>
            </Card>
        </Col>
    )
}
