import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { AbsoluteCard } from '../../../../Utils/Constants'
import { Image, P } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Utils'

export default function AbsolutePrimary() {
    return (
        <Col sm={12} xl={6}>
            <Card className='card-absolute'>
                <CommonCardHeader headClass='bg-primary' titleClass='text-light' title={AbsoluteCard} />
                <CardBody>
                    <div className='d-flex list-behavior-1 align-items-center'>
                        <div className='flex-shrink-0'>
                            <Image className='tab-img img-fluid' src={dynamicImage(`blog/img.png`)} alt='home' />
                        </div>
                        <div className='flex-grow-1'>
                            <P className='mb-xl-0 mb-sm-4'>{'We provide end to end digital solutions, right from designing your website/application development: Domain, Web Hosting, Email Hosting Registration, Search Engine Optimization and other Internet Marketing, Renewal of Services timely and effectively.'}</P>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
