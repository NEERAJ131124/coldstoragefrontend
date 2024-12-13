import React from 'react'
import { H2, H3, H4, H5, H6 } from '../../../../AbstractElements'

export default function ColoredHeadBody() {
    return (
        <tbody>
            <tr>
                <td><code>{'<h1></h1>'}</code></td>
                <td>
                    <H2 className='display-h1'><span className="text-primary"> {'Heading 1'}</span>{"Sub Heading"}</H2>
                </td>
            </tr>
            <tr>
                <td><code>{'<h2></h2>'}</code></td>
                <td>
                    <H2><span className="text-secondary"> {'Heading 2'}</span>{"Sub Heading"}</H2>
                </td>
            </tr>
            <tr>
                <td><code>{'<h3></h3>'}</code></td>
                <td>
                    <H3><span className="text-success"> {'Heading 3'}</span>{"Sub Heading"}</H3>
                </td>
            </tr>
            <tr>
                <td><code>{'<h4></h4>'}</code></td>
                <td>
                    <H4><span className="text-info"> {'Heading 4'}</span>{"Sub Heading"}</H4>
                </td>
            </tr>
            <tr>
                <td><code>{'<h5></h5>'}</code></td>
                <td>
                    <H5><span className="text-warning"> {'Heading 5'}</span>{"Sub Heading"}</H5>
                </td>
            </tr>
            <tr>
                <td className="pb-0"><code>{'<h6></h6>'}</code></td>
                <td className="pb-0">
                    <H6><span className="text-danger"> {'Heading 6'}</span>{"Sub Heading"}</H6>
                </td>
            </tr>
        </tbody>
    )
}
