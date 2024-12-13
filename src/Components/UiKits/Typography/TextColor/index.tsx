import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { TextColorTitle } from '../../../../Utils/Constants'
import { textColorData, textColorSubTitle } from '../../../../Data/UiKits/Typography'
import { P } from '../../../../AbstractElements'

export default function TextColor() {
    return (
        <Col xl={12} xxl={6}>
            <Card>
                <CommonCardHeader title={TextColorTitle} subTitle={textColorSubTitle} />
                <CardBody>
                    <div className='d-flex flex-column gap-2 align-items-start'>
                        {textColorData && textColorData.map((item, index) => (
                            <P key={index} className={`mb-0 text-${item.class}`}>{item.text}<code>{`.text-${item.class}`}</code> {'class.'}</P>
                        ))}
                    </div>
                </CardBody>
            </Card >
        </Col >
    )
}
