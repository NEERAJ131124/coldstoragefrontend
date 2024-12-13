import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { PaginationSizeTitle } from '../../../../Utils/Constants'
import { pageSizeSubTitle } from '../../../../Data/BonusUi/Pagination'
import LargePage from './LargePage'
import MediumPage from './MediumPage'
import SmallPage from './SmallPage'

export default function PaginationSize() {
    return (
        <Col md={6}>
            <Card>
                <CommonCardHeader title={PaginationSizeTitle} subTitle={pageSizeSubTitle} />
                <CardBody>
                    <LargePage />
                    <MediumPage />
                    <SmallPage />
                </CardBody>
            </Card>
        </Col>
    )
}