import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { BorderPrimaryTitle } from '../../../../Utils/Constants'
import { borderPrimaryData, borderPrimarySubTitle } from '../../../../Data/BonusUi/CreativeCard'
import { Image, LI, UL } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Utils'

export default function BorderPrimary() {
    return (
        <Col md={6} xxl={4}>
            <Card className='height-equal state-card'>
                <CommonCardHeader title={BorderPrimaryTitle} subTitle={borderPrimarySubTitle} headClass='border-l-primary border-3' />
                <CardBody>
                    <UL>
                        {borderPrimaryData.map((item) => (
                            <LI className={`list-group-item-action ${item.id === 1 ? 'active' : ''}`} key={item.id}>
                                <Image className="rounded-circle" src={dynamicImage(`user/${item.image}`)} alt="user" />{item.name}
                            </LI>
                        ))}
                    </UL>
                </CardBody>
            </Card>
        </Col>
    )
}