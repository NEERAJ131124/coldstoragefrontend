import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import ProfileHead from '../../../../../Utils/CommonComponents/CommonUserProfile/ProfileHead'
import { Image, P } from '../../../../../AbstractElements'
import { Href } from '../../../../../Utils/Constants'
import { dynamicImage } from '../../../../../Utils'
import ProfileLike from '../Common/ProfileLike'
import { thirdProfilePictures } from '../../../../../Data/BonusUi/Tour'

export default function UserThirdProfile() {
    return (
        <Col sm={12}>
            <Card>
                <div className="profile-img-style">
                    <ProfileHead month={'25 Jan'} time={'1 min read'} activeTime={'10 Hours ago'} /><hr />
                    <P className="block-ellipsis">
                        {"you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."}
                    </P>
                    <Row className="g-3 mt-4 pictures step7">
                        {thirdProfilePictures.map((item, index) => (
                            <Col sm={6} key={index}>
                                <a href={Href}>
                                    <div className="tour-blog">
                                        <Image className="img-fluid rounded" src={dynamicImage(`other-images/${item}.jpg`)} alt={item} />
                                    </div>
                                </a>
                            </Col>
                        ))}
                    </Row>
                    <ProfileLike />
                </div>
            </Card>
        </Col>
    )
}