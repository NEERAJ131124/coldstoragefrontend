import React from 'react'
import { HeadingProps } from '../../Types/CommonElements.type'

export default function H4(props: HeadingProps) {
    return (
        <h4 {...props} style={props.style}>{props.children}</h4>
    )
}
