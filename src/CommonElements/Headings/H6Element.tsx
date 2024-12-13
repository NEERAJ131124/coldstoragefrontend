import React from 'react'
import { HeadingProps } from '../../Types/CommonElements.type'

export default function H6(props: HeadingProps) {
    return (
        <h6 {...props} style={props.style}>{props.children}</h6>
    )
}
