import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import { Image } from '../../../../../../AbstractElements'
import { dynamicImage } from '../../../../../../Utils'
import ProfileIntro from './ProfileIntro'
import FollowData from './Common/FollowData'
import { Followers, FollowingsTitle } from '../../../../../../Utils/Constants'
import LatestPhotos from './LatestPhotos'
import FriendsCard from './FriendsCard'

export default function RightSide() {
    return (
        <Col xl={3} className="xl-100 box-col-12">
            <div className="default-according style-1 faq-accordion job-accordion">
                <Row>
                    <ProfileIntro />
                    <FollowData heading={Followers} />
                    <FollowData heading={FollowingsTitle} />
                    <LatestPhotos />
                    <FriendsCard />
                    <Col xl={12} className='xl-50 box-col-6'>
                        <Card>
                            <Image className="img-fluid" src={dynamicImage(`social-app/timeline-4.png`)} alt="" />
                        </Card>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}