import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { FollowDataType } from '../../../../../../Types/SocialApp.type'
import { Btn, Image, LI, UL } from '../../../../../../AbstractElements'
import { dynamicImage } from '../../../../../../Utils'
import { knownPeopleData } from '../../../../../../Data/Applications/SocialApp'
import CommonCardHeader from '../../../../../../Utils/CommonComponents/CommonCardHeader'

export default function KnownPeople({ heading }: FollowDataType) {
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader title={heading} />
                <CardBody className="avatar-showcase">
                    <div className="pepole-knows">
                        <UL className='simple-list flex-row'>
                            {knownPeopleData.map((data) => (
                                <LI key={data.id}>
                                    <div className="add-friend text-center">
                                        <Image className="img-60 img-fluid rounded-circle" alt="" src={dynamicImage(`user/${data.src}`)} />
                                        <span className="f-w-600 d-block">{data.name}</span>
                                        <Btn color='primary' size='xs'>{'Add Friend'}</Btn>
                                    </div>
                                </LI>
                            ))}
                        </UL>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}