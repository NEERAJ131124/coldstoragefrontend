import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import { alignPageData } from '../../../../Data/BonusUi/Pagination'
import { Href } from '../../../../Utils/Constants'

export default function MediumPage() {
    return (
        <Pagination className='mb-3' listClassName="pagination-secondary" size='md' aria-label="Page navigation example">
            {alignPageData && alignPageData.map((item, index) => (
                <PaginationItem key={index} active={item === '1' ? true : false}>
                    <PaginationLink href={Href}>{item}</PaginationLink>
                </PaginationItem>
            ))}
        </Pagination>
    )
}