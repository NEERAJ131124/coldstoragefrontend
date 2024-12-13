import React from 'react'
import { CommentSectionProps } from '../../../../Types/Miscellaneous.type'
import { H6, Image, LI, P, UL } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Utils'
import { Col, Row } from 'reactstrap'
import { blogBoxShadowList } from '../../../../Data/Miscellaneous/Blog'

export default function CommentSection({ socialComment, colClass, item }: CommentSectionProps) {
    return (
        <div className="d-flex align-self-center">
            <Image className="align-self-center" src={dynamicImage(`blog/${item.src}`)} alt="Generic placeholder image" />
            <div className="flex-grow-1">
                <Row>
                    <div className={colClass}>
                        <H6 className="mt-0">
                            {'Jolio Mark'}<span>{' ( Designer )'}</span>
                        </H6>
                    </div>
                    {socialComment &&
                        <Col md={8}>
                            <UL className="flex-row comment-social float-start float-md-end">
                                {blogBoxShadowList.slice(1, 3).map((list) => (
                                    <LI key={list.id}>
                                        <i className={`fa-solid fa-${list.icon}`} />
                                        {list.text}
                                    </LI>
                                ))}
                            </UL>
                        </Col>}
                </Row>
                <P>
                    {"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."}
                </P>
            </div>
        </div>
    )
}