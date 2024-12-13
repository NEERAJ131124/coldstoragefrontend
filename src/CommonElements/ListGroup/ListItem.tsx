import React from 'react'
import { ListGroupItem } from 'reactstrap'

export default function LI(props: any) {
    return (
        <ListGroupItem {...props}>{props.children}</ListGroupItem>
    )
}
