import React from 'react'
import { Card, CardBody, Col, Form, Input, Label } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { BorderRightTitle } from '../../../../Utils/Constants'
import { borderRightSubTitle } from '../../../../Data/BonusUi/CreativeCard'
import { P } from '../../../../AbstractElements'

export default function BorderRight() {
    return (
        <Col md={6} xs={12}>
            <Card>
                <CommonCardHeader title={BorderRightTitle} subTitle={borderRightSubTitle} headClass='border-r-secondary' />
                <CardBody>
                    <P>{"Us Technology offers web & mobile development solutions for all industry verticals.Include a short form using fields that'll help your business understand who's contacting them."}</P>
                    <Form>
                        <Label htmlFor="exampleFormControlInput1">{'Email Address'}</Label>
                        <Input id="exampleFormControlInput1" type="email" placeholder="youremail@gmail.com" />
                    </Form>
                </CardBody>
            </Card>
        </Col>
    )
}
