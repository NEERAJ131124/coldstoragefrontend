import React from 'react'
import { CardBody } from 'reactstrap';
import CommonCard from '../CommonCard';
import { MyProfileTitle } from '../../../../../../Utils/Constants';
import { Badges, Btn, H5, H6, Image, LI, UL } from '../../../../../../AbstractElements';
import { dynamicImage, dynamicNumber } from '../../../../../../Utils';
import { myProfileImageList } from '../../../../../../Data/Applications/SocialApp';

export default function MyProfileCard() {
    return (
        <CommonCard title={MyProfileTitle}>
            <CardBody className="socialprofile filter-cards-view">
                <div className="d-flex gap-3"><Image className="img-50 img-fluid m-r-20 rounded-circle" src={dynamicImage(`user/1.jpg`)} alt="" />
                    <div className="flex-grow-1">
                        <H6 className="font-primary f-w-600">{'My Page'}</H6>
                        {dynamicNumber(2).map((item) => (
                            <span className="d-block" key={item}>
                                <span>
                                    {item === 1 ? <i className='fa-solid fa-comments' /> : <i className="fa-regular fa-bell" />}
                                    <span className="px-2">{item === 1 ? 'Messages' : 'notification'}
                                        <Badges color='primary' className="ms-2" pill>{'9'}</Badges>
                                    </span>
                                </span>
                            </span>
                        ))}
                    </div>
                </div>
                <div className="social-btngroup d-flex gap-3">
                    <Btn color='primary' className="text-center">{'Likes'}</Btn>
                    <Btn color='light' className="text-dark text-center ms-2">{'View'}</Btn>
                </div>
                <div className="likes-profile text-center">
                    <H5> <span> <i className="fa-solid fa-heart font-danger" /> {'884'}</span></H5>
                </div>
                <div className="text-center text-dark">{'35 New Likes This Week'}</div>
                <div className="customers text-center social-group">
                    <UL className='simple-list flex-row'>
                        {myProfileImageList.map((list, i) => (
                            <LI className="d-inline-block" key={i}>
                                <Image className="img-40 rounded-circle" src={dynamicImage(`user/${list}`)} alt="" />
                            </LI>
                        ))}
                    </UL>
                </div>
                <Image className="img-fluid mt-5" alt="" src={dynamicImage(`social-app/timeline-3.png`)} />
            </CardBody>
        </CommonCard>
    )
}