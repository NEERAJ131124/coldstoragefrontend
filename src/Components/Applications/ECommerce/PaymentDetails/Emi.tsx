import React from 'react'
import { Card, CardBody, Col} from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { EmiTitle } from '../../../../Utils/Constants'
import EmiForm from './EmiForm'

export default function Emi() {
    return (
        <Col xxl={4} lg={6} className="box-col-6">
            <Card>
                <CommonCardHeader headClass='py-4' title={EmiTitle} />
                <CardBody>
                    <EmiForm/>
                </CardBody>
            </Card>
        </Col>
    )
}