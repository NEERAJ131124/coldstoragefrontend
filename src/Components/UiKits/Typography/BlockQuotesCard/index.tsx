import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { BlockquotesTitle } from '../../../../Utils/Constants'
import { blockQuotesData, blockQuotesSubTitle } from '../../../../Data/UiKits/Typography'
import { BlockQuotes, P } from '../../../../AbstractElements'

export default function BlockQuotesCard() {
    return (
        <Col xl={12}>
            <Card className='overflow-hidden'>
                <CommonCardHeader title={BlockquotesTitle} subTitle={blockQuotesSubTitle} />
                <CardBody>
                    {blockQuotesData && blockQuotesData.map((item, index) => (
                        <div key={index} className={`figure d-block dark-blockquote text-${item.class}`}>
                            <BlockQuotes className={`blockquote ${item.blockClass}`}>
                                <P className="mb-0 f-16">{item.text}</P>
                                <span className="blockquote-footer">{item.footer}</span>
                            </BlockQuotes>
                        </div>
                    ))}
                </CardBody>
            </Card>
        </Col>
    )
}
