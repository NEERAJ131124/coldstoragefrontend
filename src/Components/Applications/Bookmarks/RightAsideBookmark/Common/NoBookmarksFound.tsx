import React from 'react'
import { Col } from 'reactstrap'

export default function NoBookmarksFound() {
    return (
        <Col xl={12}>
            <div className="no-favourite">
                <span>{'No Bookmarks Found.'}</span>
            </div>
        </Col>
    )
}