import React from 'react'

export default function LikeContent() {
    return (
        <div className="like-content">
            <span>
                <i className="fa-solid fa-heart font-danger" />
            </span>
            <span className="pull-right comment-number">
                <span>{"20 "}</span>
                <span>
                    <i className="fa-solid fa-share-nodes me-0" />
                </span>
            </span>
            <span className="pull-right comment-number">
                <span>{"10 "}</span>
                <span>
                    <i className="fa-regular fa-comment" />
                </span>
            </span>
        </div>
    )
}