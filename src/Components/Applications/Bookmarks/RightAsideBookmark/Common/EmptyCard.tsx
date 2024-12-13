import React from 'react'
import { Card, CardBody } from 'reactstrap'
import { HeaderCardProp } from '../../../../../Types/Bookmark.type'
import HeaderCard from './HeaderCard'

export default function EmptyCard({ title }: HeaderCardProp) {
    return (
        <Card className="mb-0">
            <HeaderCard title={title} />
            <CardBody>
                <div className="details-bookmark text-center">
                    <span>{'No Bookmarks Found.'}</span>
                </div>
            </CardBody>
        </Card>
    )
}