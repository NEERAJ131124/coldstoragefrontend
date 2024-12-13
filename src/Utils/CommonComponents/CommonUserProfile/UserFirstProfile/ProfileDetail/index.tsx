import React from 'react'
import { Col, Row } from 'reactstrap'
import ProfileMail from './ProfileMail'
import { Link } from 'react-router-dom'
import ProfileContact from './ProfileContact'
import ProfileFollower from './ProfileFollower'
import SocialMedia from '../../SocialMedia'
import { ProfileDetailProp } from '../../../../../Types/CommonComponent.type'

export default function ProfileDetail({path}: ProfileDetailProp) {
    return (
        <div className="info">
            <Row className="g-3 step3">
                <ProfileMail />
                <Col sm={12} lg={4} className="order-sm-0 order-xl-1">
                    <div className="user-designation tour-email">
                        <div className="title">
                            <Link to={`${process.env.PUBLIC_URL}/${path}`}> {'William C. Jennings'} </Link>
                        </div>
                        <div className="desc"> {'Web designer'}</div>
                    </div>
                </Col>
                <ProfileContact />
            </Row>
            <hr />
            <SocialMedia />
            <ProfileFollower />
        </div>
    )
}
