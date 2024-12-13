import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { DefaultPaginationTitle } from '../../../../Utils/Constants'
import { defaultPageSubTitle } from '../../../../Data/BonusUi/Pagination'
import DefaultPaginationList from '../Common/DefaultPaginationList'

export default function DefaultPagination() {
    return (
        <Col md={6}>
            <Card>
                <CommonCardHeader title={DefaultPaginationTitle} subTitle={defaultPageSubTitle} />
                <CardBody>
                    <DefaultPaginationList pageColor='primary' />
                </CardBody>
            </Card>
        </Col>
    )
}
