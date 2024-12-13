import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { PaginationAlignTitle } from '../../../../Utils/Constants'
import { pageAlignSubTitle } from '../../../../Data/BonusUi/Pagination'
import DefaultPaginationList from '../Common/DefaultPaginationList'
import AlignCenter from './AlignCenter'
import AlignBottom from './AlignBottom'

export default function PaginationAlign() {
    return (
        <Col md={6}>
            <Card>
                <CommonCardHeader title={PaginationAlignTitle} subTitle={pageAlignSubTitle} />
                <CardBody>
                    <DefaultPaginationList pageClass='mb-3' pageColor='primary justify-content-start' />
                    <AlignCenter />
                    <AlignBottom />
                </CardBody>
            </Card>
        </Col>
    )
}
