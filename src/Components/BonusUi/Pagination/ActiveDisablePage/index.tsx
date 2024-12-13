import React from 'react'
import { Card, CardBody, Col, Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { ActiveDisablePageTitle, Href } from '../../../../Utils/Constants'
import { activeDisableSubTitle, defaultPagiData } from '../../../../Data/BonusUi/Pagination'

export default function ActiveDisablePage() {
    return (
        <Col md={6}>
            <Card>
                <CommonCardHeader title={ActiveDisablePageTitle} subTitle={activeDisableSubTitle} />
                <CardBody>
                    <Pagination listClassName='pagination-secondary' aria-label='Page navigation example'>
                        {defaultPagiData && defaultPagiData.map((item, index) => (
                            <PaginationItem key={index} active={item.id === 'Pagination4' ? true : false} disabled={item.id === 'Pagination1' ? true : false}>
                                <PaginationLink href={Href}>
                                    {item.text}
                                </PaginationLink>
                            </PaginationItem>
                        ))}
                    </Pagination>
                </CardBody>
            </Card>
        </Col>
    )
}