import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { AvatarPingTitle } from '../../../../Utils/Constants'
import { avatarPingData, avatarPingSubTitle } from '../../../../Data/UiKits/Avatars'
import { Image } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Utils'

export default function AvatarPing() {
    return (
        <Col xl={4} sm={6}>
            <Card>
                <CommonCardHeader title={AvatarPingTitle} subTitle={avatarPingSubTitle} />
                <CardBody className="avatar-showcase">
                    <div className="avatars">
                        {avatarPingData && avatarPingData.map((item) => (
                            <div className="avatar" key={item.id}>
                                <Image className={`img-${item.class} rounded-circle`} src={dynamicImage(item.src)} alt="avatar" />
                                <div className={`ping status-${item.status} status`} />
                            </div>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
