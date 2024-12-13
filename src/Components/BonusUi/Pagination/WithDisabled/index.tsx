import React from 'react'
import { Card, CardBody, Col, Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { Href, WithDisabledTitle } from '../../../../Utils/Constants'
import { withDisabledData, withDisabledSubTitle } from '../../../../Data/BonusUi/Pagination'

export default function WithDisabled() {
    return (
        <Col md={6}>
            <Card>
                <CommonCardHeader title={WithDisabledTitle} subTitle={withDisabledSubTitle} />
                <CardBody>
                    <Pagination aria-label='Page navigation example' className='pagination-secondary'>
                        {withDisabledData && withDisabledData.map((item, index) => (
                            <PaginationItem key={index} disabled={index === 2 ? true : false}>
                                <PaginationLink href={Href}>{item}</PaginationLink>
                            </PaginationItem>
                        ))}
                    </Pagination>
                </CardBody>
            </Card>
        </Col>
    )
}
