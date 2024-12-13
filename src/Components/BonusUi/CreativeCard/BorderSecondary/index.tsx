import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { BorderSecondaryTitle } from '../../../../Utils/Constants'
import { borderPrimarySubTitle, borderSecondaryData } from '../../../../Data/BonusUi/CreativeCard'
import { Badges, LI, OL } from '../../../../AbstractElements'

export default function BorderSecondary() {
    return (
        <Col xs={12} xxl={4}>
            <Card className='height-equal state-card'>
                <CommonCardHeader title={BorderSecondaryTitle} subTitle={borderPrimarySubTitle} headClass='border-l-secondary border-2' />
                <CardBody className='scroll-demo'>
                    <OL className="list-group list-group-numbered scroll-rtl">
                        {borderSecondaryData && borderSecondaryData.map((item, index) => (
                            <LI className="d-flex align-items-start flex-wrap" key={index}>
                                <div className="ms-2 me-auto">{item.text}</div>
                                <Badges color={item.class} className={`p-2 ${index !== 0 ? 'text-white' : ''}`} pill>
                                    {item.text2}
                                </Badges>
                            </LI>
                        ))}
                    </OL>
                </CardBody>
            </Card>
        </Col>
    )
}