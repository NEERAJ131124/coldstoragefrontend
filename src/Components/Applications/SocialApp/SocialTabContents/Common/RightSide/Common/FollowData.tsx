import React from 'react'
import { CardBody, Col } from 'reactstrap'
import { FollowDataType } from '../../../../../../../Types/SocialApp.type'
import CommonCard from '../../CommonCard'
import { Image } from '../../../../../../../AbstractElements'
import { dynamicImage } from '../../../../../../../Utils'
import { Href } from '../../../../../../../Utils/Constants'
import { followCardData } from '../../../../../../../Data/Applications/SocialApp'

export default function FollowData({ heading }: FollowDataType) {
    return (
        <Col xl={12} className='xl-50 box-col-6'>
            <CommonCard title={heading}>
                <CardBody className="social-list filter-cards-view">
                    {followCardData.map((data) => (
                        <div className="d-flex gap-3" key={data.id}>
                            <Image className="img-50 img-fluid m-r-20 rounded-circle" alt="" src={dynamicImage(`user/${data.image}`)} />
                            <div className="flex-grow-1">
                                <span className="d-block">{data.name}</span>
                                <a href={Href}>{'Add Friend'}</a>
                            </div>
                        </div>
                    ))}
                </CardBody>
            </CommonCard>
        </Col>
    )
}