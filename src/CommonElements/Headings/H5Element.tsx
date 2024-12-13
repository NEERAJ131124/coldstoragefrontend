import React from 'react'
import { HeadingProps } from '../../Types/CommonElements.type'

export default function H5(props: HeadingProps) {
    return (
        <h5 {...props} style={props.style}>{props.children}</h5>
    )
}
