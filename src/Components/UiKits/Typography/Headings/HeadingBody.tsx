import React from 'react'
import { H1, H2, H3, H4, H5, H6 } from '../../../../AbstractElements'

export default function HeadingBody() {
    return (
        <tbody>
            <tr>
                <td><code>{"<h1></h1>"}</code></td>
                <td><H2 className="display-h1 mb-0">{'2.5rem'}</H2></td>
                <td><H1><span>{'Heading 1 (MEGA)'}</span></H1></td>
            </tr>
            <tr>
                <td><code>{"<h2></h2>"}</code></td>
                <td><H2 className="mb-0">{'2rem'}</H2></td>
                <td><H2><span> {'Heading 2 (XL)'}</span></H2></td>
            </tr>
            <tr>
                <td><code>{"<h3></h3>"}</code></td>
                <td><H3 className="mb-0">{'1.75rem'}</H3></td>
                <td><H3><span> {'Heading 3 (LARGE)'}</span></H3></td>
            </tr>
            <tr>
                <td><code>{"<h4></h4>"}</code></td>
                <td><H4 className="mb-0">{'1.5rem'}</H4></td>
                <td><H4><span> {'Heading 4 (MEDIUM)'}</span></H4></td>
            </tr>
            <tr>
                <td><code>{"<h5></h5>"}</code></td>
                <td><H5 className="mb-0">{'1.25rem'}</H5></td>
                <td><H5><span> {'Heading 5 (SMALL)'}</span></H5></td>
            </tr>
            <tr>
                <td className="pb-0"><code>{"<h6></h6>"}</code></td>
                <td className="pb-0"><H6 className="mb-0">{'1rem'}</H6></td>
                <td className="pb-0"><H6><span>{'Heading 6'}</span></H6></td>
            </tr>
        </tbody>
    )
}
