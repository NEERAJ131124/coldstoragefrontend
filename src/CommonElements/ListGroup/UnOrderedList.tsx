import React from 'react'
import { ListGroup } from 'reactstrap'
import { UnorderedListProps } from '../../Types/CommonElements.type'

export default function UL(props: UnorderedListProps) {
    return (
        <ListGroup {...props}>{props.children}</ListGroup>
    )
}
