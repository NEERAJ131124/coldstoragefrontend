import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { MouseOverTitle } from '../../../../Utils/Constants'
import { autoPlayVariantSubTitle } from '../../../../Data/BonusUi/Slider'
import { dynamicImage, dynamicNumber } from '../../../../Utils';
import { Image } from '../../../../AbstractElements';

export default function MouseWheelVariant() {
    return (
        <Col xl={6} xs={12}>
            <Card className='auto-slider'>
                <CommonCardHeader headClass='pb-0' title={MouseOverTitle} subTitle={autoPlayVariantSubTitle} />
                <CardBody>
                    <Swiper pagination={{ clickable: true }} modules={[Pagination]} slidesPerView={3} spaceBetween={10} className="mouseSwiper">
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