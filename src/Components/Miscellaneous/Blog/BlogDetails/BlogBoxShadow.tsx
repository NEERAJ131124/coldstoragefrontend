import React from 'react'
import { Card, Col } from 'reactstrap'
import { H4, Image, LI, P, UL } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Utils'
import { blogBoxShadowList } from '../../../../Data/Miscellaneous/Blog'

export default function BlogBoxShadow() {
    return (
        <Col xl={6} className="set-col-12 box-col-12">
            <Card>
                <div className="blog-box blog-shadow">
                    <Image className="img-fluid" src={dynamicImage(`blog/blog.jpg`)} alt="" />
                    <div className="blog-details">
                        <P>{'25 July 2024'}</P>
                        <H4>{"Accusamus et iusto odio dignissimos ducimus qui blanditiis."}</H4>
                        <UL className="simple-list flex-row blog-social">
                            {blogBoxShadowList.map((item) => (
                                <LI key={item.id}>
                                    <i className={`fa-solid fa-${item.icon}`} />
                                    {item.text}
                                </LI>
                            ))}
                        </UL>
                    </div>
                </div>
            </Card>
        </Col>
    )
}