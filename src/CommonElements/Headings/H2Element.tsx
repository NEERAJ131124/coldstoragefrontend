import React from 'react'
import { HeadingProps } from '../../Types/CommonElements.type'

export default function H2(props: HeadingProps) {
    return (
        <h2 {...props} style={props.style}>{props.children}</h2>
    )
}
