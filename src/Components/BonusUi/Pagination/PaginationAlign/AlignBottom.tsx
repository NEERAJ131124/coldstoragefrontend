import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import { alignbottomData } from '../../../../Data/BonusUi/Pagination'
import { Href } from '../../../../Utils/Constants'

export default function AlignBottom() {
    return (
        <Pagination listClassName="pagination-success justify-content-end" aria-label="Page navigation example">
            {alignbottomData && alignbottomData.map((item, index) => (
                <PaginationItem key={index} active={index === 4 ? true : false}>
                    <PaginationLink href={Href}>{item}</PaginationLink>
                </PaginationItem>
            ))}
        </Pagination>
    )
}
