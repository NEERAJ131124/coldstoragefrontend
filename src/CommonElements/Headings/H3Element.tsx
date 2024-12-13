import React from 'react'
import { HeadingProps } from '../../Types/CommonElements.type'

export default function H3(props: HeadingProps) {
    return (
        <h3 {...props} style={props.style}>{props.children}</h3>
    )
}
