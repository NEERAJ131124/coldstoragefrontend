import React, { FormEvent, useState } from 'react'
import { Card, CardBody, Carousel, CarouselControl, CarouselItem, Col } from 'reactstrap';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { IndividualCarouselTitle } from '../../../../Utils/Constants';
import { individualCarouselData, individualCarouselSubTitle } from '../../../../Data/BonusUi/Slider';
import { CarouselItemData, DefaultSliderItem } from '../../../../Types/BonusUi.type';
import { Image } from '../../../../AbstractElements';
import { dynamicImage } from '../../../../Utils';

export default function IndividualCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [interval, setInterval] = useState(10000);

    const onChangeTime = (index: number, item: CarouselItemData) => {
        setInterval(item['data-interval']);
    };
    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === individualCarouselData.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };
    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? individualCarouselData.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };
    const slides = individualCarouselData.map((item: DefaultSliderItem) => {
        return (
            <CarouselItem data-interval={item.interval} onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={item.id}>
                <Image src={dynamicImage(`slider/${item.image}`)} alt='drawing-room' className='d-block w-100' />
            </CarouselItem>
        );
    });
    return (
        <Col xl={6} xs={12}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={IndividualCarouselTitle} subTitle={individualCarouselSubTitle} />
                <CardBody>
                    <Carousel interval={interval} activeIndex={activeIndex} next={next} previous={previous}
                        onChange={(event: FormEvent<HTMLElement>) =>
                            onChangeTime(activeIndex, slides[activeIndex].props as CarouselItemData)
                        }>
                        {slides}
                        <CarouselControl direction='prev' directionText='Previous' onClickHandler={previous} />
                        <CarouselControl direction='next' directionText='Next' onClickHandler={next} />
                    </Carousel>
                </CardBody>
            </Card>
        </Col>
    );
}