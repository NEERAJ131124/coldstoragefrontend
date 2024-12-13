import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { AbsoluteCard } from '../../../../Utils/Constants'
import { Image, P } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Utils'

export default function AbsoluteSecondary() {
    return (
        <Col sm={12} xl={6}>
            <Card className='card-absolute'>
                <CommonCardHeader headClass='bg-secondary' titleClass='text-light' title={AbsoluteCard} />
                <CardBody>
                    <div className='d-flex list-behavior-1 align-items-center'>
                        <div className='flex-shrink-0'>
                            <Image className='tab-img img-fluid' src={dynamicImage(`blog/blog.jpg`)} alt='home' />
                        </div>
                        <div className='flex-grow-1'>
                            <P className='mb-xl-0 mb-sm-4'>{"When someone visits your homepage, your design should inspire them to stay. Therefore, your value proposition should be established on the homepage for visitors to select to stay on your website.Building trust, expressing value,to the next step all depend on a page's design."}</P>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
