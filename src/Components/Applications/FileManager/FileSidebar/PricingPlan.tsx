import React from 'react'
import { Grid } from 'react-feather'
import { Btn, H5, H6, Image, LI, P, UL } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Utils'

export default function PricingPlan() {
    return (
        <UL className='simple-list'>
            <LI>
                <Btn color='primary' outline className='w-auto'><Grid /> {'Pricing plan'}</Btn>
            </LI>
            <LI>
                <div className="pricing-plan">
                    <H6>{'Trial Version'}</H6>
                    <H5>{'FREE'}</H5>
                    <P>{'100 GB Space'}</P>
                    <Btn size='xs' color='primary' outline className='w-auto'>{'Selected'}</Btn>
                    <Image className="bg-img" src={dynamicImage(`file-manager/folder.png`)} alt="" />
                </div>
            </LI>
        </UL>
    )
}