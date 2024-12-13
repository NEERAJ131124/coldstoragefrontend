import React from 'react'
import { H6, Image, LI, P, UL } from '../../../../AbstractElements'
import { dynamicImage, dynamicNumber } from '../../../../Utils'

export default function WarningVariation() {
    return (
        <LI className="d-flex">
            <div className="activity-dot-warning" />
            <div className="w-100 ms-3">
                <P className="d-flex justify-content-between mb-2">
                    <span className="date-content bg-light-primary">{"5th Feb, 2024"}</span>
                    <span>{"Today"}</span>
                </P>
                <H6 className="f-w-600">{'Added New Items'}<span className="dot-notification" /></H6>
                <span className="f-light">{"Quisque a consequat ante sit amet magna..."}</span>
                <div className="recent-images">
                    <UL className='simple-list flex-row'>
                        {dynamicNumber(3).map((item, index) => (
                            <LI key={index}>
                                <div className="recent-img-wrap">
                                    <Image src={dynamicImage(`dashboard-2/${item}.png`)} alt="products" />
                                </div>
                            </LI>
                        ))}
                    </UL>
                </div>
            </div>
        </LI>
    )
}