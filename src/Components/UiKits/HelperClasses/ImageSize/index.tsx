import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { ImageSizeTitle } from '../../../../Utils/Constants'
import { imageData, imageSubTitle } from '../../../../Data/UiKits/HelperClasses'
import { Image } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Utils'

export default function ImageSize() {
    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader title={ImageSizeTitle} subTitle={imageSubTitle} />
                <CardBody>
                    <div className='gradient-border gap-md-3 gap-2'>
                        {imageData && imageData.map((item, index) => (
                            <Image className={`img-${item} img-h-${item}`} src={dynamicImage(`avatars/1.jpg`)} alt="img-size-50" key={index} />
                        ))}
                    </div>  
                </CardBody>
            </Card>
        </Col>
    )
}
