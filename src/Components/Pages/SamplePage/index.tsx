import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import CommonCardHeader from '../../../Utils/CommonComponents/CommonCardHeader'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { PagesTitle, SampleCardTitle, SamplePageTitle } from '../../../Utils/Constants'
import { samplePageData, samplePageSubTitle } from '../../../Data/Pages/SamplePage'
import { P } from '../../../AbstractElements'

export default function SamplePageContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={SamplePageTitle} parent={PagesTitle} title={SamplePageTitle} />
            <Container fluid>
                <Row>
                    <Col sm={12}>
                        <Card>
                            <CommonCardHeader title={SampleCardTitle} subTitle={samplePageSubTitle} />
                            <CardBody>
                                {samplePageData.map((item) => (
                                    <P key={item.id}>
                                        <strong>{item.strongText} </strong> {item.text}
                                    </P>
                                ))}
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}