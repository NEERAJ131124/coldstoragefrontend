import React, { Fragment } from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { Href, LinkLightColorTitle } from '../../../../Utils/Constants'
import { alertLightColorData, linkColorSubTitle } from '../../../../Data/UiKits/Alert'
import { Alerts, P } from '../../../../AbstractElements'

export default function LinkLightColor() {
    return (
        <Col xl={12} className='alert-theme'>
            <Card>
                <CommonCardHeader title={LinkLightColorTitle} subTitle={linkColorSubTitle} />
                <CardBody>
                    <Row>
                        {alertLightColorData && alertLightColorData.map((item, index) => (
                            <Col xl={6} key={index}>
                                {item.data && item.data.map((item, index) => (
                                    <Fragment key={index}>
                                        <P className="mb-1">{item.text}</P>
                                        <Alerts color={`light-${item.class}`} className={`dark ${item.class === 'info' || item.class === 'dark' ? 'mb-0' : ''}`}>
                                            <P className={`text-${item.textClass}`}>{'This is a'} <a className={`alert-link text-${item.textClass}`} href={Href}>
                                                {item.class} {'alert'}</a> {'with an example link.Check it out.'}
                                            </P>
                                        </Alerts>
                                    </Fragment>
                                ))}
                            </Col>
                        ))}
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
