import React from 'react'
import { Card, CardBody, CardFooter, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { H5, H6, P } from '../../../../AbstractElements'
import { InfoColorBodyTitle } from '../../../../Utils/Constants'

export default function InfoColorBody() {
    return (
        <Col xl={4} sm={6}>
            <Card className='height-equal'>
                <CommonCardHeader headClass='pb-3' title={InfoColorBodyTitle} />
                <CardBody className='bg-info'>
                    <H5 className='pb-2'> {'UX Designer'} </H5>
                    <P className='mb-0'>{'It is the responsibility of the UX designer to make a product or service useful, pleasurable, and accessible. The word "user experience" is used by various industries, although it is most frequently related to digital design for websites and mobile applications.There is no need for coding in user experience design.'}</P>
                </CardBody>
                <CardFooter>
                    <H6 className='mb-0 text-end'>{'Admiro Theme'}</H6>
                </CardFooter>
            </Card>
        </Col>
    )
}
