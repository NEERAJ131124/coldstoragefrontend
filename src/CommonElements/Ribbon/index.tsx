import React from 'react'
import { RibbonProps } from '../../Types/CommonElements.type'

export default function Ribbon(props: RibbonProps) {
    return (
        <div {...props}>{props.children}</div>
    )
}
