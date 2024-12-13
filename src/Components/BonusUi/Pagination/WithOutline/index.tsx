import React from 'react'
import { Card, CardBody, Col, Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { Href, WithOutlineTitle } from '../../../../Utils/Constants'
import { withOutlineSubTitle } from '../../../../Data/BonusUi/Pagination'
import { dynamicNumber } from '../../../../Utils'

export default function WithOutline() {
    return (
        <Col md={6}>
            <Card>
                <CommonCardHeader title={WithOutlineTitle} subTitle={withOutlineSubTitle} />
                <CardBody>
                    <Pagination listClassName='outline-pagination text-primary' aria-label='Page navigation example'>
                        {dynamicNumber(4).map((item, index) => (
                            <PaginationItem key={index} active={index === 1 ? true : false}>
                                <PaginationLink href={Href}>
                                    {item}
                                </PaginationLink>
                            </PaginationItem>
                        ))}
                    </Pagination>
                </CardBody>
            </Card>
        </Col>
    )
}