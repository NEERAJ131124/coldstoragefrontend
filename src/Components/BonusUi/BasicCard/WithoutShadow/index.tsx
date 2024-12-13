import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { WithoutShadowTitle } from '../../../../Utils/Constants'
import { withoutShadowSubTitle } from '../../../../Data/BonusUi/BasicCard'
import { Image, P } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Utils'

export default function WithoutShadow() {
    return (
        <Col sm={12} xl={6}>
            <Card className='shadow-none border'>
                <CommonCardHeader title={WithoutShadowTitle} subTitle={withoutShadowSubTitle} />
                <CardBody>
                    <div className="flex-space flex-wrap align-items-center">
                        <Image className="tab-img" src={dynamicImage(`avtar/3.jpg`)} alt="profile" />
                        <P>
                            <strong>{'Visit Us: '}</strong>{'2600 Hollywood Blvd,Florida, United States-33020'}<br />
                            <strong>{'Mail Us:'}</strong>{'contact@us@gmail.com'}<br />
                            <strong>{'Contact Number: '}</strong>{'(954) 357-7760'}
                        </P>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
