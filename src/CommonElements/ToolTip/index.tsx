import React from 'react'
import { Tooltip } from 'reactstrap'

export default function ToolTip(props: any) {
    return (
        <Tooltip {...props} >{props.children}</Tooltip>
    )
}
