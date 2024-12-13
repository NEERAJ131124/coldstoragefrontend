import React from 'react'
import { CardBody, Col } from 'reactstrap'
import CommonCard from '../CommonCard'
import { FriendsTitle } from '../../../../../../Utils/Constants'
import { dynamicImage } from '../../../../../../Utils'
import { Image, UL, LI } from '../../../../../../AbstractElements'
import { friendsCardList } from '../../../../../../Data/Applications/SocialApp'

export default function FriendsCard() {
    return (
        <Col xl={12} className='xl-50 box-col-6'>
            <CommonCard title={FriendsTitle}>
                <CardBody className="avatar-showcase filter-cards-view">
                    <UL className="common-flex justify-content-center">
                        {friendsCardList.map((list, i) => (
                            <LI key={i}>
                                <Image className="img-50 rounded-circle" src={dynamicImage(`user/${list}`)} alt="#" />
                            </LI>
                        ))}
                    </UL>
                </CardBody>
            </CommonCard>
        </Col>
    )
}