import React, { useRef } from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { Swiper } from 'swiper/react';
import { ItemsSliderProp } from '../../../../../Types/Dashboard.type';
import SliderContent from './SliderContent';
import { Navigation } from 'swiper/modules';

export default function ItemsSlider({ data }: ItemsSliderProp) {
    const swiperRef = useRef<any>();
    return (
        <>
            {data.map((item) => (
                <Col sm={6} key={item.id} className={`box-col-6 ${item.colClass}`}>
                    <Card>
                        <CardBody>
                            <div className="items-slider">
                                <Swiper className="mySwiper1" spaceBetween={50} navigation slidesPerView={1} modules={[Navigation]} autoplay={{ delay: 1500, disableOnInteraction: false }}
                                    loop={true}
                                    onSwiper={(swiper: any) => { swiperRef.current = swiper; }}
                                    breakpoints={{
                                        500: { slidesPerView: 1, spaceBetween: 20, },
                                        769: { slidesPerView: 2, spaceBetween: 40, },
                                        1530: { slidesPerView: 2, spaceBetween: 25, }
                                    }}>
                                    <div className="swiper-wrapper">
                                        {item.slider.map((list) => (
                                            <SliderContent key={list.id} list={list} />
                                        ))}
                                    </div>
                                </Swiper>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </>
    )
}