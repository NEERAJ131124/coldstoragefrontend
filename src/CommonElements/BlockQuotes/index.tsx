import React from 'react'

export default function BlockQuotes(props: any) {
    return (
        <blockquote {...props}>{props.children}</blockquote>
    )
}
