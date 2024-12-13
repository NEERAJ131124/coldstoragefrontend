import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { HorizontalListTitle } from '../../../../Utils/Constants'
import { horizontalColor, horizontalListData, horizontalListSubTitle } from '../../../../Data/UiKits/Lists'
import { LI, UL } from '../../../../AbstractElements'

export default function HorizontalList() {
    return (
        <Col xxl={6} xs={12} className='box-col-12'>
            <Card>
                <CommonCardHeader title={HorizontalListTitle} subTitle={horizontalListSubTitle} />
                <CardBody>
                    <div className='horizontal-list-wrapper'>
                        {horizontalListData && horizontalListData.map((item, index) => (
                            <UL className={`fw-bold list-group list-group-horizontal-${item.class}`} key={index}>
                                {item.data && item.data.map((data, i) => (
                                    <LI className={`${i === 0 && horizontalColor[index]}`} key={i}>{data}</LI>
                                ))}
                            </UL>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
