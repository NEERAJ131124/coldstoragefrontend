import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { BordersTitle } from '../../../../Utils/Constants'
import { bordersSubTitle } from '../../../../Data/UiKits/HelperClasses'
import AdditiveBorder from './AdditiveBorder'
import SubtractiveBorder from './SubtractiveBorder'
import AdditiveRadius from './AdditiveRadius'

export default function Borders() {
    return (
        <Col xs={12}>
            <Card>
                <CommonCardHeader title={BordersTitle} subTitle={bordersSubTitle} />
                <CardBody>
                    <Row className='g-3'>
                        <AdditiveBorder />
                        <SubtractiveBorder />
                        <AdditiveRadius />
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
