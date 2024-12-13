import React from 'react'
import { Label } from 'reactstrap';
import { H5, H6, Image, LI, P, UL } from '../../../../AbstractElements';
import { dynamicImage } from '../../../../Utils';

export default function HoverFresherInterview() {
    return (
        <LI className='timeline-event'>
            <Label className='timeline-event-icon' />
            <div className='timeline-event-wrapper'>
                <P className='timeline-thumbnail'>{"March 2024 - Fresher Interview"}</P>
                <H5 className="f-w-500">{'Ofwrrior Company'}</H5>
                <div className='text-muted'>
                    {"A fresher's interview is to be conducted"}
                    <UL className='simple-list main-lists-content'>
                        <LI className='list-group-item-action border-0 p-0 mb-4'>
                            <div className='d-flex w-100 justify-content-between align-items-center'>
                                <div className='list-wrapper'>
                                    <Image className='list-img' src={dynamicImage(`user/1.jpg`)} alt='profile' />
                                    <div className='list-content'>
                                        <H6>{'Molly Boake'}</H6>
                                        <P>{"MollyBoake@rhyta.com"}</P>
                                    </div>
                                </div>
                                <div className='timeline-icon'>
                                    <i className='icon-facebook font-primary' />
                                    <i className='icon-google font-primary' />
                                    <i className='icon-twitter-alt font-primary' />
                                </div>
                            </div>
                            <P className='mb-1'>{"Next step is to choose a tone of voice for your content type."}</P>
                        </LI>
                    </UL>
                </div>
            </div>
        </LI>
    );
}