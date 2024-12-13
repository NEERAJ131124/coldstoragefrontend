import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { DisableListTitle } from '../../../../Utils/Constants'
import { disableListData, disableListSubTitle } from '../../../../Data/UiKits/Lists'
import { Image, LI, UL } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Utils'

export default function DisableList() {
    return (
        <Col xxl={4} md={6}>
            <Card>
                <CommonCardHeader title={DisableListTitle} subTitle={disableListSubTitle} />
                <CardBody>
                    <UL>
                        {disableListData && disableListData.map((item, index) => (
                            <LI className={`list-group-item-action ${item.class}`} key={index}>
                                <Image className="rounded-circle" src={dynamicImage(`user/${item.image}`)} alt="user" />
                                {item.text}
                            </LI>
                        ))}
                    </UL>
                </CardBody>
            </Card>
        </Col>
    )
}
