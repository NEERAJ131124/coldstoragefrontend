import React, { useState } from 'react'
import { Input, InputGroup, InputGroupText } from 'reactstrap'
import { SwiperSlide } from 'swiper/react';
import { Badges, H4, H6, Image, P } from '../../../../../AbstractElements';
import { dynamicImage } from '../../../..';
import SvgIcon from '../../../CommonSvgIcons';
import { SliderContentProp } from '../../../../../Types/Dashboard.type';

export default function SliderContent({ list }: SliderContentProp) {
    const [touchspinValue, setTouchspinValue] = useState(1);
    const decrementHandle = () => {
        if (touchspinValue > 0) {
            setTouchspinValue(touchspinValue - 1);
        }
    }
    const incrementHandle = () => {
        setTouchspinValue(touchspinValue + 1)
    }
    return (
        <SwiperSlide key={list.id}>
            <div className={`slider-box bg-light-${list.color}`}>
                <div className="header-top">
                    <Badges color={list.color} className="rated-product-badge">{'Hot'}</Badges>
                    <Image className="img-fluid" src={dynamicImage(`dashboard-2/${list.image}`)} alt="" />
                    <div className="i fa-regular fa-heart" />
                </div>
            </div>
            <div className="slider-content text-center">
                <H4 className={`text-${list.color}`}>{list.title}</H4>
                <P className="mb-0">{list.text}</P>
                <H6>{'$'}{list.price}<span>&nbsp;{'$'}{list.discount}</span></H6>
                <InputGroup>
                    <InputGroupText className="decrement-touchspin" onClick={decrementHandle}>
                        <SvgIcon className='svg-color' iconId='minus' />
                    </InputGroupText>
                    <Input className={`bg-light-${list.color} input-touchspin`} type="text" value={touchspinValue} readOnly />
                    <InputGroupText className="increment-touchspin" onClick={incrementHandle}>
                        <SvgIcon className='svg-color' iconId='plus' />
                    </InputGroupText>
                </InputGroup>
            </div>
        </SwiperSlide>
    )
}