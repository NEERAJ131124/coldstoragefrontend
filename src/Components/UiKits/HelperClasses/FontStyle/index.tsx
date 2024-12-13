import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { FontStyleTitle } from '../../../../Utils/Constants'
import { fontStyleData, fontStyleSubTitle } from '../../../../Data/UiKits/HelperClasses'
import { P } from '../../../../AbstractElements'

export default function FontStyle() {
    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader title={FontStyleTitle} subTitle={fontStyleSubTitle} />
                <CardBody className='helper-font'>
                    {fontStyleData && fontStyleData.map((item) => (
                        <P className={`${item.class} ${item.id !== 4 ? 'mb-2' : ''}`} key={item.id}>
                            {'This is a '} <b>{`.f-s-${item.text}`}</b> {' font-style'}
                        </P>
                    ))}
                </CardBody>
            </Card>
        </Col>
    )
}
