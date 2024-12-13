import React, { useState } from 'react'
import { Card, CardBody, Carousel, CarouselItem, Col } from 'reactstrap';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { defaultSliderData, slidesOnlySubTitle } from '../../../../Data/BonusUi/Slider';
import { DefaultSliderTitle } from '../../../../Utils/Constants';
import { Image } from '../../../../AbstractElements';
import { dynamicImage } from '../../../../Utils';
import { DefaultSliderItem } from '../../../../Types/BonusUi.type';

export default function DefaultSlider() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === defaultSliderData.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };
    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? defaultSliderData.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };
    const slides = defaultSliderData.map((item: DefaultSliderItem) => {
        return (
            <CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={item.id}>
                <Image src={dynamicImage(`slider/${item.image}`)} alt='drawing-room' className='d-block w-100' />
            </CarouselItem>
        );
    });
    return (
        <Col xl={6} xs={12}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={DefaultSliderTitle} subTitle={slidesOnlySubTitle} />
                <CardBody>
                    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
                        {slides}
                    </Carousel>
                </CardBody>
            </Card>
        </Col>
    )
}