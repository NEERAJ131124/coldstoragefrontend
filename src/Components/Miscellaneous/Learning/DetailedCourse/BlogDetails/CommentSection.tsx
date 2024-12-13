import React from 'react'
import { Col, Row } from 'reactstrap'
import { MessageCircle, ThumbsUp } from 'react-feather'
import { CommentSectionProps } from '../../../../../Types/Miscellaneous.type'
import { H5, Image, LI, P, UL } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'

export default function CommentSection({ socialComment, colClass, item }: CommentSectionProps) {
    return (
        <div className="d-flex align-self-center">
            <Image className="align-self-center" src={dynamicImage(`avtar/${item.src}`)} alt="Generic placeholder image" />
            <div className="flex-grow-1">
                <Row>
                    <div className={colClass}>
                        <H5 className="f-w-700 mt-0">{item.name}<span>{'(Designer)'}</span></H5>
                    </div>
                    {socialComment &&
                        <Col md={8} className='xl-100'>
                            <UL className="flex-row comment-social float-start float-md-end learning-comment">
                                <LI><ThumbsUp />{'02 Hits'}</LI>
                                <LI><MessageCircle />{'598 Comments'}</LI>
                            </UL>
                        </Col>
                    }
                </Row>
                <P>{item.paragraph}</P>
            </div>
        </div>
    )
}