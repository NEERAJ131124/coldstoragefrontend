import React, { useState } from 'react'
import { Carousel, CarouselControl, CarouselIndicators, CarouselItem } from 'reactstrap';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import { carouselTimelineData } from '../../../../Data/BonusUi/Timeline';
import { Badges, H5, Image, P } from '../../../../AbstractElements';
import { dynamicImage } from '../../../../Utils';

export default function CarouselTimeline() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === carouselTimelineData.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };
    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? carouselTimelineData.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };
    const goToIndex = (newIndex: number) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };
    const slides = carouselTimelineData.map((item) => {
        return (
            <CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={item.id}>
                <Image src={dynamicImage(`banner/${item.image}`)} alt='office-work' className='d-block w-100' />
            </CarouselItem>
        );
    });
    return (
        <VerticalTimelineElement className='cd-timeline-block' dateClassName='cd-date' date='April 23 2024' icon={<div className="cd-timeline-img cd-picture bg-success"><i className="icon-image" /></div>}>
            <div className="cd-timeline-content">
                <div className='timeline-wrapper'>
                    <Badges color='info'>{'Designer'}</Badges>
                </div>
                <H5 className='f-w-600 m-0'>{'Research about most recent design trends.'}</H5>
                <P className='mb-0'>{'Spend some time looking up current design trend.'}</P>
                <Carousel activeIndex={activeIndex} next={next} previous={previous}>
                    <CarouselIndicators items={carouselTimelineData} activeIndex={activeIndex} onClickHandler={goToIndex} />
                    {slides}
                    <CarouselControl direction='prev' directionText='Previous' onClickHandler={previous} />
                    <CarouselControl direction='next' directionText='Next' onClickHandler={next} />
                </Carousel>
            </div>
        </VerticalTimelineElement>
    );
}