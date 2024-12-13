import React from 'react'
import { Row } from 'reactstrap'
import { SearchResultInitialState } from '../../../../../Types/SearchResult.type'
import PixelstarpSearch from './PixelstarpSearch'
import BlogBox from './BlogBox'
import PaginationCard from '../Common/PaginationCard'

export default function AllTab({ allResult }: SearchResultInitialState) {
    return (
        <Row>
            <PixelstarpSearch allResult={allResult} />
            <BlogBox allResult={allResult} />
            <PaginationCard />
        </Row>
    )
}