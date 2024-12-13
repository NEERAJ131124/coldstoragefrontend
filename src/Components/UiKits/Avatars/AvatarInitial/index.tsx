import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { AvatarInitialTitle } from '../../../../Utils/Constants'
import { avatarInitialData, avatarInitialSubTitle } from '../../../../Data/UiKits/Avatars'

export default function AvatarInitial() {
    return (
        <Col xl={4} sm={12}>
            <Card>
                <CommonCardHeader title={AvatarInitialTitle} subTitle={avatarInitialSubTitle} />
                <CardBody className="avatar-showcase">
                    <div className="avatars">
                        {avatarInitialData && avatarInitialData.map((item) => (
                            <div className={`avatar-intial img-${item.class} bg-light-${item.color}`} key={item.id}>
                                <span className={`fs-${item.id}`}>{item.text}</span>
                            </div>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
