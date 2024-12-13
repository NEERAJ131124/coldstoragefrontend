import React from 'react'
import { Col, Row } from 'reactstrap'
import CountUp from 'react-countup';

export default function ProfileFollower() {
    return (
        <div className="follow">
            <Row>
                <Col xs={6} className="border-end text-md-end">
                    <CountUp start={0} end={25869} className='follow-num counter' />
                    <span>{'Follower'}</span>
                </Col>
                <Col xs={6} className='text-md-start'>
                    <CountUp start={0} end={659887} className='follow-num counter' />
                    <span>{'Following'}</span>
                </Col>
            </Row>
        </div>
    )
}
