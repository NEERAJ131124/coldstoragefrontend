import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { MessageCircle, ThumbsUp, User } from 'react-feather'
import { H4, Image, LI, P, UL } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'
import { Comment } from '../../../../../Utils/Constants'
import CommentSection from './CommentSection'
import { commentBoxData, singleBlogContentTop } from '../../../../../Data/Miscellaneous/Learning'

export default function BlogDetails() {
    return (
        <Col xl={9} className="xl-60 order-xl-0 order-1 box-col-12 learning-details">
            <Card>
                <CardBody>
                    <div className="blog-single">
                        <div className="blog-box blog-details">
                            <Image className="img-fluid w-100" src={dynamicImage(`faq/learning-1.png`)} alt="blog-main" />
                            <div className="blog-details">
                                <UL className="simple-list flex-row blog-social">
                                    <LI>{'25 July 2024'}</LI>
                                    <LI><User />{'Mark '}<span>{'Jecno'}</span></LI>
                                    <LI><ThumbsUp />{'02 '}<span>{'Hits'}</span></LI>
                                    <LI><MessageCircle />{'598 Comments'}</LI>
                                </UL>
                                <H4>{'Knowledge can be defined as awareness of facts or as practical skills. there is wide agreement among philosophers that it is a form of true belief.Internet.'}</H4>
                                <div className="single-blog-content-top">
                                    {singleBlogContentTop.map((item, index) => (
                                        <P key={index}>{item}</P>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <section className="comment-box">
                            <H4>{Comment}</H4>
                            <hr />
                            <UL className='simple-list'>
                                {commentBoxData.map((item) => (
                                    <LI key={item.id}>
                                        {item.id !== 2 ? (
                                            <CommentSection item={item} colClass='col-md-4 xl-100' socialComment={true} />
                                        ) : (
                                            <UL>
                                                <LI><CommentSection item={item} colClass='col-xl-12' /></LI>
                                            </UL>
                                        )}
                                    </LI>
                                ))}
                            </UL>
                        </section>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}