import React from 'react'
import { Card, CardBody, CardFooter, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { InfoColorFooterTitle } from '../../../../Utils/Constants'
import { H5, H6, P } from '../../../../AbstractElements'

export default function InfoColorFooter() {
    return (
        <Col xl={4} xs={12}>
            <Card className='height-equal'>
                <CommonCardHeader headClass='pb-3' title={InfoColorFooterTitle} />
                <CardBody>
                    <H5 className='pb-2'> {'Web Developer'} </H5>
                    <P className="mb-0">{'A programmer who uses the client-server architecture to create World Wide Web applications is known as a web developer. The apps generally employ any general-purpose programming language on the server and HTML, CSS, and JavaScript on the client.'}</P>
                </CardBody>
                <CardFooter className='bg-info'>
                    <H6 className='mb-0 text-end'>{'Admiro Theme'}</H6>
                </CardFooter>
            </Card>
        </Col>
    )
}
