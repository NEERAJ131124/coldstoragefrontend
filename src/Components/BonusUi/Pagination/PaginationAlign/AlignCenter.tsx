import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import { alignCenterData } from '../../../../Data/BonusUi/Pagination'
import { Href } from '../../../../Utils/Constants'

export default function AlignCenter() {
    return (
        <Pagination className='mb-3' listClassName="pagination-secondary justify-content-center" aria-label="Page navigation example">
            {alignCenterData && alignCenterData.map((item, index) => (
                <PaginationItem key={index} active={index === 1 ? true : false}>
                    <PaginationLink href={Href}>{item}</PaginationLink>
                </PaginationItem>
            ))}
        </Pagination>
    )
}
