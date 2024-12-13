import React from 'react'
import { OrderedListProps } from '../../Types/CommonElements.type'

export default function OL(props: OrderedListProps) {
    return (
        <ol {...props}>{props.children}</ol>
    )
}
