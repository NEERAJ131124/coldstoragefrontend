import React from 'react'
import { Media } from 'reactstrap'
import { ImageProps } from '../../Types/CommonElements.type'

export default function Image(props: ImageProps) {
    return (
        <Media {...props} />
    )
}
