import React from 'react'
import { ParagraphProps } from '../../Types/CommonElements.type'

export default function P(props: ParagraphProps) {
    return (
        <p {...props} style={props.style}>{props.children}</p>
    )
}
