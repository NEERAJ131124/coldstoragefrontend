import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { StatusIndicatorTitle } from '../../../../Utils/Constants'
import { avatarStatusData, statusSubTitle } from '../../../../Data/UiKits/Avatars'
import { Image } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Utils'

export default function StatusIndicator() {
    return (
        <Col xl={4} md={6}>
            <Card>
                <CommonCardHeader title={StatusIndicatorTitle} subTitle={statusSubTitle} />
                <CardBody className='avatar-showcase'>
                    <div className='avatars'>
                        {avatarStatusData && avatarStatusData.map((item, index) => (
                            <div className="avatar" key={index}>
                                <Image className={`rounded-circle img-${item.class}`} src={dynamicImage(item.image)} alt="avatar" />
                                <div className={`status status-${item.status}`} />
                            </div>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
