import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { RatioTitle } from '../../../../Utils/Constants'
import { avatarRatioData, ratioSubTitle } from '../../../../Data/UiKits/Avatars'
import { Image } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Utils'

export default function Ratio() {
    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader title={RatioTitle} subTitle={ratioSubTitle} />
                <CardBody className='avatar-showcase'>
                    <div className="avatars">
                        {avatarRatioData && avatarRatioData.map((item, index) => (
                            <div className="avatar ratio" key={index}>
                                <Image className={`b-r-8 img-${item.class}`} src={dynamicImage(item.image)} alt="avatar" />
                            </div>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
