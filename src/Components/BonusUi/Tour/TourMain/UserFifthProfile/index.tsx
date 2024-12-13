import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import ProfileHead from '../../../../../Utils/CommonComponents/CommonUserProfile/ProfileHead'
import { Href } from '../../../../../Utils/Constants'
import { Image, P } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'
import ProfileLike from '../Common/ProfileLike'

export default function UserFifthProfile() {
    return (
        <Col sm={12}>
            <Card>
                <div className="profile-img-style">
                    <ProfileHead time='5 min read' activeTime='2 Hours ago' month='02 Feb' /><hr />
                    <Row>
                        <Col lg={12} xl={4}>
                            <div className='step8'>
                                <a href={Href}>
                                    <Image className="img-fluid rounded" src={dynamicImage(`other-images/sidebar-bg.jpg`)} alt="nature" />
                                </a>
                            </div>
                        </Col>
                        <Col xl={6}>
                            <P className="block-ellipsis pt-xl-0 pt-3">
                                {"The wind gives life to the planet. This unobservable, enigmatic energy has the power to revitalize a setting.Its absence can cause the world to become serenely motionless.Its strength is scarcely visible on bare mountain summits, but it becomes obvious in woods and on the water.Winds may be violent and even harmful.When we investigate it carefully Nature is not a destination.Home is here.Garry Snyder In a very real sense, our home, or natural environment, is made up of mountains and valleys, the seas and the sky, the sun and the soil, the trees and the flowers.Growing up in the contemporary, civilized environment, it's simple to start believing"}
                            </P>
                            <ProfileLike />
                        </Col>
                    </Row>
                </div>
            </Card>
        </Col>
    )
}
