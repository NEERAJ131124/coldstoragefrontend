import React from 'react'
import { HeadingProps } from '../../Types/CommonElements.type'

export default function H1(props: HeadingProps) {
    return (
        <h1 {...props} style={props.style}>{props.children}</h1>
    )
}
