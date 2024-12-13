import React from 'react'
import { Card, CardBody, CardFooter, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { DarkCardTitle } from '../../../../Utils/Constants'
import { darkCardSubTitle } from '../../../../Data/BonusUi/BasicCard'
import { H6, Image, P } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Utils'

export default function DarkCard() {
    return (
        <Col sm={12}>
            <Card className='dark-card'>
                <CommonCardHeader headClass='bg-dark border-bottom' titleClass='text-white' title={DarkCardTitle} subTitle={darkCardSubTitle} />
                <CardBody className='bg-dark'>
                    <div className='d-flex align-items-center gap-3 pills-blogger'>
                        <div className='blog-wrapper'>
                            <Image className='blog-img' src={dynamicImage(`other-images/headphones.png`)} alt='head-phone' />
                        </div>
                        <div className='blog-content'>
                            <P>
                                <em className='text-danger fw-bold'>{'Smart headphones'} </em>
                                {'— also called smart earbuds or hearable — are high-tech in-ear devices that do more than transmit audio. These headphones are usually wireless, and they can sync up with your phone, tablet, computer or other Bluetooth-enabled device. The main appeal of hearables is convenience, as they allow you to complete common tasks without directly accessing your phone or computer. Smart wireless headphones sync up to other devices using Bluetooth technology, and many of their features rely on data from your smartphone or computer.'}
                            </P>
                        </div>
                    </div>
                </CardBody>
                <CardFooter className='bg-dark'>
                    <H6 className='mb-0'>{'Card Footer'}</H6>
                </CardFooter>
            </Card>
        </Col>
    )
}
