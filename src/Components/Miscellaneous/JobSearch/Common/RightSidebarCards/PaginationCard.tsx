import React from 'react'
import { Col, Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import { Href, Next, Previous } from '../../../../../Utils/Constants'

export default function PaginationCard() {
    return (
        <Col sm={12}>
            <div className="job-pagination">
                <Pagination className='pagination-primary'>
                    <PaginationItem disabled><PaginationLink href={Href} previous>{Previous}</PaginationLink></PaginationItem>
                    <PaginationItem active><PaginationLink href={Href}>{'1'}</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink href={Href}>{'2'}</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink href={Href}>{'3'}</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink href={Href} next>{Next}</PaginationLink></PaginationItem>
                </Pagination>
            </div>
        </Col>
    )
}