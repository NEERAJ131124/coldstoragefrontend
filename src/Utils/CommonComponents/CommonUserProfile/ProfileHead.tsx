import React from 'react'
import { Col, Row } from 'reactstrap'
import { H5, Image } from '../../../AbstractElements'
import { dynamicImage } from '../..'
import SocialMedia from './SocialMedia'
import { ProfileHeadProps } from '../../../Types/CommonComponent.type'

export default function ProfileHead({ month, time, activeTime }: ProfileHeadProps) {
    return (
        <Row className="g-2">
            <Col sm={8}>
                <div className="d-flex">
                    <Image className="img-thumbnail rounded-circle me-3" src={dynamicImage(`user/7.jpg`)} alt="Generic placeholder image" />
                    <div className="flex-grow-1 align-self-center">
                        <H5 className="mt-0 user-name">{'William C. Jennings'}</H5>
                        <div className="tour-wrapper">
                            <span>{month}</span>
                            <i className="tour-dot fa-solid fa-circle" />
                            <span className="text-danger">{time}</span>
                        </div>
                    </div>
                </div>
            </Col>
            <Col sm={4} className="align-self-center mt-0 text-end social-tour">
                <SocialMedia className='social-tour' />
                <div className="float-sm-end">
                    <small>{activeTime}</small>
                </div>
            </Col>
        </Row>
    )
}
