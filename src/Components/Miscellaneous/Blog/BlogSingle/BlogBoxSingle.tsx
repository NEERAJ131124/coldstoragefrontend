import React from 'react'
import { H4, Image, LI, P, UL } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Utils'
import { Comment } from '../../../../Utils/Constants'
import CommentSection from './CommentSection'
import { blogBoxShadowList, blogSingleData, singleBlogContent } from '../../../../Data/Miscellaneous/Blog'

export default function BlogBoxSingle() {
    return (
        <div className="blog-single">
            <div className="blog-box blog-details">
                <Image className="img-fluid w-100" src={dynamicImage(`blog/blog-single.jpg`)} alt="blog-main" />
                <div className="blog-details">
                    <UL className="simple-list flex-row blog-social">
                        <LI>{'25 July 2024'}</LI>
                        {blogBoxShadowList.map((item) => (
                            <LI key={item.id}>
                                <i className={`fa-solid fa-${item.icon}`} />
                                <span>{item.text}</span>
                            </LI>
                        ))}
                    </UL>
                    <H4>{"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."}</H4>
                    <div className="single-blog-content-top">
                        {singleBlogContent.map((item, index) => (
                            <P key={index}>{item}</P>
                        ))}
                    </div>
                </div>
            </div>
            <section className="comment-box">
                <H4>{Comment}</H4>
                <hr />
                <UL className='simple-list'>
                    {blogSingleData.map((item) => (
                        <LI key={item.id}>
                            {item.id !== 2 ? (
                                <CommentSection item={item} colClass='col-md-4' socialComment={true} />
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
    )
}