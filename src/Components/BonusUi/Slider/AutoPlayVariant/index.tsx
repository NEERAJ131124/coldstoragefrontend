import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { AutoPlayVariantTitle } from '../../../../Utils/Constants'
import { autoPlayVariantSubTitle } from '../../../../Data/BonusUi/Slider'
import { dynamicImage, dynamicNumber } from '../../../../Utils'
import { Image } from '../../../../AbstractElements'

export default function AutoPlayVariant() {
    return (
        <Col xl={6} xs={12}>
            <Card className='auto-slider'>
                <CommonCardHeader headClass='pb-0' title={AutoPlayVariantTitle} subTitle={autoPlayVariantSubTitle} />
                <CardBody>
                    <Swiper pagination={{ clickable: true }} modules={[Pagination, Autoplay]} loop={true} autoplay={{ delay: 1500, disableOnInteraction: false }} slidesPerView={3} spaceBetween={10} className="mySwiper">
                        <div className="swiper-wrapper">
                            {dynamicNumber(11).map((item, index) => (
                                <SwiperSlide key={index}>
                                    <Image src={dynamicImage(`slider/${item}.jpg`)} alt='Drawing-room' />
                                </SwiperSlide>
                            ))}
                        </div>
                    </Swiper>
                </CardBody>
            </Card>
        </Col>
    )
}