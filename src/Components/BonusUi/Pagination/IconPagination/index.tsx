import React from 'react'
import { Card, CardBody, Col, Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { Href, IconPaginationTitle } from '../../../../Utils/Constants'
import { iconPageSubTitle, iconlistData } from '../../../../Data/BonusUi/Pagination'

export default function IconPagination() {
    return (
        <Col md={6}>
            <Card>
                <CommonCardHeader title={IconPaginationTitle} subTitle={iconPageSubTitle} />
                <CardBody>
                    <Pagination listClassName="pagination-success" aria-label="Page navigation example">
                        {iconlistData && iconlistData.map((item) => (
                            <PaginationItem key={item.id} active={item.id === 'Pagination1' ? true : false}>
                                <PaginationLink href={Href}>{item.text}</PaginationLink>
                            </PaginationItem>
                        ))}
                    </Pagination>
                </CardBody>
            </Card>
        </Col>
    )
}
