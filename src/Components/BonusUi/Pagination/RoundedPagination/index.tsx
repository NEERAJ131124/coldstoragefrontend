import React from 'react'
import { Card, CardBody, Col, Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { Href, RoundedPaginationTitle } from '../../../../Utils/Constants'
import { roundedlistData, roundedPageSubTitle } from '../../../../Data/BonusUi/Pagination'

export default function RoundedPagination() {
    return (
        <Col md={6}>
            <Card>
                <CommonCardHeader title={RoundedPaginationTitle} subTitle={roundedPageSubTitle} />
                <CardBody>
                    <Pagination listClassName="pagination-secondary gap-2" aria-label="Page navigation example">
                        {roundedlistData && roundedlistData.map((item, index) => (
                            <PaginationItem key={index} active={item.id === 'Pagination4' ? true : false}>
                                <PaginationLink className='rounded-circle' href={Href}>{item.text}</PaginationLink>
                            </PaginationItem>
                        ))}
                    </Pagination>
                </CardBody>
            </Card>
        </Col>
    )
}