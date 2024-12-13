import React from 'react'
import { Card, CardBody, CardHeader, Col } from 'reactstrap'
import { H2, H3, P } from '../../../../AbstractElements'
import { DisplayHeadingTitle } from '../../../../Utils/Constants'
import { dynamicNumber } from '../../../../Utils'

export default function DisplayHeading() {
    return (
        <Col xl={12}>
            <Card>
                <CardHeader className='pb-0 card-no-border'>
                    <H3>{DisplayHeadingTitle}</H3>
                    <P className="desc mb-0 mt-1">
                        <span>{'Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a'}</span><code>{' display heading '}</code><span>{'- a larger, slightly more opinionated heading style.'}</span>
                    </P>
                </CardHeader>
                <CardBody className='d-flex flex-column gap-2 align-items-start'>
                    {dynamicNumber(4).map((item, index) => (
                        <H2 className={`display-${item}`} key={index}>{`Display ${item}`}</H2>
                    ))}
                </CardBody>
            </Card>
        </Col>
    )
}
