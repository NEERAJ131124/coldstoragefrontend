import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { ListingTypography } from '../../../../Utils/Constants'
import { listingSubTitle } from '../../../../Data/UiKits/Typography'
import UnorderList from './UnorderList'
import OrderList from './OrderList'
import DescriptionList from './DescriptionList'

export default function Listing() {
    return (
        <Col xl={12} className='listing'>
            <Card>
                <CommonCardHeader title={ListingTypography} subTitle={listingSubTitle} />
                <CardBody>
                    <Row className='g-3'>
                        <UnorderList />
                        <OrderList />
                        <DescriptionList />
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
