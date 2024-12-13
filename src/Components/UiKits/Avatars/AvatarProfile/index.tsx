import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { AvatarProfileTitle } from '../../../../Utils/Constants'
import { avatarProfileSubTitle } from '../../../../Data/UiKits/Avatars'
import { Image } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Utils'

export default function AvatarProfile() {
    return (
        <Col xl={4} sm={6}>
            <Card className='avatar-profile-card'>
                <CommonCardHeader title={AvatarProfileTitle} subTitle={avatarProfileSubTitle} />
                <CardBody className="avatar-showcase">
                    <div className="avatars">
                        <div className="user-img">
                            <Image src={dynamicImage(`profile.png`)} alt="user" />
                            <div className="setting-icon"><i className="iconly-Setting icli" /></div>
                        </div>
                        <div className="avatar-intial img-60 bg-light-primary avatar-profile">
                            <Image src={dynamicImage(`users/6.png`)} alt="users" />
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
