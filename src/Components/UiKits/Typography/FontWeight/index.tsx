import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { FontWeightTitle } from '../../../../Utils/Constants'
import { fontWeightSubTitle } from '../../../../Data/UiKits/Typography'
import { H2 } from '../../../../AbstractElements'

export default function FontWeight() {
    return (
        <Col xl={12}>
            <Card>
                <CommonCardHeader title={FontWeightTitle} subTitle={fontWeightSubTitle} />
                <CardBody className='d-flex flex-column gap-3 align-items-start'>
                    <H2 className="f-w-700">{'You can set bolder font weight Heading 1 using'}<code> {'f-w-700'}</code></H2>
                    <H2 className="f-w-600">{'You can set bold font weight Heading 2 using'}<code> {'f-w-600'}</code></H2>
                    <H2 className="f-w-500">{'You can set medium font weight Heading 3 using'}<code> {'f-w-500'}</code></H2>
                    <H2 className="f-w-400">{'You can set normal font weight Heading 4 using'}<code> {'f-w-400'}</code></H2>
                    <H2 className="f-w-300">{'You can set light font weight Heading 5 using'}<code> {'f-w-300'}</code></H2>
                </CardBody>
            </Card>
        </Col>
    )
}
