import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { Sizes } from '../../../../Utils/Constants'
import { avatarSizeData, sizesSubTitle } from '../../../../Data/UiKits/Avatars'
import { Image } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Utils'

export default function AvatarSizes() {
    return (
        <Col xl={4} md={6}>
            <Card>
                <CommonCardHeader title={Sizes} subTitle={sizesSubTitle} />
                <CardBody className='avatar-showcase'>
                    <div className="avatars">
                        {avatarSizeData && avatarSizeData.map((item, index) => (
                            <div key={index} className="avatar">
                                <Image className={`rounded-circle img-${item.class}`} src={dynamicImage(`avtar/${item.image}`)} alt="avatar"/>
                            </div>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
