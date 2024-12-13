import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { BorderBottomTitle } from '../../../../Utils/Constants'
import { borderBottomSubTitle } from '../../../../Data/BonusUi/CreativeCard'
import { P } from '../../../../AbstractElements'

export default function BorderBottom() {
    return (
        <Col md={6} xs={12}>
            <Card>
                <CommonCardHeader title={BorderBottomTitle} subTitle={borderBottomSubTitle} headClass='border-b-info' />
                <CardBody>
                    <P className="mb-0">
                        {'A navigation bar is a particularly important feature because it allows visitors to quickly and easily find'}
                        <em className="text-danger">{' important pages on your website '}</em>
                        {', like your blog, product pages, pricing, contact info, and documentation. This improves the chances of visitors browsing your site longer, which can boost your page views and reduce your bounce rate.'}
                    </P>
                </CardBody>
            </Card>
        </Col>
    )
}
